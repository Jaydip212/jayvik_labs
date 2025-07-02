// netlify/functions/login.js
exports.handler = async (event) => {
  const { email, password } = JSON.parse(event.body || '{}');

  if (email === "admin@example.com" && password === "123456") {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Login successful" }),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Invalid credentials" }),
    };
  }
};
