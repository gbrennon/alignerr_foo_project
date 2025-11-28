export interface OpenIssueRequest {
    title: string;
    description: string;
}

export interface OpenIssueResponse {
    id: string;
}

export interface OpenIssueUseCase {
    execute(request: OpenIssueRequest): Promise<OpenIssueResponse>;
}
