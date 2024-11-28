import { writeClient } from "@/sanity/lib/write-client";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const result = await writeClient
      .patch(res.id)
      .set({ status: res.status })
      .commit();

    // Return a success response
    return new Response(
      JSON.stringify({ message: "Updated successfully", result }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    // Handle any errors
    return new Response(
      JSON.stringify({ error: "Failed to update", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
