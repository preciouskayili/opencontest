import { ToggleProvider } from "../../../components/ToggleContext";
import Navbar from "../../../components/JoinContest/Navbar";
import Contests from "../../../components/Profile/Contests";
import ProfileDetails from "../../../components/Profile/ProfileDetails";
import CreateContest from "../../../components/Profile/CreateContest";
const Profile = () => {
  return (
    <>
      <Navbar />
      <ToggleProvider>
        <CreateContest />
        <div className="container-fluid">
          <div className="row" style={{ minHeight: "100vh" }}>
            <div
              className="col-xl-3 col-lg-4 col-md-12"
              style={{
                background: "#bbccff",
              }}
            >
              <ProfileDetails />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 mt-2">
              <div className="row">
                <Contests />
                <Contests />
                <Contests />
                <Contests />
                <Contests />
                <Contests />
                <Contests />
              </div>
            </div>
          </div>
        </div>
      </ToggleProvider>
    </>
  );
};

export default Profile;
