import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroComponente from "./component/HeroComponent/HeroComponente";
import HeaderComponent from "./component/HeaderComponent/HeaderComponent";
import UserLogin from "./component/UseLogin/UserLogin";
import UserRegistration from "./component/UserRegistration/UserRegistration";
import Dashboards from "./component/Dashboard/Dashboards";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HeroComponente />} />
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
