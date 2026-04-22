import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { rfqId, assignedTo, description } = req.body;

    if (!rfqId || !assignedTo) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const client = await clientPromise;
    const db = client.db("balbird");

    const result = await db.collection("tasks").insertOne({
      rfqId,
      assignedTo,
      description: description || "",
      status: "pending",
      createdAt: new Date(),
    });

    return res.status(200).json({ success: true, id: result.insertedId });
  } catch (e) {
    console.error("Task error:", e);
    return res.status(500).json({ success: false });
  }
}
