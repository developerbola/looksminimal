import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://api.github.com/repos/developerbola/hashnote",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        // Optionally add a GitHub token if you're rate-limited
        // Authorization: `token YOUR_PERSONAL_ACCESS_TOKEN`
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json({ stars: 0 });
  }

  const data = await res.json();
  return NextResponse.json({ stars: data.stargazers_count });
}
