export class Issue {
    readonly id: string;
    title: string;
    description: string;
    status: 'open' | 'closed';

    constructor(id: string, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = 'open';
    }

    close(): void {
        this.status = 'closed';
    }
}
