import logo from "@/shared/assets/logo.png";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const Questionnaire = () => {
  return (
    <>
      <header className="py-4 px-8 bg-[#12642A] flex items-center justify-between">
        <img className="w-24" src={logo} alt="logo" />
        <div className="flex gap-8 items-center">
          <h1 className="text-white text-lg font-bold w">
            Olá, <span>Carlos</span>
          </h1>
          <Link to={"/"}>
            <IoIosLogOut color="white" size={30} />
          </Link>
        </div>
      </header>
      <main>
        <h1>Hello world</h1>
      </main>
    </>
  );
};

export { Questionnaire };
