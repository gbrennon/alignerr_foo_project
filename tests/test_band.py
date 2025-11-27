from domain.band import Band
from uuid import UUID
import pytest

def test_band_creation():
    band = Band.create("Test Band", ["Rock"])
    
    assert isinstance(band.id, UUID)
    assert band.name == "Test Band"
    assert band.genres == ["Rock"]

def test_band_creation_with_empty_genres_should_fail():
    with pytest.raises(ValueError):
        Band.create("Test Band", [])
