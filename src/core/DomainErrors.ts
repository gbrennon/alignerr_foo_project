export class DomainErrors {
    private static errors: string[] = [];

    public static create(message: string): DomainErrors {
        this.errors.push(message);
        return this;
    }

    public static getErrors(): string[] {
        return this.errors;
    }

    public static clear(): void {
        this.errors = [];
    }
}
