import Link from "next/link";

const Hero = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="p-5"
    >
      <div
        className="container-fluid shadow-lg"
        style={{
          border: "1px solid #fff",
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "1rem",
          backdropFilter: "blur(2rem)",
        }}
      >
        <div className="row">
          <div
            className="col-lg-7 col-md-12 p-5"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h5 className="fw-bold fs-3 text-gradient">
              Create, Compete, Participate
            </h5>
            <hr className="w-25 bg-light rounded-5" style={{ height: "5px" }} />
            <h1 className="display-1 fw-bold text-white pt-4 text-gradient">
              The Open <br /> Voting System
            </h1>
            <div className="pt-4">
              <Link href="/sign-up">
                <a className="btn btn-lg btn-primary fs-6">Get Started</a>
              </Link>
              <Link href="/explore">
                <a className="btn btn-lg btn-outline-white ms-3 fs-6">
                  Explore
                </a>
              </Link>
            </div>
          </div>
          <div
            className="col-lg-5 card-footer"
            style={{
              background: "url(/images/pc.png)",
              borderRadius: "1rem",
              minHeight: "80vh",
            }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
