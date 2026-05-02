import { Router } from "express";
import { db } from "@workspace/db";
import { contactSubmissionsTable } from "@workspace/db";
import { z } from "zod";

const router = Router();

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  business: z.string().trim().max(120).optional().nullable(),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email().max(255),
  interest: z.string().trim().max(120).optional().nullable(),
  message: z.string().trim().min(5).max(1000),
});

router.post("/contact", async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid request", details: parsed.error.issues });
  }

  try {
    await db.insert(contactSubmissionsTable).values({
      name: parsed.data.name,
      business: parsed.data.business || null,
      phone: parsed.data.phone,
      email: parsed.data.email,
      interest: parsed.data.interest || null,
      message: parsed.data.message,
    });
    return res.status(201).json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact submission");
    return res.status(500).json({ error: "Failed to save submission" });
  }
});

export default router;
