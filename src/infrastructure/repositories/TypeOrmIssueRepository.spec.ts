import { DataSource } from "typeorm";
import { Issue } from "../../domain/entities/Issue";
import { TypeOrmIssueRepository } from "./TypeOrmIssueRepository";

describe("TypeOrmIssueRepository", () => {
    let dataSource: DataSource;
    let repository: TypeOrmIssueRepository;

    beforeAll(async () => {
        dataSource = new DataSource({
            type: "sqlite",
            database: ":memory:",
            entities: [Issue],
            synchronize: true,
            logging: false,
        });
        await dataSource.initialize();
        repository = new TypeOrmIssueRepository();
    });

    afterAll(async () => {
        await dataSource.destroy();
    });

    it("should create and retrieve an issue", async () => {
        const issue = new Issue("1", "Test Issue", "Test Description", IssueStatus.Open);
        await repository.save(issue);

        const found = await repository.getById("1");
        expect(found).toBeDefined();
        expect(found?.title).toBe("Test Issue");
    });

    it("should list all issues", async () => {
        const issue1 = new Issue("2", "Issue 1", "Description 1", IssueStatus.Open);
        const issue2 = new Issue("3", "Issue 2", "Description 2", IssueStatus.Closed);
        await repository.save(issue1);
        await repository.save(issue2);

        const allIssues = await repository.listAll();
        expect(allIssues.length).toBe(2);
    });
});
