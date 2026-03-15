const DEFAULT_ALLOWED_METHODS = "POST,OPTIONS";
const DEFAULT_ALLOWED_HEADERS = "Content-Type,Authorization";


function parseAllowedOrigins() {
  const configured = "https://dipalbhavsar.github.io,http://localhost:4321"; // process.env.ALLOWED_ORIGINS || "";
  return configured
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function getCorsHeaders(requestOrigin) {
  const allowedOrigins = parseAllowedOrigins();
  const isAllowed = requestOrigin && allowedOrigins.includes(requestOrigin);

  const headers = {
    "Access-Control-Allow-Methods": DEFAULT_ALLOWED_METHODS,
    "Access-Control-Allow-Headers": DEFAULT_ALLOWED_HEADERS,
    Vary: "Origin"
  };

  if (isAllowed) {
    headers["Access-Control-Allow-Origin"] = requestOrigin;
  }

  return { headers, isAllowed };
}

module.exports = {
  getCorsHeaders
};
