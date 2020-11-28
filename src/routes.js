import "./configs/dotenv";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import NotFount from "./pages/404";

const routes = [
  {
    exact: true,
    path: process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site" : "/",
    component: Home.Component,
    requestInitialData: Home.requestInitialData,
    options: {
      Head: Home.Head,
    },
  },
  {
    exact: true,
    path: process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "site/obrigado" : "/obrigado",
    component: ThankYou.Component,
    requestInitialData: ThankYou.requestInitialData,
    options: {
      Head: ThankYou.Head,
    },
  },
  {
    component: NotFount.Component,
    options: {
      Head: NotFount.Head,
    },
  },
];

export default routes;
