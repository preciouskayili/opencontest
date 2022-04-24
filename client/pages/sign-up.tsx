import Link from "next/link";

const SignUp = () => {
  return (
    <div className="w-100" style={{ width: "100%", overflowX: "hidden" }}>
      <div className="row">
        <div
          className="col-lg-4 col-md-5 d-flex"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="card-body">
            <h2 className="fw-bold text-dark mb-4">Create an account</h2>

            <form className="mt-4" action="/">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <input
                    type="text"
                    className="form-control user-form border-0"
                    placeholder="Full name"
                  />
                </div>

                <div className="col-md-12 mb-4">
                  <input
                    type="text"
                    className="form-control user-form border-0"
                    placeholder="Email address"
                  />
                </div>

                <div className="col-md-12 mb-4">
                  <input
                    type="password"
                    className="form-control user-form border-0"
                    placeholder="Password"
                  />
                </div>

                <div className="col-md-12 mb-4">
                  <input
                    type="password"
                    className="form-control user-form border-0"
                    placeholder="Repeat Password"
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <button className="btn btn-lg btn-primary fs-6 col-md-12">
                    Sign Up
                  </button>
                </div>
                <p className="mt-4">
                  Already a member?{" "}
                  <Link href={"/login"}>
                    <a>Login</a>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-8 col-md-7" style={{ minHeight: "100vh" }}>
          <div
            className="banner-image d-flex"
            style={{
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="p-5">
              <h1 className="fw-bold text-white display-3">
                Open <br /> Contest
              </h1>
              <p className="text-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                quae tempore dolore eum earum aliquam reprehenderit odit nostrum
                consequuntur! Necessitatibus ab ipsa quibusdam. Debitis, tempore
                molestiae nobis quod commodi sunt molestias alias, quidem, error
                sed vel nostrum nulla! Autem maxime, corrupti eveniet
                exercitationem similique qui sed id rem! Fugiat, dolorem.
              </p>
            </div>

            <div className="mt-3 pt-2 p-5">
              <Link href="/">
                <a className="fw-bold text-light">
                  <i className="fas fa-arrow-left"></i>
                  <span className="ms-2">Go Home</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
