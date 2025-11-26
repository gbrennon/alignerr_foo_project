from typing import Protocol, Any

class UserRepository(Protocol):
    def save(self, user: Any) -> None: ...
