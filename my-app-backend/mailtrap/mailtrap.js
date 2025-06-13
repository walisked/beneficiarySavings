import { config } from "dotenv";
import { MailtrapClient } from "mailtrap";

config();

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

const client = new MailtrapClient({
  token: TOKEN,
  endpoint: ENDPOINT,
  testInboxId: 3788398, // or your actual inbox ID
});

const sender = {
  email: "umararano",
  name: "Akafta",
};

const recipients = [
  {
    email: "umararano@gmail.com", // Replace with your Mailtrap account email
  },
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);


/** 
 * Sends an invitation email to a user.
 * @param {string} email - The recipient's email address.
 * @param {string} link - The sign-in link for the user.
 * @param {string} role - The role of the user being invited.
 */