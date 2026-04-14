import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("balbird");

    // 🔹 Save login data in MongoDB
    await db.collection("logins").insertOne({
      name: body.name,
      email: body.email,
      createdAt: new Date(),
    });

    console.log("Saved to DB:", body);

    // 🔹 Trigger n8n webhook
    await fetch("https://n8n.srv1463077.hstgr.cloud/webhook/demo-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("n8n triggered");

    return Response.json({ success: true });

  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ success: false });
  }
}
