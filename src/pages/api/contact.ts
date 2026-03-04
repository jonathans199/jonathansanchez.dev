import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  error?: string;
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message, website } = req.body;
  const turnstileToken = req.body["cf-turnstile-response"];

  // Honeypot check — bots fill hidden fields, real users don't
  if (website) {
    return res.status(200).json({ message: "Email sent successfully" });
  }

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Verify Turnstile token
  if (!turnstileToken) {
    return res.status(400).json({ error: "Please complete the CAPTCHA" });
  }

  try {
    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.CF_TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      },
    );

    const turnstileData = await turnstileRes.json();

    if (!turnstileData.success) {
      return res
        .status(400)
        .json({ error: "CAPTCHA verification failed. Please try again." });
    }
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return res.status(500).json({ error: "CAPTCHA verification failed" });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  try {
    // Using Resend for email sending
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contact Form <contact@jonathansanchez.dev>",
        to: ["jonathans199@gmail.com"],
        reply_to: email,
        subject: `New Contact Form Submission from JonathanSanchez.dev`,
        html: `
					<h2>New Contact Form Submission</h2>
					<p><strong>Name:</strong> ${safeName}</p>
					<p><strong>Email:</strong> ${safeEmail}</p>
					<p><strong>Message:</strong></p>
					<p>${safeMessage.replace(/\n/g, "<br>")}</p>
				`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API error:", JSON.stringify(errorData));
      return res
        .status(response.status)
        .json({ error: errorData.message || "Failed to send email" });
    }

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
