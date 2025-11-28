import { Event } from './Event';
import { EventHandler } from './EventHandler';

export class EventBus {
    private handlers: Map<Function, EventHandler<any>[]> = new Map();

    public publish(event: Event): void {
        const handlers = this.handlers.get(event.constructor);
        handlers?.forEach(handler => handler.handle(event));
    }

    public subscribe<T extends Event>(handler: EventHandler<T>, event: T): void {
        const existingHandlers = this.handlers.get(event.constructor) || [];
        existingHandlers.push(handler);
        this.handlers.set(event.constructor, existingHandlers);
    }
}
