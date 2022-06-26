import { useState, useEffect } from "react";
import Router from "next/router";
import baseUrl from "../utils/baseUrl";
import Link from "next/link";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  timer: 3000,
  timerProgressBar: true,
  showConfirmButton: false,
});

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const SignUp = () => {
  const [formState, setFormState] = useState(INITIAL_STATE);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    if (invalidPassword) {
      Toast.fire("Passwords do not match", "", "error");
    }

    e.preventDefault();
    const url = `${baseUrl}/users`;

    const { name, email, password, repeatPassword } = formState;
    const payload = { name, email, password };

    if (password === repeatPassword) {
      setInvalidPassword(false);
    }
    if (password !== repeatPassword) return setInvalidPassword(true);

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Got a non-2xx response from API server.");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        Router.push("/explore");
      })
      .catch((err) => {
        Toast.fire("An error occurred while creating account", "", "error");
      });
  };
  return (
    <div className="w-100" style={{ width: "100%", overflowX: "hidden" }}>
      <div className="row">
        <div
          className="col-xl-4 col-lg-5 col-md-12 d-flex"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="card-body">
            <h2 className="fw-bold text-dark mb-4">Create an account</h2>

            <form className="mt-4" onSubmit={(e) => handleSubmit(e)}>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <input
                    type="text"
                    className="form-control user-form border-0"
                    name="name"
                    onChange={(e) => handleChange(e)}
                    required
                    placeholder="Full name"
                  />
                </div>

                <div className="col-md-12 mb-4">
                  <input
                    type="email"
                    className="form-control user-form border-0"
                    name="email"
                    required
                    onChange={(e) => handleChange(e)}
                    placeholder="Email address"
                  />
                </div>

                <div className="col-md-12 mb-4">
                  <input
                    type="password"
                    className="form-control user-form border-0"
                    name="password"
                    pattern="/^[\w@-]{8-20}$/"
                    min={8}
                    required
                    onChange={(e) => handleChange(e)}
                    placeholder="Password"
                  />
                </div>

                <div className="col-md-12 mb-4">
                  <input
                    type="password"
                    required
                    className="form-control user-form border-0"
                    name="repeatPassword"
                    onChange={(e) => handleChange(e)}
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
        <div
          className="col-xl-8 col-lg-7 col-md-12"
          style={{ minHeight: "100vh" }}
        >
          <div
            className="bg d-flex"
            style={{
              justifyContent: "center",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <div className="p-5">
              <hr
                className="w-25 bg-light rounded-5"
                style={{ height: "5px", marginTop: "-1px" }}
              />
              <h5 className="fw-bold fs-3 text-gradient">
                Create, Compete, Participate
              </h5>
              <h1 className="display-1 fw-bold text-white pt-4 text-gradient">
                The Open <br /> Voting System
              </h1>
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
