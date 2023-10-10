import Index from "../pages/Index";
import Activity from "../pages/Activity";
import {
  INDEX_ROUTE,
  ACTIVITY_ROUTE,
} from "./const";

export const routes = [
  {
    path: INDEX_ROUTE,
    Element: <Index />,
  },
  {
    path: ACTIVITY_ROUTE,
    Element: <Activity />,
  }
];
