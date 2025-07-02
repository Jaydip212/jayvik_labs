// netlify/functions/login.js
exports.handler = async (event) => {
  const { email, password } = JSON.parse(event.body || '{}');

  // Replace this logic with your real DB or auth
  if (email === "jaydipjadhav062@gmail.com" && password === "123456") {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Invalid credentials" }),
    };
  }
};
