export async function POST() {
    return new Response(JSON.stringify({ message: "OTP sent!" }), {
      headers: { "Content-Type": "application/json" },
    });
  }