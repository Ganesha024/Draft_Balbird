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

    await db.collection("tasks").insertOne({
      ...body,
      createdAt: new Date(),
      status: "pending",
      priority: body.priority || "medium",
    });

    // Trigger n8n webhook for task processing
    await fetch("https://n8n.srv1463077.hstgr.cloud/webhook/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return res.status(200).json({ success: true, message: "Task created successfully" });

  } catch (error) {
    console.error("Task API Error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}
