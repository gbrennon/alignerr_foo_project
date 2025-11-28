import { OpenIssueUseCaseImpl } from './OpenIssueUseCase';
import { IssueRepository } from '../ports/IssueRepository';
import { EventBus } from '../ports/EventBus';
import { Issue } from '../../domain/entities/Issue';
import { IssueOpenedEvent } from '../../domain/events/IssueOpenedEvent';

describe('OpenIssueUseCaseImpl', () => {
    let issueRepository: Partial<IssueRepository>;
    let eventBus: Partial<EventBus>;
    let useCase: OpenIssueUseCaseImpl;

    beforeEach(() => {
        issueRepository = {
            save: jest.fn().mockResolvedValue({
                id: 'mock-id',
                title: 'Valid Title',
                description: 'Valid Description'
            } as Issue),
        };

        eventBus = {
            publish: jest.fn().mockResolvedValue(),
        };

        useCase = new OpenIssueUseCaseImpl(issueRepository as IssueRepository, eventBus as EventBus);
    });

    it('should save issue and publish event', async () => {
        const request = { title: 'Valid Title', description: 'Valid Description' };

        const result = await useCase.execute(request);

        expect(issueRepository.save).toHaveBeenCalledWith(expect.objectContaining(request));
        expect(eventBus.publish).toHaveBeenCalledWith(expect.any(IssueOpenedEvent));
        expect(result.id).toBe('mock-id');
    });
});
