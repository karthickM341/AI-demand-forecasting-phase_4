from pydantic import (
    BaseModel,
    HttpUrl
)
from datetime import datetime
from typing import Optional


class IntegrationCreate(BaseModel):
    name: str
    integration_type: str
    endpoint: HttpUrl


class IntegrationResponse(BaseModel):
    id: int
    name: str
    integration_type: str
    endpoint: str
    is_active: bool

    class Config:
        from_attributes = True


class IntegrationStatus(BaseModel):
    integration_id: int
    status: str
    last_sync: Optional[datetime] = None


class WebhookConfig(BaseModel):
    name: str
    webhook_url: HttpUrl
    event_type: str


class SyncResponse(BaseModel):
    success: bool
    message: str