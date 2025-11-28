import { BandRepository } from './BandRepository';

export interface RegisterBandUseCase {
    execute(input: { name: string; genres: string[]; members: string[] }): Promise<void>;
}
