const { app } = require("@azure/functions");
const { getCorsHeaders } = require("../shared/cors");
const { subscribeEmail } = require("../services/senderClient");

function isValidEmail(email) {
  if (typeof email !== "string") {
    return false;
  }

  const normalized = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
}

app.http("subscribe", {
  route: "subscribe",
  methods: ["POST", "OPTIONS"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const requestOrigin = request.headers.get("origin") || "";
    const { headers: corsHeaders, isAllowed } = getCorsHeaders(requestOrigin);

    if (request.method === "OPTIONS") {
      return {
        status: 204,
        headers: corsHeaders
      };
    }

    if (!isAllowed) {
      return {
        status: 403,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        },
        jsonBody: {
          success: false,
          message: "Origin not allowed by CORS policy"
        }
      };
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        },
        jsonBody: {
          success: false,
          message: "Invalid JSON payload"
        }
      };
    }

    const email = payload?.email;
    if (!isValidEmail(email)) {
      return {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        },
        jsonBody: {
          success: false,
          message: "A valid email is required"
        }
      };
    }

    try {
      const result = await subscribeEmail(email.trim());
      return {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        },
        jsonBody: {
          success: true,
          message: "Subscription successful",
          data: result
        }
      };
    } catch (error) {
      context.error("Sender subscription failed", error);
      return {
        status: 502,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        },
        jsonBody: {
          success: false,
          message: "Unable to complete subscription"
        }
      };
    }
  }
});
