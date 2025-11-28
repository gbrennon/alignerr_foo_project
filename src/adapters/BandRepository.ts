import { BandRepository } from '../domain/ports/BandRepository';
import { Band } from '../domain/models/Band';

export class BandRepositoryImpl implements BandRepository {
    async findById(id: number): Promise<Band | null> {
        // Implementation goes here
        return null;
    }

    async create(band: Band): Promise<Band> {
        // Implementation goes here
        return band;
    }
}
