import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const body = req.body;

    // Try to save to MongoDB, but don't fail if it doesn't work
    try {
      const client = await clientPromise;
      const db = client.db("balbird");

      await db.collection("logins").insertOne({
        name: body.name,
        email: body.email,
        createdAt: new Date(),
      });
      console.log("Saved to DB:", body);
    } catch (dbError) {
      console.log("MongoDB error (continuing):", dbError);
      // Continue even if MongoDB fails
    }

    // trigger n8n
    try {
      await fetch("https://n8n.srv1463077.hstgr.cloud/webhook/demo-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log("n8n triggered");
    } catch (webhookError) {
      console.log("Webhook error (continuing):", webhookError);
      // Continue even if webhook fails
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("General error:", error);
    return res.status(500).json({ success: false });
  }
}
