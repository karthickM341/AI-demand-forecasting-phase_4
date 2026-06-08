from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.api.models.user import User
from app.api.core.security import (
    verify_password,
    create_access_token
)


class AuthService:

    @staticmethod
    def login(
        db: Session,
        email: str,
        password: str
    ):

        user = (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

        if not user:

            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid credentials"
            )

        if not verify_password(
            password,
            user.password_hash
        ):

            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid credentials"
            )

        token = create_access_token(
            {
                "sub": user.email,
                "role": user.role.name
            }
        )

        return {
            "access_token": token,
            "token_type": "bearer",
            "user": {
                "id": user.id,
                "name": user.full_name,
                "email": user.email
            }
        }

    @staticmethod
    def get_user(
        db: Session,
        email: str
    ):

        return (
            db.query(User)
            .filter(User.email == email)
            .first()
        )