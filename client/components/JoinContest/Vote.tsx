import React from "react";

const Vote: React.FC = () => {
  return (
    <div className="card bg-light">
      <div className="card-body d-flex" style={{ alignItems: "center" }}>
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          className="rounded-circle h-100 img-responsive"
          alt="Black and White Portrait of a Man"
          loading="lazy"
          width={50}
          height={50}
        />
        <div className="content ms-3 mt-2 my-auto">
          <p className="text-dark mt-0 mb-0">Precious Kayili Voted</p>
          <h4 className="fw-bold text-dark mt-0">Precious Solomon Kayili</h4>
        </div>
      </div>
    </div>
  );
};

export default Vote;
