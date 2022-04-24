import type { NextPage } from "next";
import Hero from "../components/Hero";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
const Home: NextPage = () => {
  return (
    <div className="bg">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
