# Porfolio

Modern developer portfolio built with React (Vite) on the frontend and an Express email service on the backend. The contact form delivers messages via Gmail SMTP or Resend (fallback/alternative) — configurable by environment variables.

## ✨ Features

- Responsive React UI with Tailwind CSS
- Smooth animations with GSAP and Motion
- Contact form with toast feedback and loading states
- Email delivery via:
  - Gmail SMTP (Nodemailer) — supports 465 SMTPS and 587 STARTTLS
  - Resend API (optional) if `RESEND_API_KEY` is set
- Health and diagnostics endpoints (`/health`, `/api/verify-smtp`)

## 🧰 Tech Stack

- Frontend: React 19, Vite 7, Tailwind CSS 4, GSAP, lucide-react, react-hot-toast
- Backend: Node.js, Express 5, Nodemailer, Resend, CORS, dotenv

## 📦 Monorepo Structure

```
backend/
  mail.js
  package.json
  server.js
frontend/
  index.html
  package.json
  vite.config.js
  src/
    pages/ (Hero, Projects, Skills, Experience, Education, Contact)
    components/
```

## 🚀 Quick Start (Windows PowerShell)

Prerequisites: Node.js LTS (v18+ recommended) and npm.

1) Install dependencies

```powershell
# From the repo root
cd .\backend; npm install; cd ..
cd .\frontend; npm install; cd ..
```

2) Create and configure environment files

- Create `backend/.env` and `frontend/.env` manually, using the examples in the Environment Variables section below.

3) Run locally (two terminals)

```powershell
# Terminal 1 (Backend)
cd .\backend
npm start

# Terminal 2 (Frontend)
cd .\frontend
npm run dev
```

Frontend dev server will print a local URL (typically http://localhost:5173). Backend runs on http://localhost:5000 by default.

## 🔐 Environment Variables

Create these files manually and fill in values as appropriate.

### Backend (`backend/.env`)

```
# Server
PORT=5000

# Gmail SMTP (preferred when RESEND_API_KEY is not set)
MAIL_USER=your.name@gmail.com
MAIL_PASS=your-app-password   # Use a Google App Password with 2FA enabled

# Resend (optional; if set, emails are sent via Resend)
RESEND_API_KEY=

# Optional overrides
MAIL_TO=your.name@gmail.com   # Defaults to MAIL_USER
MAIL_FROM=Portfolio <onboarding@resend.dev>  # Used by Resend sender
```

Notes:
- For Gmail SMTP, enable 2‑Step Verification and create an App Password. Regular account passwords won’t work.
- If `RESEND_API_KEY` is defined, the service will use Resend and skip SMTP.

### Frontend (`frontend/.env`)

```
# URL of the backend server used by the contact form
VITE_BACKEND_URL=http://localhost:5000
```

## 🔌 API Endpoints (Backend)

- GET `/health` → `{ status: "ok", time }` — health check
- GET `/api/verify-smtp` → verifies SMTP connectivity; returns which port/secure mode was used
- POST `/api/send` → sends an email
  - Request body (JSON):
    ```json
    {
      "name": "Your Name",
      "email": "you@example.com",
      "message": "Hello!"
    }
    ```
  - Responses:
    - 200: `{ "message": "Email sent successfully!" }`
    - 500: `{ "message": "Failed to send email" | "Error", "error": "..." }`

## 🛠️ Development Notes

- The frontend reads `VITE_BACKEND_URL` and sends requests like `${VITE_BACKEND_URL}/api/send`.
- `vite.config.js` includes a proxy config, but the contact page calls the backend directly using the env URL.

## 🧪 Quick Test

With backend running locally:

```powershell
curl -X POST "http://localhost:5000/api/send" -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

## 🌐 Deployment

- Frontend: Vercel/Netlify/Static hosting
  - `frontend/vercel.json` sets build command and outputDirectory
  - Build: `npm run build` inside `frontend` → outputs to `dist/`
- Backend: Render/Railway/Dedicated Node host
  - Start command: `npm start` in `backend`
  - Configure environment variables from the Backend section above

## 🧯 Troubleshooting

- Gmail SMTP errors:
  - Ensure 2FA is enabled and you are using an App Password
  - Some hosts may block outbound SMTP ports; use `RESEND_API_KEY` as a fallback
- Timeouts: The mailer includes conservative timeouts; check server logs for `SMTP_TIMEOUT` or `SMTP_VERIFY_FAILED`
- CORS: `cors()` is enabled server-side; if deploying to separate domains, ensure the frontend uses the correct `VITE_BACKEND_URL`

## 📄 License

Add your preferred license here (e.g., MIT). If omitted, the repository remains unlicensed by default.
