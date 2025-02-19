import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Gamelayout = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Gamelayout;
