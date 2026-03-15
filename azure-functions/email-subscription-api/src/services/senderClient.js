function assertRequiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}


async function subscribeEmail(email) {
  const baseUrl = "https://api.sender.net";// assertRequiredEnv("SENDER_API_URL");
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzZiMzEzNWQ5NzBlZjFhMmU3MWIzYzVlNjI1Yjk4ODZiNTUzOGE1MTNlNjAxMGMzMTU0YzAyNTEzZWI0MTZhMGI2NzZjMmZhYmM2ZmY5YjIiLCJpYXQiOjE3NzI1NTcyODkuNDY3NTM3LCJuYmYiOjE3NzI1NTcyODkuNDY3NTQsImV4cCI6NDkyNjE1NzI4OS40NjU0MjgsInN1YiI6IjEwNTY5MzIiLCJzY29wZXMiOltdfQ.TMpHklPXV3jzlLtUXPIiQh2oZGlaTJdSCFurvcI6Vz4JcR20l9VQ5sYY2srLs7C0N5ddgJIuPWF1blreW_lqPw5tMP4GpTHQhW7C2UgiKVbVuLnVq02Dyx8xA8pR-A7iIuPLt2khMTNOQuUo2LeHbR-5hDt3JJgSAEQJNIicOVArhKy9m2lnRBcemGvJNNHr8iy3JrW1ZWZnAn_cItWUwhPm0C4t_V8O7y6-qjpZlZPaPf_p2WTeyI4LZ9RAg9swgFOaDOSwcdQXipFMk5dyKUadLReyAKB3k93E9L_FOSI3fe62QvCiM5jkfxc0UAHMSktxTBd9iHPaT1CWClHAxwpa5HWR0azPnaRWhrbOCkP8NpcXwTiz2gqOY0NRAafpv1rEdjczZlMxaFzEuwzXdtt2OSqJRzawbfxH6S9l06VpMvwUcixamgp2O7QXk8eFSnUyFN5cZQG29UrpqyKEJahWIc-erNgafj8imy4y5JlljoqWqrAaQGthPc253pq3FYCQsaGlngPFikjspPxoaZ9MmdkXPc03BI7dpZZeVNKtLTv1cIbA9wx40-2JzS4MdXGFkv1dJ5-fR6fYqUEJcM4XkxLnYqPDRSVOmZJhw30thDxwB36sWP2_GCZNL_8DSPNLgGKfYfGty9c0dms9vX_ZJNpbVn7UpqsAsUgPZWc";// assertRequiredEnv("SENDER_API_TOKEN");
  const listId = "PORTAL"; //assertRequiredEnv("SENDER_LIST_ID");
  const path = "/v2/subscribers";// process.env.SENDER_API_SUBSCRIBE_PATH || "/v2/subscribers";
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
