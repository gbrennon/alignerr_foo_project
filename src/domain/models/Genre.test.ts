import { Genre, GenreEnum } from './Genre';
import { DomainErrors } from '../../core/DomainErrors';

describe('Genre', () => {
    describe('create', () => {
        it('should create a valid Genre for each allowed genre', () => {
            const validGenres = Object.values(GenreEnum);

            validGenres.forEach(genre => {
                const result = Genre.create(genre);
                expect(result).toBeInstanceOf(Genre);
                expect((result as Genre).value).toBe(genre);
            });
        });

        it('should return DomainErrors for invalid genres', () => {
            const invalidGenre = 'Invalid Genre';
            const result = Genre.create(invalidGenre);

            expect(result).toBeInstanceOf(DomainErrors);
        });
    });
});
