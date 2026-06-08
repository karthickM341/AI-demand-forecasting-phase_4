from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.core.database import get_db
from app.api.core.security import (
    create_access_token,
    verify_password,
    get_current_user
)

from app.api.models.user import User

router = APIRouter()


@router.post("/login")
async def login(
    email: str,
    password: str,
    db: Session = Depends(get_db)
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

    access_token = create_access_token(
        {
            "sub": user.email,
            "role": user.role.name
        }
    )

    return {
        "success": True,
        "access_token": access_token,
        "token_type": "bearer"
    }


@router.get("/me")
async def get_profile(
    current_user=Depends(
        get_current_user
    )
):

    return {
        "success": True,
        "user": current_user
    }


@router.get("/verify")
async def verify_token(
    current_user=Depends(
        get_current_user
    )
):

    return {
        "success": True,
        "message": "Token Valid"
    }