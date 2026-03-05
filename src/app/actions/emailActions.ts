"use server";

import nodemailer from "nodemailer";

interface EmailData {
    name: string;
    email: string;
    phone: string;
    company?: string;
    message?: string;
    formSource: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{7,20}$/;

const normalizeField = (value: string | undefined, maxLength: number) =>
    (value || "").trim().replace(/\s+/g, " ").slice(0, maxLength);

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

export async function sendEmailAction(data: EmailData) {
    "use server";

    const name = normalizeField(data.name, 80);
    const email = normalizeField(data.email, 120);
    const phone = normalizeField(data.phone, 20);
    const company = normalizeField(data.company, 120);
    const message = normalizeField(data.message, 180);
    const formSource = normalizeField(data.formSource, 120);

    if (!name || !email || !phone || !formSource) {
        return { success: false, message: "Please fill in all required fields." };
    }

    if (!EMAIL_REGEX.test(email)) {
        return { success: false, message: "Please enter a valid email address." };
    }

    if (!PHONE_REGEX.test(phone)) {
        return { success: false, message: "Please enter a valid phone number." };
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const contactEmailTo = process.env.CONTACT_EMAIL_TO;
    const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Fiesta Smart Mobility";

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword || !contactEmailTo) {
        console.error("Missing required email environment variables.");
        return { success: false, message: "Email service is not configured. Please try again later." };
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = escapeHtml(company || "N/A");
    const safeMessage = escapeHtml(message || "No message provided.");
    const safeFormSource = escapeHtml(formSource);

    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
            user: smtpUser,
            pass: smtpPassword,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${siteName} - Form" <${smtpUser}>`,
            to: contactEmailTo,
            replyTo: email,
            subject: `New Lead from ${formSource}: ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Company: ${company || "N/A"}
                Source Form: ${formSource}
                
                Message:
                ${message || "No message provided."}
            `,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee;">
                    <h2 style="color: #E51E25;">New Lead from ${safeFormSource}</h2>
                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Email:</strong> ${safeEmail}</p>
                    <p><strong>Phone:</strong> ${safePhone}</p>
                    <p><strong>Company:</strong> ${safeCompany}</p>
                    <p><strong>Source Form:</strong> ${safeFormSource}</p>
                    <hr />
                    <p><strong>Message:</strong></p>
                    <p>${safeMessage}</p>
                </div>
            `,
        });

        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error("Email sending error:", error);
        return { success: false, message: "Error sending email. Please try again." };
    }
}
