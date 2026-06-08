from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional


class ReportCreate(BaseModel):
    title: str = Field(..., max_length=150)
    report_type: str = Field(..., max_length=50)


class ReportResponse(BaseModel):
    id: int
    title: str
    report_type: str
    file_path: Optional[str] = None
    status: str
    created_at: datetime

    class Config:
        from_attributes = True


class ReportStatus(BaseModel):
    report_id: int
    status: str
    generated_at: datetime


class ReportSummary(BaseModel):
    total_reports: int
    generated_today: int
    scheduled_reports: int
    downloads: int


class ReportDownload(BaseModel):
    report_id: int
    download_url: str


class ReportActionResponse(BaseModel):
    success: bool
    message: str