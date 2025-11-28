import { Issue } from "../../domain/entities/Issue";
import { getRepository } from "typeorm";

export class TypeOrmIssueRepository implements IssueRepository {
    private repository = getRepository(Issue);

    async save(issue: Issue): Promise<Issue> {
        return this.repository.save(issue);
    }

    async getById(id: string): Promise<Issue | null> {
        return this.repository.findOne(id);
    }

    async listAll(): Promise<Issue[]> {
        return this.repository.find();
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
