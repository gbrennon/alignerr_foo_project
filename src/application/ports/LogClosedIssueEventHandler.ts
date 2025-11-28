import { EventHandler } from './EventHandler';
import { IssueClosedEvent } from '../../domain/events/IssueClosedEvent';

export interface LogClosedIssueEventHandler extends EventHandler<IssueClosedEvent> { }
