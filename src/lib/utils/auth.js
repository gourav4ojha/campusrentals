import jwt from "jsonwebtoken";

// JWT Secret (must match the one used for token generation)
const JWT_SECRET = "zedrftgyuhnkmnbvcxzsdfghj2345tyhjsdtyu";

// Middleware to verify JWT token
export function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return { success: true, user: decoded };
    } catch (error) {
        return { success: false, error: "Invalid or expired token" };
    }
}
