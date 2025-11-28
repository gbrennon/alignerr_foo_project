import { CloseIssueUseCaseImpl } from './CloseIssueUseCase';
import { IssueRepository } from '../ports/IssueRepository';
import { EventBus } from '../ports/EventBus';
import { Issue, IssueStatus } from '../../domain/entities/Issue';
import { IssueClosedEvent } from '../../domain/events/IssueClosedEvent';

describe('CloseIssueUseCaseImpl', () => {
    let issueRepository: Partial<IssueRepository>;
    let eventBus: Partial<EventBus>;
    let useCase: CloseIssueUseCaseImpl;

    beforeEach(() => {
        class MockIssue implements Issue {
            id: string;
            title: string;
            description: string;
            status: IssueStatus;

            constructor() {
                this.id = 'issue-id';
                this.title = 'Test Issue';
                this.description = 'Test Description';
                this.status = IssueStatus.Open;
            }

            close = jest.fn().mockImplementation(() => {
                this.status = IssueStatus.Closed;
                return this;
            });
        }

        const mockIssue = new MockIssue();

        issueRepository = {
            getById: jest.fn().mockResolvedValue(mockIssue),
            save: jest.fn().mockResolvedValue({
                id: 'issue-id',
                title: 'Test Issue',
                description: 'Test Description',
                status: IssueStatus.Closed
            } as Issue),
        };

        eventBus = {
            publish: jest.fn().mockResolvedValue(),
        };

        useCase = new CloseIssueUseCaseImpl(issueRepository as IssueRepository, eventBus as EventBus);
    });

    it('should close an existing issue and publish event', async () => {
        const request = { id: 'issue-id' };

        const result = await useCase.execute(request);

        expect(issueRepository.getById).toHaveBeenCalledWith(request.id);
        expect(issueRepository.save).toHaveBeenCalled();
        expect(eventBus.publish).toHaveBeenCalledWith(expect.any(IssueClosedEvent));
        expect(result.id).toBe('issue-id');
    });
});
