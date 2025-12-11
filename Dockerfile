# Dockerfile for Azure Trust Agents Challenge 1 DevUI
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY challenge-1/ ./challenge-1/
COPY .env ./

EXPOSE 8080

CMD ["python3", "challenge-1/devui/devui_launcher.py", "--mode", "all"]
