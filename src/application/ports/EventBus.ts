export interface EventBus {
    publish(event: any): Promise<void>;
    subscribe(eventType: string, callback: (event: any) => void): void;
}
