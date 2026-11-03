# Email Subscription API v2 - Azure Function (JavaScript)

This project provides minimal Azure Functions HTTP endpoints for public use.
All endpoints are publicly accessible with unrestricted CORS (Access-Control-Allow-Origin: *).

## Endpoints

### 1. Hello World (GET)

- Route: `/api/hello` (local: `http://localhost:7071/api/hello`)
- Method: `GET`
- Auth: `anonymous`
- Description: Returns a simple "Hello World" message with current timestamp

Example request:
```bash
curl https://<your-function-app>.azurewebsites.net/api/hello
```

Example response:
```json
{
  "message": "Hello World",
  "timestamp": "2026-03-20T10:30:45.123Z"
}
```

### 2. Public Endpoint (POST)

- Route: `/api/public` (local: `http://localhost:7071/api/public`)
- Method: `POST`
- CORS preflight: `OPTIONS`
- Auth: `anonymous`
- Description: Public POST endpoint with no restrictions. Accepts any JSON payload and echoes it back

## Environment configuration

No special environment variables are required for these endpoints. All endpoints are public and unrestricted.

For local development, ensure you have a `local.settings.json` file (copy from `local.settings.example.json` if needed).

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

## Static sexamples

### GET /api/hello

```bash
curl https://<your-function-app>.azurewebsites.net/api/hello
```

### POST /api/public

```bash
curl -X POST https://<your-function-app>.azurewebsites.net/api/public \
  -H "Content-Type: application/json" \
  -d '{"name": "John", "email": "john@example.com"}'
```

JavaScript example:

```js
const response = await fetch("https://<your-function-app>.azurewebsites.net/api/public", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ 
    name: "John",
    email: "john@example.com",
    customData: "any JSON structure is accepted"
  })
});

const data = await response.json();
console.log(data); // { success: true, message: "Request received", receivedData: {...}, timestamp: "..." }
```

## CORS

All endpoints support unrestricted CORS with `Access-Control-Allow-Origin: *`. 
Browsers from any origin can call these endpoints directly