import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/mainLayout/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
    </Routes>
    
  );
}

export default App;
