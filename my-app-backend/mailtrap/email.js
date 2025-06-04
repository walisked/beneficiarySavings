import { MailtrapClient } from "mailtrap";
import { VERIFICATION_EMAIL_TEMPLATE, WELCOMING_EMAIL_TEMPLATE } from "./emailTempl.js";
import { config } from "dotenv";

config(); // Load environment variables from .env file


console.log("MAILTRAP_TOKEN:", process.env.MAILTRAP_TOKEN);
console.log("MAILTRAP_ENDPOINT:", process.env.MAILTRAP_ENDPOINT);
console.log("FRONTEND_URL:", process.env.FRONTEND_URL);

const client = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
  endpoint: process.env.MAILTRAP_ENDPOINT,
});

/**
 * Sends a verification email to the user.
 * @param {string} email - The recipient's email address.
 * @param {string} verificationCode - The verification code.
 */
export const sendVerificationEmail = async (email, verificationCode) => {
  const htmlContent = VERIFICATION_EMAIL_TEMPLATE.replace(/{{verification_code}}/g, verificationCode);

  const sender = {
    email: "hello@demomailtrap.co",
    name: "Akafta",
  };

  const recipients = [
    {
      email: email,
    },
  ];

  try {
    await client.send({
      from: sender,
      to: recipients,
      subject: "Your Akafta Verification Code",
      html: htmlContent,
    });
    console.log(`Verification email sent to ${email}`);
  } catch (error) {
    console.error("Error details:", error.response?.data || error.message);
    throw new Error("Failed to send verification email");
  }
};

/**
 * Sends a welcome email to the user.
 * @param {string} email - The recipient's email address.
 * @param {string} username - The recipient's username.
 */
export const sendWelcomeEmail = async (email, username) => {
  const htmlContent = WELCOMING_EMAIL_TEMPLATE.replace(/{{username}}/g, username);

  const sender = {
    email: "hello@demomailtrap.co",
    name: "Akafta",
  };

  const recipients = [
    {
      email: email,
    },
  ];

  try {
    await client.send({
      from: sender,
      to: recipients,
      subject: "Welcome to Akafta!",
      html: htmlContent,
    });
    console.log(`Welcome email sent to ${email}`);
  } catch (error) {
    console.error("Error details:", error.response?.data || error.message);
    throw new Error("Failed to send welcome email");
  }
};