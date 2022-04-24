import Image from "next/image";
const ProfileDetails = () => {
  return (
    <div className="mt-5">
      <div className="d-flex" style={{ justifyContent: "center" }}>
        <Image
          src="/images/profile.webp"
          className="rounded-circle img-responsive flex-center"
          alt="Black and White Portrait of a Man"
          loading="lazy"
          height="150px"
          width="150px"
          objectFit="cover"
          placeholder="blur"
        />
      </div>

      <p className="text-center fs-4 fw-bold text-dark mt-5">
        Precious Solomon Kayili
      </p>

      <div
        className="votes card shadow-lg text-center"
        style={{ justifyContent: "center" }}
      >
        <div className="card-body d-flex mt-1" style={{ alignItems: "center" }}>
          <p className="me-5 fw-bold text-dark fs-5">
            4k
            <br />
            <small className="fs-6" style={{ fontWeight: "normal" }}>
              Contests
            </small>
          </p>
          <div className="vl"></div>
          <p className="me-5 fw-bold text-dark fs-5">
            10k
            <br />
            <small className="fs-6" style={{ fontWeight: "normal" }}>
              Votes
            </small>
          </p>
          <p className="me-5 fw-bold text-dark fs-5">
            35
            <br />
            <small className="fs-6" style={{ fontWeight: "normal" }}>
              Tags
            </small>
          </p>
        </div>
        <div className="card-footer bg-dark">
          <p className="text-center text-light mt-2">
            preciouskayili@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
