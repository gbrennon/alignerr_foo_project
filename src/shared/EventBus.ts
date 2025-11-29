import { Event } from './Event';
import { EventHandler } from './EventHandler';

export class EventBus {
    private handlers: Map<string, EventHandler<any>[]> = new Map();

    public publish(event: Event): void {
        const handlers = this.handlers.get(event.getId());
        handlers?.forEach(handler => handler.handle(event));
    }

    public subscribe<T extends Event>(handler: EventHandler<T>, event: any): void {
        const existingHandlers = this.handlers.get(event.getId()) || [];
        existingHandlers.push(handler);
        this.handlers.set(event.getId(), existingHandlers);
    }
}
