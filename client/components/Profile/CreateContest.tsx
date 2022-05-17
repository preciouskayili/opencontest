import React, { Context, useContext, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { FcAddImage } from "react-icons/fc";
import { ToggleContext } from "../ToggleContext";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import baseUrl from "../../utils/baseUrl";
import swal from "sweetalert";

const alertContent = (title: string, text: string, icon: string) => {
  swal({
    title: title,
    text: text,
    icon: icon,
    timer: 2000,
  });
};
// Form initial state
const INITIAL_STATE = {
  contestName: "",
  contestants: "",
  tags: "",
  desc: "",
  thumbnail: "",
};

const CreateContest: React.FC = () => {
  const { isToggled, setIsToggled } = useContext(ToggleContext);

  const [formStep, setFormStep] = useState(0);
  const [formState, setFormState] = useState(INITIAL_STATE);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = `${baseUrl}/contest/create`;

    const { contestName, contestants, tags, desc, thumbnail } = formState;

    const payload = { contestName, contestants, tags, desc, thumbnail };

    fetch(url, {
      method: "POST",
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
      })
      .catch((err) => {
        console.error(err);
        alertContent("OOPS!", "Unable to post contest", "error");
      });
  };

  const captureFile = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, files } = e.currentTarget;

    const reader = new window.FileReader();
    reader.readAsDataURL(files![0]);

    reader.onloadend = () => {
      setFormState((prevState) => ({ ...prevState, [name]: reader.result }));
    };
  };
  return (
    <>
      <div
        className={
          isToggled ? "sidenav w-100 active shadow h-full pb-5" : "sidenav"
        }
      >
        <div className="container">
          <div className="mt-5">
            <div className="my-auto small-1 mt-3 mb-2">
              <div className="mt-2 d-flex">
                <h3 className="font-weight-bold text-white">Create Contest</h3>
                <i
                  className="fs-2 text-light mb-2 fs-5 ms-auto"
                  style={{ cursor: "pointer", alignItems: "center" }}
                  onClick={() => setIsToggled(false)}
                >
                  <AiOutlineClose />
                </i>
              </div>
            </div>

            <div className="card rounded-5 bg-light mt-5">
              <div className="card-body">
                <form
                  className="mt-4"
                  onSubmit={(e) => handleSubmit(e)}
                  action="/"
                >
                  {formStep === 0 ? (
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label
                          className="fw-bold mb-2 fs-5 text-dark"
                          htmlFor="contestName"
                        >
                          Contest Name
                        </label>
                        <input
                          type="text"
                          id="contestName"
                          name="contestName"
                          onChange={(e) => handleChange(e)}
                          value={formState.contestName}
                          className="form-control user-form border-0"
                          placeholder="What do we call it..."
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <label
                          className="fw-bold mb-2 fs-5 text-dark"
                          htmlFor="contestants"
                        >
                          Contestants
                        </label>
                        <input
                          type="text"
                          id="contestants"
                          name="contestants"
                          onChange={(e) => handleChange(e)}
                          value={formState.contestants}
                          className="form-control user-form border-0"
                          placeholder="Mark, John, ..."
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <label
                          className="fw-bold mb-2 fs-5 text-dark"
                          htmlFor="tags"
                        >
                          Tags
                        </label>
                        <input
                          id="tags"
                          className="form-control user-form border-0"
                          name="tags"
                          onChange={(e) => handleChange(e)}
                          value={formState.tags}
                          style={{ minHeight: "8rem" }}
                        ></input>
                      </div>

                      <div className="col-md-6 mb-4">
                        <label
                          className="fw-bold mb-2 fs-5 text-dark"
                          htmlFor="desc"
                        >
                          Description
                        </label>
                        <input
                          id="desc"
                          name="desc"
                          onChange={(e) => handleChange(e)}
                          value={formState.desc}
                          className="form-control user-form border-0"
                          style={{ minHeight: "8rem" }}
                        ></input>
                      </div>

                      <div className="mb-2 fs-5 d-flex">
                        <button
                          className="btn btn-lg btn-dark fs-6 ms-auto"
                          type="button"
                          onClick={() => setFormStep(formStep + 1)}
                        >
                          <BsArrowRight />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div
                        className="d-flex"
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <h3 className="text-dark">Upload Thumbnail</h3>
                        <>
                          {formState.thumbnail ? (
                            <>
                              <Image
                                width="200"
                                height="200"
                                objectFit="contain"
                                src={formState.thumbnail}
                                alt="Uploaded image"
                              />
                            </>
                          ) : (
                            <span className="display-1">
                              <FcAddImage />
                            </span>
                          )}
                        </>
                        <input
                          className="form-control w-50 mt-4"
                          type="file"
                          onInput={(e) => captureFile(e)}
                          name="thumbnail"
                          id="thumbnail"
                        />
                      </div>
                      <div className="d-flex mt-5">
                        <button
                          className="btn btn-lg btn-primary fs-6 me-auto"
                          type="button"
                          onClick={() => setFormStep(formStep - 1)}
                        >
                          <BsArrowLeft />
                        </button>
                        <button
                          className="btn btn-lg btn-dark fs-6 ms-auto"
                          type="submit"
                        >
                          Create Contest
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateContest;
