from domain.band import Band
from uuid import UUID
from typing import Dict, Optional


class BandRepository:
    def __init__(self, database: Optional[Dict[UUID, Band]] = None) -> None:
        self.database = database if database is not None else {}

    def add_band(self, band: Band) -> None:
        self.database[band.id] = band

    def get_band(self, band_id: UUID) -> Optional[Band]:
        return self.database.get(band_id)
