export interface Event {
    toPayload(): Record<string, unknown>;
}
