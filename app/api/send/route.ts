import EmailTemplate from "@/app/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        // Get the form data from the request
        const { senderName, senderEmail, message } = await request.json();

        if (!senderName || !senderEmail || !message) {
            return Response.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        if (!process.env.NEXT_RESEND_API_KEY) {
            console.error("Missing Resend API key");
            return Response.json(
                { error: "Server configuration error" },
                { status: 500 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "Portfolio <contact@vedantgrover.com>",
            to: process.env.NEXT_PERSONAL_EMAIL!,
            subject: "New Connection Request",
            react: EmailTemplate({ senderName, senderEmail, message }),
        });

        if (error) {
            console.error("Resend API error:", error);
            return Response.json({ error: error.message }, { status: 500 });
        }

        return Response.json(
            { success: true, data },
            { status: 200 }
        );
    } catch (error) {
        console.error("Server error:", error);
        return Response.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
