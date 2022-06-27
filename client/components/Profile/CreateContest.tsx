import React, { useContext, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { FcAddImage } from "react-icons/fc";
import { ToggleContext } from "../ToggleContext";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import withReactContent from "sweetalert2-react-content";
import baseUrl from "../../utils/baseUrl";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);
const Toast = Swal.mixin({
  toast: true,
  position: "top",
  timer: 3000,
  timerProgressBar: true,
  showConfirmButton: false,
});

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
  const [tagToggle, setTagToggle] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePaginate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (
      !formState.contestName ||
      !formState.contestants ||
      !formState.desc ||
      !formState.tags
    ) {
      Toast.fire("Fill in form fields", "", "error");
      return;
    }
    setFormStep(1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/contest/create`;
      const { contestName, contestants, tags, desc, thumbnail } = formState;
      const payload = { contestName, contestants, tags, desc, thumbnail };
      await axios.post(url, payload);
    } catch (err) {
      MySwal.fire({
        title: "OOPS!",
        text: "Unable to upload post",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      console.error(err);
    }
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
    <div className="container">
      <div
        className={
          isToggled ? "sidenav w-100 mx-auto active shadow pb-5" : "sidenav"
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

            <div className="card rounded-5 bg-light mt-2">
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
                        <div
                          id="tags"
                          onClick={() => setTagToggle(true)}
                          onBlur={() => setTagToggle(false)}
                          style={{ cursor: "text" }}
                          className="form-control user-form border-0 tag-input"
                          placeholder="Hello"
                        ></div>
                        {tagToggle && (
                          <div className="card mt-1">
                            <p
                              className="fw-bold text-primary bg-light pb-2"
                              style={{
                                borderBottom: "1px solid #a5c7ff",
                                cursor: "pointer",
                              }}
                            >
                              <div className="pt-3 ps-2">
                                <AiOutlinePlus
                                  className="me-2"
                                  style={{ marginTop: "-3px" }}
                                />
                                Create Tag
                              </div>
                            </p>

                            <div className="ps-3 py-1 pb-3">
                              <div className="tags">
                                <button className="tagcloud-dark">
                                  OpenVoting
                                </button>

                                <button className="tagcloud-dark">Cloud</button>

                                <button className="tagcloud-dark">
                                  codespace
                                </button>

                                <button className="tagcloud-dark">
                                  technology
                                </button>

                                <button className="tagcloud-dark">
                                  openvoting
                                </button>

                                <button className="tagcloud-dark">NFTS</button>
                              </div>
                            </div>
                          </div>
                        )}
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
                        ></input>
                      </div>

                      <div className="mb-2 fs-5 d-flex">
                        <button
                          className="btn btn-lg btn-dark fs-6 ms-auto"
                          type="button"
                          onClick={(e) => handlePaginate(e)}
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
                                height="225rem"
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
    </div>
  );
};

export default CreateContest;
