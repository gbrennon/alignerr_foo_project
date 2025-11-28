import { OpenIssueUseCaseImpl } from './OpenIssueUseCase';
import { IssueRepository } from '../ports/IssueRepository';
import { EventBus } from '../ports/EventBus';
import { Issue } from '../../domain/entities/Issue';
import { IssueOpenedEvent } from '../../domain/events/IssueOpenedEvent';

describe('OpenIssueUseCaseImpl', () => {
    let issueRepository: MockIssueRepository;
    let eventBus: MockEventBus;
    let useCase: OpenIssueUseCaseImpl;

    beforeEach(() => {
        issueRepository = new MockIssueRepository();
        eventBus = new MockEventBus();
        useCase = new OpenIssueUseCaseImpl(issueRepository, eventBus);
    });

    it('should save issue and publish event', async () => {
        const request = { title: 'Valid Title', description: 'Valid Description' };

        const result = await useCase.execute(request);

        expect(issueRepository.save).toHaveBeenCalled();
        expect(eventBus.publish).toHaveBeenCalledWith(expect.any(IssueOpenedEvent));
        expect(result.id).toBeDefined();
    });
});

class MockIssueRepository implements IssueRepository {
    async save(issue: Issue): Promise<Issue> {
        // Simple mock implementation
        return { ...issue, id: 'mock-id' } as Issue;
    }

    async getById(id: string): Promise<Issue | null> {
        return null;
    }

    async listAll(): Promise<Issue[]> {
        return [];
    }

    async delete(id: string): Promise<void> {
        // Empty implementation
    }
}

class MockEventBus implements EventBus {
    async publish(event: any): Promise<void> {
        // Mock publish
        return Promise.resolve();
    }

    async subscribe(eventType: string, callback: (event: any) => void): Promise<void> {
        // Mock subscribe
        return Promise.resolve();
    }
}
