from pydantic import (
    BaseModel,
    EmailStr,
    Field
)
from datetime import datetime
from typing import Optional


class UserCreate(BaseModel):
    full_name: str = Field(
        ...,
        min_length=3,
        max_length=100
    )
    email: EmailStr
    password: str = Field(
        ...,
        min_length=8
    )
    role_id: int


class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    email: Optional[EmailStr] = None
    role_id: Optional[int] = None
    is_active: Optional[bool] = None


class UserResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    role_id: int
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True


class UserProfile(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    role: str
    is_active: bool

    class Config:
        from_attributes = True


class UserStatusUpdate(BaseModel):
    is_active: bool


class PasswordChange(BaseModel):
    current_password: str
    new_password: str = Field(
        ...,
        min_length=8
    )


class UserStats(BaseModel):
    total_users: int
    active_users: int
    inactive_users: int