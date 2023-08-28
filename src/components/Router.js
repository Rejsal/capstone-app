import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import ReserveTable from "./ReserveTable";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/home" Component={Main} />
      <Route path="/reserve" Component={ReserveTable} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
};

export default Router;
