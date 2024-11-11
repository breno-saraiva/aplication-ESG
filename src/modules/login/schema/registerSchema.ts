import { z } from "zod";

const registerSchema = z.object({
  user: z.string(),
  senha: z.string(),
});

export { registerSchema };
