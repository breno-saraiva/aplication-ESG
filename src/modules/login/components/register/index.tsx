import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
// import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/ui/form";
import { registerService } from "../../service/registerService/register.service";
import { defaultValueRegister } from "../../mock/defaulValueRegister";

const Register = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: defaultValueRegister,
  });

  // const navigate = useNavigate();

  async function onSubmit(data: z.infer<typeof registerSchema>) {
    try {
      await registerService.execute(data);
      console.log(localStorage.getItem("@tipo_usua"));
      console.log("você foi cadastrado");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  return (
    <div className="p-4">
      <div className="my-4 flex items-center justify-center">
        <h1 className="text-white text-2xl font-bold">Crie Sua conta</h1>
      </div>
      <div className="flex flex-col gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex flex-col justify-start items-start gap-2">
                <Label className="font-semibold text-lg text-white">
                  Cadastre seu usuário:
                </Label>
                <FormField
                  control={form.control}
                  name="user"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-white w-80"
                          placeholder="Digite seu usuário"
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
                  Cadastre sua Senha:
                </Label>
                <FormField
                  control={form.control}
                  name="senha"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
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
                  Cadastrar
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export { Register };
