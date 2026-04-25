import { NextResponse } from "next/server";

export async function GET() {
  const client_id = process.env.GITHUB_CLIENT_ID;

  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=read:user user:email`;

  return NextResponse.redirect(url);
}