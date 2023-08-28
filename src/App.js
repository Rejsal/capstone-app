import "./App.css";
import "./AppQuery.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./components/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
