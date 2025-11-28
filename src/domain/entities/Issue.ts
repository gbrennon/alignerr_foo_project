import * as crypto from 'crypto';

export enum IssueStatus {
    Open = 'open',
    Closed = 'closed'
}

export class Issue {
    readonly id: string;
    title: string;
    description: string;
    status: IssueStatus;

    constructor(id: string, title: string, description: string, status: IssueStatus) {
        if (title.length < 10 || title.length > 25) {
            throw new Error('Title must be between 10 and 25 characters');
        }
        if (description.length > 256) {
            throw new Error('Description must be less than 256 characters');
        }

        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }

    static open(title: string, description: string): Issue {
        const id = crypto.randomUUID();
        return new Issue(id, title, description, IssueStatus.Open);
    }

    close(): void {
        this.status = IssueStatus.Closed;
    }
}
