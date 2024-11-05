import logo from "@/shared/assets/logo.png";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFaceSadTear } from "react-icons/fa6";
import { FaFaceSmileBeam } from "react-icons/fa6";
import { FaFaceGrinBeam } from "react-icons/fa6";

const Questionnaire = () => {
  return (
    <>
      <header className="py-4 px-8 bg-[#12642A] flex items-center justify-between">
        <img className="w-24" src={logo} alt="logo" />
        <div className="flex gap-8 items-center">
          <h1 className="text-white text-lg font-bold w">
            Olá, <span>Fabão</span>
          </h1>
          <Link to={"/"}>
            <IoIosLogOut color="white" size={30} />
          </Link>
        </div>
      </header>
      <main className="w-full px-24 mt-8 flex flex-col gap-6">
        <div className="flex justify-center items-center">
          <h1 className="font-semibold text-4xl text-green-800">
            Sustentabilidade
          </h1>
        </div>
        <div className="mx-36 flex flex-col justify-center items-center gap-4 bg-red-500 px-12 py-2 rounded-3xl">
          <h1 className="text-white font-bold text-xl">
            Você precisa cuidar do nosso planeta!
          </h1>
          <FaFaceSadTear size={60} className="text-white" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full h-2 rounded-full bg-green-500 flex">
            {/* 0% */}
            <div className="flex items-center">
              <div className="border-4 border-green-500 rounded-full bg-white">
                <div className="border-4 border-white rounded-full"></div>
              </div>
            </div>
            {/* 10% */}
            <div className="flex items-center justify-end bg-[ProgresProps[state]] w-full h-2 rounded-r-full">
              <div className="border-4 border-green-500 rounded-full bg-white">
                <div className="border-4 border-white rounded-full"></div>
              </div>
            </div>
            {/* 20% */}
            <div className="flex items-center justify-end bg-green-500 w-full h-2 rounded-r-full">
              <div className="border-4 border-green-500 rounded-full bg-white">
                <div className="border-4 border-white rounded-full"></div>
              </div>
            </div>
            {/* 30% */}
            <div className="flex items-center justify-end bg-green-500 w-full h-2 rounded-r-full">
              <div className="border-4 border-green-500 rounded-full bg-white">
                <div className="border-4 border-white rounded-full"></div>
              </div>
            </div>
            {/* 40% */}
            <div className="flex items-center justify-end bg-green-500 w-full h-2 rounded-r-full">
              <div className="border-4 border-green-500 rounded-full bg-white">
                <div className="border-4 border-white rounded-full"></div>
              </div>
            </div>
            {/* 50% */}
            <div className="flex items-center justify-end bg-green-500 w-full h-2 rounded-r-full">
              <div className="border-4 border-green-500 rounded-full bg-white">
                <div className="border-4 border-white rounded-full"></div>
              </div>
            </div>
            {/* 60% */}
            <div className="flex items-center justify-end bg-green-500 w-full h-2 rounded-r-full">
              <div className="border-4 border-green-500 rounded-full bg-white">
                <div className="border-4 border-white rounded-full"></div>
              </div>
            </div>
            {/* 70% */}
            <div className="flex items-center justify-end bg-green-500 w-full h-2 rounded-r-full">
              <div className="border-4 border-green-500 rounded-full bg-white">
                <div className="border-4 border-white rounded-full"></div>
              </div>
            </div>
            {/* 80% */}
            <div className="flex items-center justify-end bg-green-500 w-full h-2 rounded-r-full">
              <div className="border-4 border-green-500 rounded-full bg-white">
                <div className="border-4 border-white rounded-full"></div>
              </div>
            </div>
            {/* 90% */}
            <div className="flex items-center justify-end bg-zinc-300 w-full h-2 rounded-r-full">
              <div className="border-4 border-zinc-300 rounded-full bg-white">
                <div className="border-4 border-white rounded-full"></div>
              </div>
            </div>
            {/* 100% */}
            <div className="flex items-center justify-end bg-zinc-300 w-full h-2 rounded-r-full">
              <div className="border-4 border-zinc-300 rounded-full bg-white">
                <div className="border-4 border-white rounded-full"></div>
              </div>
            </div>
          </div>
          {/* contagem da porcentagem */}
          <div className="w-full flex justify-between">
            <h1>0%</h1>
            <h1>10%</h1>
            <h1>20%</h1>
            <h1>30%</h1>
            <h1>40%</h1>
            <h1>50%</h1>
            <h1>60%</h1>
            <h1>70%</h1>
            <h1>80%</h1>
            <h1>90%</h1>
            <h1>100%</h1>
          </div>
        </div>
        <div className="flex">
          <div className="w-full mt-12 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Checkbox id="1" />
              <label htmlFor="1">Demorou menos 15 minutos no banho</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="2" />
              <label htmlFor="2">
                Desligou a torneira da pia enquanto escovava os dentes
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="3" />
              <label htmlFor="3">
                Fechou bem o registro, para evitar vazamentos
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="4" />
              <label htmlFor="4">
                Fechou a torneira enquanto higienizava a louça
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="5" />
              <label htmlFor="5">
                Juntou roupa o suficiente para não ter que fazer múltiplas
                lavagens
              </label>
            </div>
          </div>
          <div className="w-full m-12 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Checkbox id="6" />
              <label htmlFor="6">
                Utilizou lâmpadas de LED para economizar energia
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="7" />
              <label htmlFor="7">
                Reutilizou sacolas plásticas ou usou sacolas reutilizáveis
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="8" />
              <label htmlFor="8">Separou o lixo para reciclagem</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="9" />
              <label htmlFor="9">Optou por produtos com menos embalagens</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="10" />
              <label htmlFor="10">
                Evitou o uso de descartáveis, preferindo itens reutilizáveis
              </label>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export { Questionnaire };
