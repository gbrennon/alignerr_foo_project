import { Genre, GenreEnum } from './Genre';
import { DomainErrors } from '../../core/DomainErrors';

export interface RawBand {
    id: number;
    name: string;
    genres: string[];
    members: string[];
}

export class Band {
    private constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly genres: Genre[],
        public readonly members: string[]
    ) { }

    public static fromRaw(rawBand: RawBand): Band | DomainErrors {
        const genreErrors: DomainErrors | null = null;
        const genres: Genre[] = [];

        for (const genreValue of rawBand.genres) {
            const genre = Genre.create(genreValue);
            if (genre instanceof DomainErrors) {
                // Handle validation error for genre
                return genre;
            }
            genres.push(genre as Genre);
        }

        if (!rawBand.name.trim()) {
            return DomainErrors.create('Band name is required');
        }

        return new Band(rawBand.id, rawBand.name, genres, rawBand.members);
    }
}
