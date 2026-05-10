import { NextResponse } from "next/server";
import { z } from "zod";
import { profile } from "@/shared/profile";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(1000),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "invalid_payload" },
      { status: 400 }
    );
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json(
      {
        ok: false,
        error: "contact_not_configured",
        fallback: {
          email: profile.contacts.email,
          telegram: profile.contacts.telegram,
        },
      },
      { status: 503 }
    );
  }

  const { name, email, message } = parsed.data;
  const text = [
    "<b>Новая заявка с ShiruiSan</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    "",
    `<b>Сообщение:</b>`,
    escapeHtml(message),
  ].join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, error: "telegram_failed" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
