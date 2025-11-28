import { Event } from './Event';

export class IssueOpenedEvent extends Event {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string
    ) {
        super();
    }
}
