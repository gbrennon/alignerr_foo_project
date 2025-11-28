import { Event } from './Event';
import { EventHandler } from './EventHandler';

export class EventBus {
    private handlers: Map<typeof Event, EventHandler<any>> = new Map();

    public publish(event: Event): void {
        // Implementation will go here
    }

    public subscribe<T extends Event>(handler: EventHandler<T>, event: T): void {
        this.handlers.set(event.constructor, handler);
    }
}
