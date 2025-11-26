from typing import Protocol, Dict, Any

class UserFactory(Protocol):
    def create(self, dto: Dict[str, Any]) -> Any: ...
