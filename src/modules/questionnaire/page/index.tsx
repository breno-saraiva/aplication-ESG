import logo from "@/shared/assets/logo.png";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { questionare } from "../mock/questionare";
import { CheckedState } from "@radix-ui/react-checkbox";
import { cn } from "@/shared/lib/utils";
import { FaFaceSadTear } from "react-icons/fa6";
import { FaFaceSmileBeam } from "react-icons/fa6";
import { FaFaceGrinBeam } from "react-icons/fa6";

const Questionnaire = () => {
  const [feedBackFace, setFeedBackFace] = useState({ type: "sad", cont: 0 });

  const feedBack: {
    [key: string]: {
      emotion: JSX.Element;
      bg: string;
      mensage: string;
    };
  } = {
    sad: {
      emotion: <FaFaceSadTear size={60} className="text-white" />,
      bg: "bg-red-500",
      mensage: "Você precisa cuidar do nosso planeta!",
    },
    fine: {
      emotion: <FaFaceSmileBeam size={60} className="text-white" />,
      bg: "bg-blue-700",
      mensage: "Boa, você está tornando um mundo melhor",
    },
    happy: {
      emotion: <FaFaceGrinBeam size={60} className="text-white" />,
      bg: "bg-green-600",
      mensage: "Uhull, você é um herói da sustentabilidade!",
    },
  };

  function handleCheckbox(checked: CheckedState) {
    setFeedBackFace((prev) => ({
      ...prev,
      cont: checked ? prev.cont + 1 : prev.cont - 1,
      type:
        prev.cont <= 4
          ? "sad"
          : prev.cont > 4 && prev.cont <= 7
          ? "fine"
          : "happy",
    }));
  }

  function changeFeedBack() {
    if (feedBackFace.cont <= 4)
      setFeedBackFace((prev) => ({
        ...prev,
        type:
          prev.cont <= 4
            ? "sad"
            : prev.cont > 4 && prev.cont < 7
            ? "fine"
            : "happy",
      }));
  }

  const checkboxes = Array.from({ length: 10 });
  const divs = Array.from({ length: checkboxes.length });

  return (
    <>
      <header className="py-4 px-8 bg-[#12642A] flex items-center justify-between">
        <img className="w-24" src={logo} alt="logo" />
        <div className="flex gap-8 items-center">
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
        <div
          className={cn(
            `mx-36 flex flex-col justify-center items-center gap-4 ${
              feedBack[feedBackFace.type].bg
            } px-12 py-2 rounded-3xl`
          )}
        >
          <h1 className="text-white font-bold text-xl">
            {feedBack[feedBackFace.type].mensage}
          </h1>
          {feedBack[feedBackFace.type].emotion}
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full h-2 rounded-full bg-green-500 flex">
            {/* 0% */}
            <div className="flex items-center">
              <div className="border-4 border-green-500 rounded-full bg-white">
                <div className="border-4 border-white rounded-full"></div>
              </div>
            </div>
            {divs.map((_, index) => (
              <div
                className={cn(
                  `flex items-center justify-end ${
                    index < feedBackFace.cont ? "bg-green-500" : "bg-zinc-300"
                  } w-full h-2 rounded-r-full`
                )}
              >
                <div
                  className={cn(
                    `border-4 ${
                      index < feedBackFace.cont
                        ? "border-green-500"
                        : "border-zinc-300"
                    } rounded-full bg-white`
                  )}
                >
                  <div className="border-4 border-white rounded-full"></div>
                </div>
              </div>
            ))}
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
        <div className="w-full mt-12 grid grid-cols-12 gap-2">
          {questionare &&
            questionare.map((item, index) => (
              <div className="col-span-6 flex items-center gap-2">
                <Checkbox
                  id={`checkbox${index}`}
                  onCheckedChange={(checked: CheckedState) => {
                    handleCheckbox(checked);
                    changeFeedBack();
                  }}
                />
                <label htmlFor={`checkbox${index}`}>{item.descricao}</label>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export { Questionnaire };
