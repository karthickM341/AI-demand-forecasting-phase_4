import logging
from logging.handlers import RotatingFileHandler
from pathlib import Path

# Create logs directory
Path("logs").mkdir(exist_ok=True)

# Logger
logger = logging.getLogger("ai_forecasting")
logger.setLevel(logging.INFO)

# Formatter
formatter = logging.Formatter(
    "%(asctime)s | %(levelname)s | %(name)s | %(message)s"
)

# File Handler
file_handler = RotatingFileHandler(
    "logs/app.log",
    maxBytes=5 * 1024 * 1024,
    backupCount=3
)

file_handler.setFormatter(formatter)

# Console Handler
console_handler = logging.StreamHandler()
console_handler.setFormatter(formatter)

# Add Handlers
logger.addHandler(file_handler)
logger.addHandler(console_handler)