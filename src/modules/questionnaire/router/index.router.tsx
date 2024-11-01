import { RouteObject } from "react-router-dom";
import { Questionnaire } from "../page";

const questionnaireRouter: RouteObject[] = [
  {
    path: "/check-list",
    element: <Questionnaire />,
  },
];

export { questionnaireRouter };
