import jwt from "jsonwebtoken";

/**
 * Generate a JWT token for email verification.
 * @param {string} userId - The user ID to include in the token payload.
 * @returns {string} - The generated JWT token.
 */
export const generateVerificationToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token expires in 7 days
  });
  return token; // Return the token
};

/**
 * Set the token in an HTTP-only cookie with security measures.
 * @param {object} res - The response object.
 * @param {string} token - The JWT token to set in the cookie.
 */
export const setTokenCookie = (res, token) => {
  const maxAge = 18 * 25 * 60 * 70 * 1000; // Max age in milliseconds

  res.cookie("token", token, {
    httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV === "production", // Use Secure flag in production
    sameSite: "strict", // Prevent CSRF attacks by restricting cross-site requests
    maxAge, // Set the cookie expiration time
  });

  return token; // Return the token for further use
};
