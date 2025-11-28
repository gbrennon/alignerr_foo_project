import { CloseIssueUseCase, CloseIssueRequest, CloseIssueResponse } from '../ports/CloseIssueUseCase';
import { IssueRepository } from '../ports/IssueRepository';
import { EventBus } from '../ports/EventBus';
import { Issue } from '../../domain/entities/Issue';
import { IssueClosedEvent } from '../../domain/events/IssueClosedEvent';

export class CloseIssueUseCaseImpl implements CloseIssueUseCase {
    constructor(
        private readonly issueRepository: IssueRepository,
        private readonly eventBus: EventBus
    ) { }

    async execute(request: CloseIssueRequest): Promise<CloseIssueResponse> {
        const issue = await this.issueRepository.getById(request.id);
        if (!issue) {
            throw new Error('Issue not found');
        }

        issue.close();
        const savedIssue = await this.issueRepository.save(issue);
        this.eventBus.publish(new IssueClosedEvent(savedIssue.id));

        return {
            id: savedIssue.id,
            status: 'closed'
        };
    }
}
