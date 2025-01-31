import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().length(8),
  name: z.string().min(3).max(50),
  role: z.enum(["student", "staff"]),
  department: z.enum(["CSE", "ECE", "ME", "CE"]),
  year: z.number().min(1).max(4).optional(),
  semester: z.number().min(1).max(8).optional(),
  mobile: z.string().regex(/^[6-9]\d{9}$/).optional(),
});

export const PunishmentSchema = z.object({
  id: z.string(),
  studentId: z.string().length(8),
  date: z.string(),
  reason: z.string().min(10).max(200),
  status: z.enum(["active", "resolved"]),
  staffId: z.string().length(8),
});

export type User = z.infer<typeof UserSchema>;
export type Punishment = z.infer<typeof PunishmentSchema>;