import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  const userRes = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const user = await userRes.json();

  return NextResponse.json(user);
}