import ContestCard from "../../../components/Explore/ContestCard";
import Navbar from "../../../components/Explore/Navbar";
const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row">
          <h1 className="display-5 fw-bold text-dark text-uppercase mb-3">
            Crypto currency
          </h1>
          <ContestCard />
        </div>
      </div>
    </>
  );
};

export default Profile;
