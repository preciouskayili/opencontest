import React, { useContext } from "react";
import { ToggleContext } from "../ToggleContext";

const Sidebar: React.FC = () => {
  const { isToggled, setIsToggled } = useContext(ToggleContext);

  return (
    <>
      <div className={isToggled ? "sidenav active shadow h-full" : "sidenav"}>
        <div className="mt-5">
          <div className="my-auto small-1 mt-3 mb-2">
            <div className="mt-2 d-flex">
              <h3 className="font-weight-bold text-white">Pick candidate</h3>
              <i
                className="fas fa-times fs-2 text-light mb-3 ms-auto"
                style={{ cursor: "pointer", alignItems: "center" }}
                onClick={() => setIsToggled(false)}
              ></i>
            </div>
          </div>

          <div className="input-group w-100 mb-5">
            <input
              type="text"
              id="form1"
              placeholder="Search"
              className="form-control border-0 search"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                color: "#fff",
              }}
            />
            <button
              className="btn btn-sm shadow-none border-0"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                marginLeft: "0.001px",
              }}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="card rounded-3 bg-light mb-4">
            <div className="contestant">
              <div className="content ms-3 mt-2 my-auto">
                <p className="fw-bold text-dark mt-0">
                  Precious Solomon Kayili
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
