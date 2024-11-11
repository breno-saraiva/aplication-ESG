import { z } from "zod";
import { registerSchema } from "../schema/registerSchema";

const defaultValueRegister: z.infer<typeof registerSchema> = {
  user: "",
  senha: "",
};

export { defaultValueRegister };
