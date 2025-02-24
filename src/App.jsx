import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster } from "sonner";
import Gamelayout from "./pages/Gamelayout";
import Home from "./pages/Home";
import FarmGame from "./components/FarmGame";
import MemoryGame from "./components/MemoryGame";

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
            <Route path="memorygame" element={<MemoryGame />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
