FROM python:3.10

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    postgresql-client \
    libpq-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy project files
COPY . .

# Create and set a non-root user
RUN useradd -m myuser && chown -R myuser:myuser /app
# RUN python manage.py migrate
# RUN python manage.py collectstatic --noinput
USER myuser

# Run gunicorn
CMD gunicorn portfolio_yo.wsgi:application --bind 0.0.0.0:8000
