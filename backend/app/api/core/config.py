from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    # Application
    APP_NAME: str = "Advanced AI Demand Forecasting"
    APP_VERSION: str = "4.0.0"
    DEBUG: bool = True

    # Database
    DATABASE_URL: str = (
        "mysql+pymysql://root:password@localhost/"
        "ai_demand_forecasting"
    )

    # Security
    SECRET_KEY: str = "your-secret-key"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # CORS
    ALLOWED_ORIGINS: list[str] = [
        "http://localhost:5173"
    ]

    # Forecast Settings
    DEFAULT_FORECAST_DAYS: int = 30
    AUTO_RETRAIN_ENABLED: bool = True

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()