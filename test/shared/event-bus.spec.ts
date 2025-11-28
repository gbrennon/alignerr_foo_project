import { EventBus } from '../../src/shared/EventBus';
import { Event } from '../../src/shared/Event';
import { EventHandler } from '../../src/shared/EventHandler';

class TestEvent implements Event {
    payload: Record<string, unknown>;

    constructor(payload: Record<string, unknown>) {
        this.payload = payload;
    }

    toPayload(): Record<string, unknown> {
        return this.payload;
    }
}

class TestHandler implements EventHandler<TestEvent> {
    handledEvents: TestEvent[] = [];

    handle(event: TestEvent) {
        this.handledEvents.push(event);
    }
}

describe('EventBus', () => {
    let eventBus: EventBus;
    let testHandler: TestHandler;

    beforeEach(() => {
        eventBus = new EventBus();
        testHandler = new TestHandler();
    });

    it('should call handler when event is published', () => {
        eventBus.subscribe(testHandler, new TestEvent({ type: 'test' }));
        eventBus.publish(new TestEvent({ type: 'test' }));

        expect(testHandler.handledEvents.length).toBe(1);
    });

    it('should not call handler when event does not match', () => {
        eventBus.subscribe(testHandler, new TestEvent({ type: 'test' }));
        eventBus.publish(new TestEvent({ type: 'other' }));

        expect(testHandler.handledEvents.length).toBe(0);
    });
});
