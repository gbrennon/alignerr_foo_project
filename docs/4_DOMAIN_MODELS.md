Implemented Domain Models:

Genre
- ValueObject with GenreEnum (Black Metal, Power Metal, Death Metal, Blues, Rock)
- Static create() method that validates input and returns Genre or DomainErrors

Band
- Entity with id, name, genres (Genre[]), members (string[])
- Static fromRaw() factory method that validates input and returns Band or DomainErrors
