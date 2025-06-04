import jwt from "jsonwebtoken";

/**
 * Generates a 6-digit verification code and its expiration timestamp.
 * @returns {object} An object containing the verification code and expiration timestamp.
 */
export const generateVerificationToken = () => {
  const verificationCode = Math.floor(100000 + Math.random() * 900000); // Generates a random 6-digit number
  const verificationCodeExpiresAt = Date.now() + 10 * 60 * 1000; // Code expires in 10 minutes

  return { verificationCode, verificationCodeExpiresAt };
};

/**
 * Generates a JWT token.
 * @param {object} payload - The data to include in the token.
 * @param {string} secret - The secret key to sign the token.
 * @param {object} options - Additional options for the token (e.g., expiration).
 * @returns {string} The generated JWT token.
 */
export const generateJwtToken = (payload, secret, options = {}) => {
  return jwt.sign(payload, secret, options);
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
