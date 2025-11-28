import { DomainErrors } from '../../core/DomainErrors';

export enum GenreEnum {
    BlackMetal = 'Black Metal',
    PowerMetal = 'Power Metal',
    DeathMetal = 'Death Metal',
    Blues = 'Blues',
    Rock = 'Rock',
}

export class Genre {
    private constructor(public readonly value: GenreEnum) { }

    public static create(value: string): Genre | DomainErrors {
        if (Object.values(GenreEnum).includes(value as GenreEnum)) {
            return new Genre(value as GenreEnum);
        }

        return DomainErrors.create(`Genre '${value}' is not valid`);
    }
}
