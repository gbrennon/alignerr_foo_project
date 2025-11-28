import { Event } from './Event';
import { EventHandler } from './EventHandler';

export class EventBus {
    private handlers: Map<Function, EventHandler<any>> = new Map();

    public publish(event: Event): void {
        this.handlers.forEach((handler, eventConstructor) => {
            if (event.constructor === eventConstructor) {
                handler.handle(event);
            }
        });
    }

    public subscribe<T extends Event>(handler: EventHandler<T>, event: T): void {
        this.handlers.set(event.constructor, handler);
    }
}
