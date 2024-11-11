import { z } from "zod";
import { loginSchema } from "../schema/loginSchema";

const defaultValueLogin: z.infer<typeof loginSchema> = {
  user: "",
  senha: "",
};

export { defaultValueLogin };
