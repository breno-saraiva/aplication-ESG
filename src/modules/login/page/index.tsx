import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import logo from "@/shared/assets/logo.png";
import { Register } from "../components/register";
import { SignIn } from "../components/signIn";

const Login = () => {
  return (
    <div className="w-full h-screen bg-[#12642A] flex ">
      <div className="m-auto  flex flex-col">
        <div className="flex flex-col gap-4">
          <img className="text-2xl" src={logo} alt="Logo" />
          <p className="text-white text-lg font-medium flex flex-col justify-center items-center">
            Seu Guia de uma vida <br />{" "}
            <span className="text-xl">Sustentável</span>
          </p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
      <div className="m-auto">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="bg-green-600/70 text-white">
            <TabsTrigger value="signIn">Login</TabsTrigger>
            <TabsTrigger value="register">Cadastre-se</TabsTrigger>
          </TabsList>
          <TabsContent
            className="bg-green-600/70 rounded-lg p-4"
            value="signIn"
          >
            <SignIn />
          </TabsContent>
          <TabsContent
            className="bg-green-600/70 rounded-lg p-4"
            value="register"
          >
            <Register />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export { Login };
