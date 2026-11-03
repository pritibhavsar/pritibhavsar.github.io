const DEFAULT_ALLOWED_METHODS = "POST,OPTIONS";
const DEFAULT_ALLOWED_HEADERS = "Content-Type,Authorization";
const PRODUCTION_ORIGINS = new Set([
  "https://palportals.com",
  "https://www.palportals.com"
]);
const LOCALHOST_HOSTS = new Set(["localhost", "127.0.0.1"]);

function normalizeOrigin(origin) {
  if (!origin) {
    return "";
  }

  try {
    const url = new URL(origin);
    return url.origin;
  } catch {
    return "";
  }
}

function isAllowedOrigin(origin) {
  const normalizedOrigin = normalizeOrigin(origin);
  if (!normalizedOrigin) {
    return false;
  }

  if (PRODUCTION_ORIGINS.has(normalizedOrigin)) {
    return true;
  }

  try {
    const url = new URL(normalizedOrigin);
    return LOCALHOST_HOSTS.has(url.hostname);
  } catch {
    return false;
  }
}

function getCorsHeaders(requestOrigin) {
  const normalizedOrigin = normalizeOrigin(requestOrigin);
  const isAllowed = isAllowedOrigin(normalizedOrigin);

  const headers = {
    "Access-Control-Allow-Methods": DEFAULT_ALLOWED_METHODS,
    "Access-Control-Allow-Headers": DEFAULT_ALLOWED_HEADERS,
    Vary: "Origin"
  };

  if (isAllowed) {
    headers["Access-Control-Allow-Origin"] = normalizedOrigin;
  }

  return { headers, isAllowed };
}

module.exports = {
  getCorsHeaders
};
