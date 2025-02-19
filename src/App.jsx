import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster } from "sonner";
import Gamelayout from "./pages/Gamelayout";
import Home from "./pages/Home";
import FarmGame from "./components/FarmGame";

function App() {
  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Toaster position="bottom-right" />
        <Routes>
          <Route path="/" element={<Gamelayout />}>
            <Route index element={<Home />} />
            <Route path="farmgame" element={<FarmGame />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
