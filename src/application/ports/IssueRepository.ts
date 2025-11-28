import { Issue } from '../../domain/entities/Issue';

export interface IssueRepository {
    save(issue: Issue): Promise<Issue>;
    getById(id: string): Promise<Issue | null>;
    listAll(): Promise<Issue[]>;
    delete(id: string): Promise<void>;
}
