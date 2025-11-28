import { DataSource } from "typeorm";

export default new DataSource({
    type: "sqlite",
    database: ":memory:",
    entities: ["src/domain/entities/**/*.ts"],
    synchronize: true,
    logging: true,
});
