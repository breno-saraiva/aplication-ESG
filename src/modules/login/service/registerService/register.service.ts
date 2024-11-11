import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { registerInput } from "./register.Dto";

class RegisterService {
  constructor(private readonly api: AxiosInstance) {}

  async execute({ user, senha }: registerInput): Promise<void> {
    await this.api.post("/usuarios", {
      user,
      senha,
    });
  }
}

const registerService = new RegisterService(http);

export { registerService };
