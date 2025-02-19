import FarmGame from "./components/FarmGame";
import Navbar from "./components/Navbar";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <Navbar />
      <FarmGame />
    </>
  );
}

export default App;
