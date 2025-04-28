import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://api.github.com/repos/developerbola/hashnote",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  );
  const res2 = await fetch(
    "https://api.github.com/repos/developerbola/hashnote-electron",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json({ stars: 0 });
  }

  const data = await res.json();
  const data2 = await res2.json();
  return NextResponse.json({
    stars: data.stargazers_count + data2.stargazers_count,
  });
}
