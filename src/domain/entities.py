from uuid import UUID, uuid4


class Todo:
    def __init__(self, id: UUID, title: str, description: str, done: bool):
        self.id = id
        self.title = title
        self.description = description
        self.done = done

    @classmethod
    def create_new(cls, title: str, description: str) -> "Todo":
        return cls(id=uuid4(), title=title, description=description, done=False)
