import { writeClient } from "@/sanity/lib/write-client";

export async function POST(request: Request) {
  const res = await request.json();
  const req = await writeClient
    .patch(res.id)
    .set({ status: "offline" })
    .commit();

  return Response.json("O'zgartirildi");
}
