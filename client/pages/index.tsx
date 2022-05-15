import type { NextPage } from "next";
import Hero from "../components/Hero";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
const Home: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#0f0e13" }}>
      <div className="bg">
        <Navbar />
        <Hero />
      </div>
      <div className="gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
