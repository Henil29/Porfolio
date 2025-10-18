# Portfolio

## One-command development

Install dependencies and run both backend (Express) and frontend (Vite) together:

```
npm install
npm run dev
```

The dev script uses a Vite proxy so the frontend calls `/api` without CORS. The backend runs on port 5000 by default; you can change it via the `PORT` env var.

Environment variables (create a `.env` file based on `.env.example`):

```
MAIL_USER=your@gmail.com
MAIL_PASS=your_gmail_app_password
FRONTEND_URL=http://localhost:5173
PORT=5000
```

## Production

Build the frontend:

```
npm run build
```

Start the backend to serve the API and the built frontend from `dist/`:

```
npm start
```

Health check endpoint: `GET /health`

# Porfolio
Porfolio
