import { OpenIssueUseCase, OpenIssueRequest, OpenIssueResponse } from '../ports/OpenIssueUseCase';
import { IssueRepository } from '../ports/IssueRepository';
import { EventBus } from '../ports/EventBus';
import { Issue } from '../../domain/entities/Issue';
import { IssueOpenedEvent } from '../../domain/events/IssueOpenedEvent';

export class OpenIssueUseCaseImpl implements OpenIssueUseCase {
    constructor(
        private readonly issueRepository: IssueRepository,
        private readonly eventBus: EventBus
    ) { }

    async execute(request: OpenIssueRequest): Promise<OpenIssueResponse> {
        const issue = Issue.open(request.title, request.description);
        const savedIssue = await this.issueRepository.save(issue);
        this.eventBus.publish(new IssueOpenedEvent(savedIssue.id, savedIssue.title, savedIssue.description));

        return { id: savedIssue.id };
    }
}
