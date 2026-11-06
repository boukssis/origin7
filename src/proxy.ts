import { NextResponse, type NextRequest } from "next/server";

/** Optional password gate for the private concept preview. Active only when PREVIEW_PASSWORD is set. */
export function proxy(request: NextRequest) {
  const password = process.env.PREVIEW_PASSWORD;
  if (!password) return NextResponse.next();

  const auth = request.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    const [, pass] = atob(auth.slice(6)).split(":");
    if (pass === password) return NextResponse.next();
  }
  return new NextResponse("Private preview", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Origin7 concept preview"', "X-Robots-Tag": "noindex, nofollow" },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|icon.png|apple-icon.png).*)"],
};
