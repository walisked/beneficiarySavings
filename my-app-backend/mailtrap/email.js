import { MailtrapClient } from "mailtrap";
import { 
  VERIFICATION_EMAIL_TEMPLATE, 
  WELCOMING_EMAIL_TEMPLATE,
  PASSWORD_RESET_EMAIL_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE
} from "./emailTempl.js";
import { config } from "dotenv";

config();

const sender = {
  email: process.env.MAILTRAP_SENDER_EMAIL,
  name: process.env.MAILTRAP_SENDER_NAME
};

const client = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
  endpoint: process.env.MAILTRAP_ENDPOINT,
});

const isDevelopment = process.env.NODE_ENV === "development";

/**
 * Sends a verification email to the user.
 * @param {string} email - The recipient's email address.
 * @param {string} verificationCode - The verification code.
 */
export const sendVerificationEmail = async (email, verificationCode) => {
  if (isDevelopment) {
    console.log(`[DEV] Verification email to ${email}: Code = ${verificationCode}`);
    return;
  }
  const htmlContent = VERIFICATION_EMAIL_TEMPLATE.replace(/{{verification_code}}/g, verificationCode);
  try {
    await client.send({
      from: sender,
      to: [{ email }],
      subject: "Your Akafta Verification Code",
      html: htmlContent,
    });
    console.log(`Verification email sent to ${email}`);
  } catch (error) {
    console.error("Email send error:", error.response?.data || error.message);
    throw new Error("Failed to send verification email");
  }
};

/**
 * Sends a welcome email to the user.
 * @param {string} email - The recipient's email address.
 * @param {string} username - The recipient's username.
 */
export const sendWelcomeEmail = async (email, username) => {
  if (isDevelopment) {
    console.log(`[DEV] Welcome email to ${email} for ${username}`);
    return;
  }
  const htmlContent = WELCOMING_EMAIL_TEMPLATE.replace(/{{username}}/g, username);
  try {
    await client.send({
      from: sender,
      to: [{ email }],
      subject: "Welcome to Akafta!",
      html: htmlContent,
    });
    console.log(`Welcome email sent to ${email}`);
  } catch (error) {
    console.error("Email send error:", error.response?.data || error.message);
    throw new Error("Failed to send welcome email");
  }
};

/**
 * Sends a password reset email to the user.
 * @param {string} email - The recipient's email address.
 * @param {string} username - The recipient's username.
 * @param {string} resetToken - The password reset token.
 */
export const sendPasswordResetEmail = async (email, username, resetToken) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
  if (isDevelopment) {
    console.log(`[DEV] Password reset for ${email}: ${resetUrl}`);
    return;
  }
  let htmlContent = PASSWORD_RESET_EMAIL_TEMPLATE.replace(/{{reset_url}}/g, resetUrl);
  try {
    await client.send({
      from: sender,
      to: [{ email }],
      subject: "Password Reset Request",
      html: htmlContent,
    });
    console.log(`Password reset email sent to ${email}`);
  } catch (error) {
    console.error("Email send error:", error.response?.data || error.message);
    throw new Error("Failed to send password reset email");
  }
};

/**
 * Sends a password reset success email to the user.
 * @param {string} email - The recipient's email address.
 * @param {string} username - The recipient's username.
 */
export const sendPasswordResetSuccessEmail = async (email, username) => {
  if (isDevelopment) {
    console.log(`[DEV] Password reset success email to ${email}`);
    return;
  }
  let htmlContent = PASSWORD_RESET_SUCCESS_TEMPLATE;
  try {
    await client.send({
      from: sender,
      to: [{ email }],
      subject: "Password Reset Successful",
      html: htmlContent,
    });
    console.log(`Password reset success email sent to ${email}`);
  } catch (error) {
    console.error("Email send error:", error.response?.data || error.message);
    throw new Error("Failed to send reset success email");
  }
};