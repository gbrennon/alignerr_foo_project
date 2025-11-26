class User:
    def __init__(self, id: str, name: str, email: str, password: str):
        self.id = id
        self.name = name
        self.email = email
        self.password = password

    def __repr__(self):
        return f"User(id='{self.id}', name='{self.name}', email='{self.email}')"
