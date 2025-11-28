import { Event } from './Event';

export class IssueClosedEvent extends Event {
    constructor(public readonly id: string) {
        super();
    }
}
