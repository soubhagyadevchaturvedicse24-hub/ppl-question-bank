import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/HomePage";
import { SubjectPage } from "./components/SubjectPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/subject/:abbreviation",
    Component: SubjectPage,
  },
]);
