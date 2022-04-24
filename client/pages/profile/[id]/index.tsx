import Navbar from "../../../components/JoinContest/Navbar";
import Contests from "../../../components/Profile/Contests";
import ProfileDetails from "../../../components/Profile/ProfileDetails";

const Profile = () => {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "100vh" }}>
          <div
            className="col-md-3"
            style={{
              background: "#bbccff",
            }}
          >
            <ProfileDetails />
          </div>
          <div className="col-md-9 mt-4">
            <Contests />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
