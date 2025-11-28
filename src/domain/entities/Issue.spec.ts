import { Issue, IssueStatus } from './Issue';

describe('Issue', () => {
    it('should be initialized with "open" status via factory method', () => {
        const issue = Issue.open('Valid Title', 'Valid Description');
        expect(issue.status).toBe(IssueStatus.Open);
    });

    it('should change status to "closed" when close() is called', () => {
        const issue = Issue.open('Valid Title', 'Valid Description');
        issue.close();
        expect(issue.status).toBe(IssueStatus.Closed);
    });

    it('should throw error for title shorter than 10 characters', () => {
        expect(() => {
            Issue.open('Short', 'Description');
        }).toThrow('Title must be between 10 and 25 characters');
    });

    it('should throw error for title longer than 25 characters', () => {
        expect(() => {
            Issue.open('This title is way too long', 'Description');
        }).toThrow('Title must be between 10 and 25 characters');
    });

    it('should throw error for description longer than 256 characters', () => {
        const longDesc = 'a'.repeat(257);
        expect(() => {
            Issue.open('Valid Title', longDesc);
        }).toThrow('Description must be less than 256 characters');
    });
});
