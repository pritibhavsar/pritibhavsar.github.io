const { app } = require("@azure/functions");
const { subscribeEmail } = require("../services/senderClient");

function isValidEmail(email) {
  if (typeof email !== "string") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

app.http("subscribev1", {
  route: "subscribev1",
  methods: ["POST", "OPTIONS"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type,Authorization",
      "Content-Type": "application/json"
    };

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return {
        status: 204,
        headers: corsHeaders
      };
    }

    // Parse JSON body
    let payload;
    try {
      payload = await request.json();
    } catch (error) {
      return {
        status: 400,
        headers: corsHeaders,
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
        headers: corsHeaders,
        jsonBody: {
          success: false,
          message: "A valid email address is required"
        }
      };
    }

    try {
      const result = await subscribeEmail(email.trim());
      return {
        status: 200,
        headers: corsHeaders,
        jsonBody: {
          success: true,
          message: "Subscription successful",
          data: result
        }
      };
    } catch (error) {
      context.error("Subscription failed", error);
      return {
        status: 502,
        headers: corsHeaders,
        jsonBody: {
          success: false,
          message: "Unable to complete subscription"
        }
      };
    }
  }
});
