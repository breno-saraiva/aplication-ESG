import { z } from "zod";

const loginSchema = z.object({
  user: z.string(),
  senha: z.string(),
});

export { loginSchema };
