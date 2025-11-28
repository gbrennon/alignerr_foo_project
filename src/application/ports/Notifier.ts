import { Injectable } from '@nestjs/common';

export interface Notifier {
    notify(message: string): Promise<void>;
}
