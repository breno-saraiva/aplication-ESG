import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  function handleButton() {
    navigate("/check-list");
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
        <div>
          <Label className="text-white">Usuário: </Label>
          <Input className="bg-white" placeholder="Digite seu usuário..." />
        </div>
        <div>
          <Label className="text-white">Senha: </Label>
          <Input className="bg-white" placeholder="Digite sua senha..." />
        </div>
        <div className="flex justify-center items-center">
          <Button
            type="button"
            onClick={handleButton}
            className="text-lg bg-[#FF6F20] hover:bg-orange-400"
          >
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export { SignIn };
