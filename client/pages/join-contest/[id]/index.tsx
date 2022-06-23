import { useContext } from "react";
import { useRouter } from "next/router";
import ContestInfo from "../../../components/JoinContest/ContestInfo";
import Navbar from "../../../components/JoinContest/Navbar";
import Sidebar from "../../../components/JoinContest/Sidebar";
import Title from "../../../components/JoinContest/Title";
import Vote from "../../../components/JoinContest/Vote";
import { ToggleProvider } from "../../../components/ToggleContext";
const Contest = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="bg-light" style={{ minHeight: "100vh" }}>
      <Navbar />
      <ToggleProvider>
        <Sidebar />
        <div className="mt-5">
          <div className="container-fluid p-3">
            <div className="row">
              <div className="col-md-4">
                <ContestInfo />
              </div>

              <div className="col-md-8 mt-5 mt-lg-0">
                <Title />
                <div className="mt-5">
                  <div className="col-md-12">
                    <Vote />
                    <div className="mt-3">
                      <Vote />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ToggleProvider>
    </div>
  );
};

export default Contest;
