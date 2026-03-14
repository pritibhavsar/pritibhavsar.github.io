function assertRequiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

async function subscribeEmail(email) {
  const baseUrl = assertRequiredEnv("SENDER_API_URL");
  const token = assertRequiredEnv("SENDER_API_TOKEN");
  const listId = assertRequiredEnv("SENDER_LIST_ID");
  const path = process.env.SENDER_API_SUBSCRIBE_PATH || "/v2/subscribers";
  const endpoint = `${baseUrl.replace(/\/$/, "")}${path}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      listId
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Sender API failed with status ${response.status}: ${details}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }

  return { ok: true };
}

module.exports = {
  subscribeEmail
};
