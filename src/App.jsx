import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/mainLayout/MainLayout";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false));
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
    </Routes>
  );
}

export default App;
