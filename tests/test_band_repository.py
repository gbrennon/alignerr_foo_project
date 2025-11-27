from domain.band import Band
from domain.band_repository import BandRepository
from uuid import UUID
import pytest

def test_adding_and_retrieving_band():
    band = Band.create("Test Band", ["Rock"])
    repo = BandRepository()
    
    repo.add_band(band)
    
    retrieved_band = repo.get_band(band.id)
    
    assert retrieved_band is not None
    assert retrieved_band == band
    assert isinstance(retrieved_band.id, UUID)

def test_getting_nonexistent_band():
    repo = BandRepository()
    
    nonexistent_band = repo.get_band(UUID(int=0))
    
    assert nonexistent_band is None
