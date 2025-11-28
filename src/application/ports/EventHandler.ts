import { Event } from '../../domain/events/Event';

export interface EventHandler<T extends Event> {
    handle(event: T): void;
}
