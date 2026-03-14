# Email Subscription Azure Function (JavaScript)

This project adds an Azure Functions HTTP endpoint for newsletter/email subscriptions.
It is designed to be called from your GitHub Pages static site with CORS protection.

## Endpoint

- Route: `/api/subscribe` (local: `http://localhost:7071/api/subscribe`)
- Method: `POST`
- CORS preflight: `OPTIONS`
- Auth: `anonymous` (token stays server-side in Function env)

## Environment configuration

Copy `local.settings.example.json` to `local.settings.json` and provide real values:

- `SENDER_API_URL` - Sender API base URL
- `SENDER_API_SUBSCRIBE_PATH` - subscribe path (default `/v2/subscribers`)
- `SENDER_API_TOKEN` - API token for Sender
- `SENDER_LIST_ID` - list/group identifier for subscription target
- `ALLOWED_ORIGINS` - comma-separated origins allowed to call endpoint

Example:

```json
"ALLOWED_ORIGINS": "https://<your-github-username>.github.io,http://localhost:4321"
```

## Local run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Ensure Azure Functions Core Tools is installed.

3. Run:

   ```bash
   npm start
   ```

## Request format

`POST /api/subscribe`

```json
{
  "email": "user@example.com"
}
```

## Static site call example

```js
await fetch("https://<your-function-app>.azurewebsites.net/api/subscribe", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email })
});
```

## CORS note

This function validates `Origin` against `ALLOWED_ORIGINS` and returns proper preflight headers.
Also configure CORS in Azure Function App settings to include your GitHub Pages domain.
