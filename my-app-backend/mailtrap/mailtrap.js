import { config } from "dotenv";
import { MailtrapClient } from "mailtrap";

config(); // Load environment variables from .env file

const TOKEN = process.env.MAILTRAP_TOKEN; // Use the token from .env
const ENDPOINT = process.env.MAILTRAP_ENDPOINT; // Use the endpoint from .env

const client = new MailtrapClient({
  token: TOKEN,
  endpoint: ENDPOINT, // Set the endpoint
});

const sender = {
  email: "hello@demomailtrap.co",
  name: "Akafta",
};

const recipients = [
  {
    email: "walidwalida0963@gmail.com",
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