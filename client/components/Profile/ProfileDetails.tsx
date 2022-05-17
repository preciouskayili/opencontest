import { useContext } from "react";
import { ToggleContext } from "../ToggleContext";
import Image from "next/image";

const ProfileDetails = () => {
  const { isToggled, setIsToggled } = useContext(ToggleContext);

  return (
    <div className="mt-5">
      <div className="d-flex" style={{ justifyContent: "center" }}>
        <Image
          src="/profile.webp"
          className="rounded-circle img-responsive flex-center"
          alt="Black and White Portrait of a Man"
          loading="lazy"
          height="150px"
          width="150px"
          objectFit="cover"
        />
      </div>

      <p className="text-center fs-4 fw-bold text-dark mt-5">
        Precious Solomon Kayili
      </p>

      <div
        className="votes card shadow-lg text-center"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="card-body d-flex mt-1" style={{ alignItems: "center" }}>
          <p className="fw-bold text-dark fs-5 me-5">
            4k
            <br />
            <small style={{ fontSize: "15px", fontWeight: "normal" }}>
              Contests
            </small>
          </p>

          <p className="fw-bold text-dark fs-5 me-5">
            10k
            <br />
            <small style={{ fontSize: "15px", fontWeight: "normal" }}>
              Votes
            </small>
          </p>

          <p className="fw-bold text-dark fs-5">
            35
            <br />
            <small style={{ fontSize: "15px", fontWeight: "normal" }}>
              Tags
            </small>
          </p>
        </div>
        <button
          className="btn btn-dark col-md-12 w-100"
          onClick={() => setIsToggled(!isToggled)}
        >
          Start Contest
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
