import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  function handleRegister() {
    navigate("/check-list");
  }

  return (
    <div className="p-4">
      <div className="my-4 flex items-center justify-center">
        <h1 className="text-white text-2xl font-bold">Crie Sua conta</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Label className="text-white">Nome do Usuário:</Label>
          <Input className="bg-white" placeholder="Digite o usuário..." />
        </div>
        <div>
          <Label className="text-white">Senha:</Label>
          <Input className="bg-white" placeholder="Digite a senha..." />
        </div>
        <div>
          <Label className="text-white">Confirme a Senha:</Label>
          <Input
            className="bg-white"
            placeholder="Digite a senha novamente..."
          />
        </div>
        <div className="pt-3 flex justify-center items-center">
          <Button
            type="button"
            onClick={handleRegister}
            className="text-lg bg-[#FF6F20] hover:bg-orange-400"
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Register };
