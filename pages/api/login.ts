import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const body = req.body;

    const client = await clientPromise;
    const db = client.db("balbird");

    await db.collection("logins").insertOne({
      name: body.name,
      email: body.email,
      createdAt: new Date(),
    });

    // Trigger n8n
    await fetch("https://n8n.srv1463077.hstgr.cloud/webhook/demo-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}
