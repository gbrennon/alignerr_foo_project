import { Issue } from './Issue';

describe('Issue', () => {
    it('should be initialized with "open" status', () => {
        const issue = new Issue('1', 'Test Title', 'Test Description');
        expect(issue.status).toBe('open');
    });

    it('should change status to "closed" when close() is called', () => {
        const issue = new Issue('1', 'Test Title', 'Test Description');
        issue.close();
        expect(issue.status).toBe('closed');
    });
});
