import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

const SignIn = () => {
  return (
    <div className="p-4">
      <div className="my-4 flex items-center justify-center">
        <h1 className="text-white text-lg font-bold">Seja Bem-Vindo!</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Label className="text-white">Usuário: </Label>
          <Input className="bg-white" placeholder="Digite seu usuário..." />
        </div>
        <div>
          <Label className="text-white">Senha: </Label>
          <Input className="bg-white" placeholder="Digite sua senha..." />
        </div>
        <div className="flex justify-center items-center">
          <Button className="text-lg bg-[#FF6F20]">Entrar</Button>
        </div>
      </div>
    </div>
  );
};

export { SignIn };
