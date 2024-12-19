import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const count = await kv.get("visit_count");
      return res.status(200).json({ count: count || 0 });
    }

    if (req.method === "POST") {
      const currentCount = (await kv.get("visit_count")) || 0;
      const newCount = Number(currentCount) + 1;

      await kv.set("visit_count", newCount);

      return res.status(200).json({ count: newCount });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end("Method Not Allowed");
  } catch (error) {
    console.error("Error with Vercel KV:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
