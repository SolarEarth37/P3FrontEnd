import { Routes, Route } from "react-router-dom";
import DeviceManagementVM from './Page/DeviceManagementVM';
import FrontPageVM from './Page/FrontPageVM';
import LoanViewVM from './Page/LoanViewVM';
import LoginPageVM from './Page/LoginPageVM';
import MenuPageVM from './Page/MenuPageVM';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPageVM />} />
      <Route path="device" element={<DeviceManagementVM />} />
      <Route path="loan" element={<LoanViewVM />} />
      <Route path="login" element={<LoginPageVM />} />
      <Route path="menu" element={<MenuPageVM />} />
    </Routes>
  );
}

export default App;
