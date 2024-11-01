import { loginRouter } from "@/modules/login/router/index.router";
import { questionnaireRouter } from "@/modules/questionnaire/router/index.router";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([...loginRouter, ...questionnaireRouter]);

export { router };
