from uuid import UUID, uuid4


class Todo:
    def __init__(self, id: UUID, title: str, description: str, done: bool):
        if not isinstance(id, UUID):
            raise ValueError("id must be an UUID")
        if len(title) < 3 or len(title) > 42:
            raise ValueError("title must be between 3 and 42 characters")
        if len(description) > 512:
            raise ValueError("description must be less than 512 characters")
        
        self.id = id
        self.title = title
        self.description = description
        self.done = done

    @classmethod
    def create_new(cls, title: str, description: str) -> "Todo":
        return cls(id=uuid4(), title=title, description=description, done=False)
