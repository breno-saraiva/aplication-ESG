import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../service/loginService/login.service";
import { z } from "zod";
import { defaultValueLogin } from "../../mock/defaultValuelogin";
import { loginSchema } from "../../schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/ui/form";

const SignIn = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: defaultValueLogin,
  });

  const navigate = useNavigate();

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    try {
      await loginService.execute(data);
      console.log(localStorage.getItem("@tipo_usua"));
      navigate("/check-list");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  return (
    <div className="p-4">
      <div className="my-4 flex flex-col gap-2 items-center justify-center">
        <h1 className="text-white text-2xl font-bold">Bem-Vindo!</h1>
        <p className="text-white font-semibold text-lg">
          faça login e defrute!
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex flex-col justify-start items-start gap-2">
                <Label className="font-semibold text-lg text-white">
                  Login:
                </Label>
                <FormField
                  control={form.control}
                  name="user"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-white w-80"
                          placeholder="Digite seu e-mail"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <Label className="font-semibold text-lg text-white">
                  Senha:
                </Label>
                <FormField
                  control={form.control}
                  name="senha"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          className="bg-white w-80"
                          placeholder="Digite sua senha"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-center items-center">
                <Button
                  type="submit"
                  className="text-lg bg-[#FF6F20] hover:bg-orange-400"
                >
                  Entrar
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export { SignIn };
