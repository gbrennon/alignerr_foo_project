export interface ListIssuesRequest {
}

export interface IssueSummary {
    id: string;
    title: string;
    status: 'open' | 'closed';
}

export interface ListIssuesResponse {
    issues: IssueSummary[];
}

export interface ListIssuesUseCase {
    execute(request: ListIssuesRequest): Promise<ListIssuesResponse>;
}
