const jwt = require("jsonwebtoken");

const JWT_SECRET = "my-secure-random-string";
const payload = { userId: 123, username: "MoussaabElMahraoui", role: "user" };

const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

console.log("Generated JWT Token:", token);
