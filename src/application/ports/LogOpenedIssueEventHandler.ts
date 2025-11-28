import { EventHandler } from './EventHandler';
import { IssueOpenedEvent } from '../../domain/events/IssueOpenedEvent';

export interface LogOpenedIssueEventHandler extends EventHandler<IssueOpenedEvent> { }
