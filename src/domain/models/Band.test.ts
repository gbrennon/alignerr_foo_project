import { Band, RawBand } from './Band';
import { DomainErrors } from '../../core/DomainErrors';

describe('Band', () => {
    describe('fromRaw', () => {
        it('should create a valid Band from raw data', () => {
            const rawBand: RawBand = {
                id: 1,
                name: 'Test Band',
                genres: ['Rock'],
                members: ['Member 1']
            };

            const result = Band.fromRaw(rawBand);
            expect(result).toBeInstanceOf(Band);
        });

        it('should return DomainErrors for invalid band name', () => {
            const rawBand: RawBand = {
                id: 2,
                name: '',
                genres: ['Rock'],
                members: ['Member 1']
            };

            const result = Band.fromRaw(rawBand);
            expect(result).toBeInstanceOf(DomainErrors);
        });
    });
});
