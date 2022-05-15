import React, { useContext } from "react";
import { ToggleContext } from "../ToggleContext";

const ContestInfo: React.FC = () => {
  const toggle = useContext(ToggleContext);

  return (
    <>
      <div
        className="rounded-5"
        style={{
          height: "12rem",
          background:
            "url('https://media.news9live.com/h-upload/2021/09/17/23118-opensea.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="results card mt-4"
        style={{ height: "15rem", overflow: "auto" }}
      >
        <div className="card-body">
          <div className="result mt-3">
            <small className="fw-bold text-dark">Leroy Sane (25%)</small>
            <div className="progress rounded" style={{ height: "10px" }}>
              <div
                className="progress-bar rounded"
                role="progressbar"
                style={{ width: "25%" }}
              ></div>
            </div>
          </div>

          <div className="result mt-3">
            <small className="fw-bold text-dark">
              Precious Solomon Kayili (45%)
            </small>
            <div className="progress rounded" style={{ height: "10px" }}>
              <div
                className="progress-bar rounded"
                role="progressbar"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>

          <div className="result mt-3">
            <small className="fw-bold text-dark">Stacy Benedict (30%)</small>
            <div className="progress rounded" style={{ height: "10px" }}>
              <div
                className="progress-bar rounded"
                role="progressbar"
                style={{ width: "30%" }}
              ></div>
            </div>
          </div>
        </div>
        <button onClick={() => toggle} className="btn btn-primary">
          Vote
        </button>
      </div>
    </>
  );
};

export default ContestInfo;
