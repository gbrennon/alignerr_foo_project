from dataclasses import dataclass
from uuid import uuid4, UUID
from typing import List

@dataclass(frozen=True)
class Band:
    id: UUID
    name: str
    genres: List[str]

    @staticmethod
    def create(name: str, genres: List[str]) -> 'Band':
        if len(genres) < 1:
            raise ValueError("Genres must have at least one element")
        
        return Band(
            id=uuid4(),
            name=name,
            genres=genres
        )
