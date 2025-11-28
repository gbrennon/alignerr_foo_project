import { IssueOpenedEvent } from '../../domain/events/IssueOpenedEvent';
import { IssueClosedEvent } from '../../domain/events/IssueClosedEvent';

export interface EventHandler {
    handle(event: IssueOpenedEvent): void;
    handle(event: IssueClosedEvent): void;
}
