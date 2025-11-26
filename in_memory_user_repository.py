from user import User

class InMemoryUserRepository:
    def __init__(self):
        self._users = {}

    def save(self, user: User) -> None:
        self._users[user.id] = user
