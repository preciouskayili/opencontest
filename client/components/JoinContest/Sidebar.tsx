import { useContext } from "react";
import { ToggleContext } from "../ToggleContext";

const Sidebar = () => {
  const [isToggled, setIsToggled] = useContext(ToggleContext);

  return (
    <>
      <div className={!isToggled ? "sidenav active shadow h-full" : "sidenav"}>
        <div className="mt-5">
          <div className="my-auto small-1 mt-3 mb-2">
            <div className="mt-2 d-flex">
              <h3 className="font-weight-bold text-white">Pick candidate</h3>
              <i
                className="fas fa-times fs-2 text-light mb-3 ms-auto"
                style={{ cursor: "pointer", alignItems: "center" }}
                onClick={() => setIsToggled(true)}
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

          <div className="card rounded-5 bg-light mb-4">
            <div className="contestant px-3 py-2">
              <div className="d-flex" style={{ alignItems: "center" }}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle h-100 img-responsive"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
                <div className="content ms-3 mt-2 my-auto">
                  <small className="text-dark mt-0 mb-0">Contest #1</small>
                  <h4 className="fw-bold text-dark mt-0">
                    Precious Solomon Kayili
                  </h4>
                </div>
              </div>
            </div>
            <div className="contestant px-3 py-2 mt-3">
              <div className="d-flex" style={{ alignItems: "center" }}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle h-100 img-responsive"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
                <div className="content ms-3 mt-2 my-auto">
                  <small className="text-dark mt-0 mb-0">Contest #2</small>
                  <h4 className="fw-bold text-dark mt-0">Stacy Benedict</h4>
                </div>
              </div>
            </div>
            <div className="contestant px-3 py-2 mt-3">
              <div className="d-flex" style={{ alignItems: "center" }}>
                <img
                  src="https://media.news9live.com/h-upload/2021/09/17/23118-opensea.webp"
                  className="rounded-circle img-responsive"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
                <div className="content ms-3 mt-2 my-auto">
                  <small className="text-dark mt-0 mb-0">Contest #3</small>
                  <h4 className="fw-bold text-dark mt-0">Leroy Sane</h4>
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-primary btn-lg mt-3 fw-bold">
            Cast my vote
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
