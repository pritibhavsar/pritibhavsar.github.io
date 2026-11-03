const { app } = require("@azure/functions");

app.http("hello", {
  route: "hello",
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    return {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      },
      jsonBody: {
        message: "Hello World",
        timestamp: new Date().toISOString()
      }
    };
  }
});
