import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";

const Vote: React.FC = () => {
  return (
    <div className="card bg-light">
      <div className="card-body d-flex" style={{ alignItems: "center" }}>
        <Image
          src="/profile.webp"
          className="rounded-circle img-responsive flex-center"
          alt="Black and White Portrait of a Man"
          loading="lazy"
          height="50"
          width="50"
          objectFit="cover"
        />
        <div className="content ms-3 mt-2 my-auto">
          <p className="text-dark mt-0 mb-0">
            <small className="text-dark">
              <span>
                <AiOutlineLike style={{ marginTop: "-5px" }} />
              </span>
            </small>{" "}
            Precious Kayili
          </p>
          <h4 className="fw-bold text-dark mt-0">Leroy Gwirize</h4>
        </div>
      </div>
    </div>
  );
};

export default Vote;
