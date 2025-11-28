export interface CloseIssueRequest {
    id: string;
}

export interface CloseIssueResponse {
    id: string;
    status: 'closed';
}

export interface CloseIssueUseCase {
    execute(request: CloseIssueRequest): Promise<CloseIssueResponse>;
}
