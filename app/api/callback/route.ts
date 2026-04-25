import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID!,
      client_secret: process.env.GITHUB_CLIENT_SECRET!,
      code: code!,
    }),
  });

  const tokenData = await tokenRes.json();
  const access_token = tokenData.access_token;

  return NextResponse.redirect(
    `http://localhost:3000/success?token=${access_token}`
    );
}