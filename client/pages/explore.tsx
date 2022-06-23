import ContestCard from "../components/Explore/ContestCard";
import Navbar from "../components/Explore/Navbar";

const explore = () => {
  return (
    <>
      <Navbar />

      <div className="mt-5 container-fluid">
        <ContestCard />
      </div>
      <span className="spinner-border text-primary mt-5 d-flex mx-auto"></span>
    </>
  );
};

export default explore;
