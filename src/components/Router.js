import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import NotFound from "./NotFound";
import Reservation from "./Reservation";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/home" Component={Main} />
      <Route path="/reserve" Component={Reservation} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
};

export default Router;
