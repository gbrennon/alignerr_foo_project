import { RegisterBandUseCase } from '../domain/ports/RegisterBandUseCase';
import { BandRepositoryImpl } from './BandRepository';
import { Band, RawBand } from '../domain/models/Band';
import { DomainErrors } from '../../core/DomainErrors';

export class RegisterBandUseCaseImpl implements RegisterBandUseCase {
    private repository: BandRepositoryImpl;

    constructor(repository: BandRepositoryImpl) {
        this.repository = repository;
    }

    async execute(input: { name: string; genres: string[]; members: string[] }): Promise<void> {
        const rawBand: RawBand = {
            id: 0, // Assuming ID will be generated or assigned by repository
            name: input.name,
            genres: input.genres,
            members: input.members
        };
        const bandOrError = Band.fromRaw(rawBand);
        if (bandOrError instanceof DomainErrors) {
            throw new Error('Failed to create band');
        }
        await this.repository.create(bandOrError as Band);
    }
}
