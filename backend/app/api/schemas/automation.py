from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class AutomationCreate(BaseModel):
    name: str
    task_type: str
    schedule: str


class AutomationResponse(BaseModel):
    id: int
    name: str
    task_type: str
    schedule: str
    is_active: bool

    class Config:
        from_attributes = True


class AutomationStatus(BaseModel):
    active_jobs: int
    scheduler_status: str
    last_run: Optional[datetime] = None


class AutomationJob(BaseModel):
    job_id: int
    name: str
    status: str
    schedule: str


class AutomationActionResponse(BaseModel):
    success: bool
    message: str