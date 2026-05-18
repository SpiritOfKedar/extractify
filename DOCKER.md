# Extractify – Docker Setup

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (v20+ with Compose v2 plugin)
- Copy `.env.example` to `.env` and fill in real values

```bash
cp .env.example .env
```

---

## Architecture

```
┌────────────┐      ┌──────────────┐      ┌─────────────┐
│  Frontend   │─────▶│   Backend    │─────▶│  PostgreSQL  │
│  Next.js    │:3000 │   FastAPI    │:8000 │  (Neon DB)   │
└────────────┘      └──────────────┘      └─────────────┘
          ▲                  ▲
          └──────────────────┘
                  app-network (bridge)
```

All services communicate on a shared `app-network` bridge network.
The frontend calls the backend via `http://backend:8000` for server-side
requests. Browser-side (client) calls use the `NEXT_PUBLIC_API_BASE_URL`
env var — set it to `http://localhost:8000` locally, or your public domain
in production.

In production, the database is hosted on **Neon DB** (serverless PostgreSQL).
In development, `docker-compose.dev.yml` spins up a local PostgreSQL container.

---

## Quick Start (Production)

```bash
# Build and start all services
docker compose up -d --build

# Verify everything is healthy
docker compose ps

# Follow logs
docker compose logs -f
```

The app will be available at:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000
- **Health check:** http://localhost:8000/health
- **Readiness check:** http://localhost:8000/ready

---

## Development Mode

Development mode mounts source code into containers for hot-reload
and uses a local PostgreSQL container instead of Neon.

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

- Backend: uvicorn runs with `--reload` — edit Python files and see changes instantly.
- Frontend: Next.js dev server with Fast Refresh — edit React/TS files and see changes instantly.

---

## Common Commands

| Command | Description |
|---|---|
| `docker compose up -d --build` | Build images and start all services |
| `docker compose down` | Stop and remove containers |
| `docker compose down -v` | Stop, remove containers **and volumes** (deletes DB data!) |
| `docker compose logs -f backend` | Tail backend logs |
| `docker compose logs -f frontend` | Tail frontend logs |
| `docker compose ps` | List running services and health status |
| `docker compose exec backend bash` | Shell into the backend container |
| `docker compose exec postgres psql -U postgres extractify` | Open a PostgreSQL shell |
| `docker compose restart backend` | Restart just the backend |

### Automated Backend Tests (Pytest)

Run backend tests with pytest inside the backend container:

```bash
docker compose up -d --build backend
docker exec extractify-backend-1 pytest
```

Run a specific test file:

```bash
docker exec extractify-backend-1 pytest tests/download_security_test.py
```

---

## PostgreSQL Access

In development mode, a local PostgreSQL container is available.

**Connect with psql (from host):**
```bash
psql "postgresql://postgres:postgres@localhost:5432/extractify"
```

**Production (Neon DB):**
Use the connection string from your Neon dashboard. Set it as `DATABASE_URL` in `.env`.

---

## Running Migrations / DB Setup

Schema changes are managed with **Alembic**. Migrations run automatically in production via [`backend/start.sh`](backend/start.sh) before uvicorn starts.

```bash
# Apply all pending migrations (local or inside container)
cd backend && alembic upgrade head

# Create a new migration after model changes
cd backend && alembic revision --autogenerate -m "describe change"
```

In development, `AUTO_CREATE_TABLES=true` (default) can still auto-create tables via SQLAlchemy for convenience. In production, rely on Alembic only (`AUTO_CREATE_TABLES=false` by default when `APP_ENV=production`).

---

## Environment Variables

See [.env.example](.env.example) for the full list. Key variables:

| Variable | Description | Default |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string (Neon pooled endpoint + `?ssl=require`) | `postgresql+asyncpg://postgres:postgres@localhost:5432/extractify` |
| `NEXT_PUBLIC_API_BASE_URL` | API URL for browser-side fetch | `http://localhost:8000` |
| `BACKEND_PORT` | Host port for backend | `8000` |
| `FRONTEND_PORT` | Host port for frontend | `3000` |

---

## Rebuilding a Single Service

```bash
docker compose up -d --build backend   # rebuild only backend
docker compose up -d --build frontend  # rebuild only frontend
```

---

## Troubleshooting

**Backend won't start / "postgresql_connection_failed":**
- Check that `DATABASE_URL` is set correctly in `.env`
- For local dev, ensure the `postgres` service is healthy: `docker compose ps`
- For production, verify Neon DB is accessible

**Frontend build fails with "Could not find a production build":**
- Ensure `output: "standalone"` is set in `frontend/next.config.ts`

**Port already in use:**
- Change `BACKEND_PORT` or `FRONTEND_PORT` in `.env`
