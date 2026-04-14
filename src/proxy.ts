import { NextRequest, NextResponse } from "next/server";
import { routes } from "./config/routes";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export const proxy = async (request: NextRequest) => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return NextResponse.redirect(new URL(routes.login, request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard"],
  runtime: "nodejs",
};
