export async function POST(req) {
    return new Response(JSON.stringify({ message: "OTP sent!" }), {
      headers: { "Content-Type": "application/json" },
    });
  }