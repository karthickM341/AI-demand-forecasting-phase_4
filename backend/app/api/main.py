from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Routes
from app.api.v1 import (
    auth,
    users,
    forecasting,
    analytics,
    inventory,
    reports,
    monitoring,
    notifications,
)

app = FastAPI(
    title="Advanced AI Demand Forecasting API",
    version="4.0.0",
    description="Enterprise AI Demand Forecasting Platform"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health Check
@app.get("/")
def root():
    return {
        "message": "AI Demand Forecasting API Running",
        "version": "4.0.0"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }

# API Routes
app.include_router(
    auth.router,
    prefix="/api/v1/auth",
    tags=["Authentication"]
)

app.include_router(
    users.router,
    prefix="/api/v1/users",
    tags=["Users"]
)

app.include_router(
    forecasting.router,
    prefix="/api/v1/forecast",
    tags=["Forecasting"]
)

app.include_router(
    analytics.router,
    prefix="/api/v1/analytics",
    tags=["Analytics"]
)

app.include_router(
    inventory.router,
    prefix="/api/v1/inventory",
    tags=["Inventory"]
)

app.include_router(
    reports.router,
    prefix="/api/v1/reports",
    tags=["Reports"]
)

app.include_router(
    monitoring.router,
    prefix="/api/v1/monitoring",
    tags=["Monitoring"]
)

app.include_router(
    notifications.router,
    prefix="/api/v1/notifications",
    tags=["Notifications"]
)