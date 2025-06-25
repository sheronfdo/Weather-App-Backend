# 🌤️ Weather App Backend

This is a Node.js + Express backend for a weather application. It serves as a middleware between your frontend and the [WeatherAPI](https://www.weatherapi.com/) to provide current weather, forecast, historical data, astronomy, timezone, and location search via REST APIs.

---

## 📁 Project Structure

```
weather-backend/
├── src/
│   ├── config/            # CORS and other configurations
│   ├── controllers/       # Request handler logic
│   ├── routes/            # Route definitions
│   ├── services/          # External API integration logic
│   └── app.js             # Express app setup
├── server.js              # App entrypoint (for local/serverless use)
├── .env                   # Environment variables (not committed)
├── vercel.json            # Vercel deployment config
├── package.json
└── README.md
```

---

## ⚙️ Features

* ✅ Current weather data
* ✅ Weather forecast
* ✅ Historical weather data
* ✅ Astronomy info (sunrise, sunset, etc.)
* ✅ Timezone information
* ✅ Location search
* ✅ CORS protection for frontend domains
* ✅ Ready for Vercel serverless deployment

---

## 🔗 API Endpoints

All endpoints accept query parameters like `q=Colombo` or `dt=YYYY-MM-DD`.

| Endpoint         | Description            |
| ---------------- | ---------------------- |
| `/api/current`   | Get current weather    |
| `/api/forecast`  | Get forecast weather   |
| `/api/history`   | Get historical weather |
| `/api/astronomy` | Get astronomy data     |
| `/api/timezone`  | Get timezone info      |
| `/api/search`    | Search location        |

Example:

```http
GET /api/current?q=Colombo
```

---

## 🔐 Environment Variables (`.env`)

You must define the following variables in your `.env` file or in Vercel dashboard:

```env
WEATHER_API_KEY=your_weatherapi_key
WEATHER_API_BASE_URL=https://api.weatherapi.com/v1
```

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Run locally
npm start
```

Server runs on: `http://localhost:3000`

---

## ☁️ Deployment (Vercel)

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com/)
3. Add environment variables in Vercel settings
4. Vercel will auto-deploy

After deployment:

```
https://your-vercel-app.vercel.app/api/current?q=Colombo
```

---

## 🔒 CORS Configuration

Only the following origins are allowed to access the API:

* `https://weather-app-frontend-snowy.vercel.app`
* `http://localhost:5173` (for development)

Modify `src/config/cors.config.js` to update allowed origins.

---

## 📄 License

This project is open-source and free to use for educational and personal projects.
