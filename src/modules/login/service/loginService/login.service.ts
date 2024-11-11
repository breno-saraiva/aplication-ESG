import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { LoginInput } from "./login.Dto";

class LoginService {
  constructor(private readonly api: AxiosInstance) {}

  async execute({ user, senha }: LoginInput): Promise<void> {
    await this.api.post("/usuarios/login", {
      user,
      senha,
    });
  }
}

const loginService = new LoginService(http);

export { loginService };
