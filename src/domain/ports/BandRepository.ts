import { Band } from '../models/Band';

export interface BandRepository {
    findById(id: number): Promise<Band | null>;
    create(band: Band): Promise<Band>;
}
