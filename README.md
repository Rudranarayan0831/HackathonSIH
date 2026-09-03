# KrishiFlow AI

Government-style farmer services portal for smart crop procurement, slot booking, centre vehicle requests, queue visibility and payment tracking.

## Project structure

- `frontend/` - static farmer dashboard (`index.html`, `styles.css`, `app.js`)
- `backend/` - Express API with dashboard, centre, booking and health endpoints

## Run the frontend

Open `frontend/index.html` directly in a browser. It is intentionally dependency-free and works as a static prototype.

## Run the backend

```powershell
cd backend
npm install
npm start
```

The API runs at `http://localhost:4000`.

Useful endpoints:

- `GET /api/health`
- `GET /api/dashboard`
- `GET /api/centres`
- `POST /api/bookings`
- `GET /api/bookings/:bookingId`
