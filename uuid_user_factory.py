import uuid
from user import User
from user_factory import UserFactory

class UuidUserFactory(UserFactory):
    def create(self, dto):
        user_id = str(uuid.uuid4())
        return User(id=user_id, name=dto['name'], email=dto['email'], password=dto['password'])
