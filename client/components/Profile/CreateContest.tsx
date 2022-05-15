import React, { Context, useContext, useState } from "react";
import ipfsClient from "ipfs-http-client";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { FcAddImage } from "react-icons/fc";
import { ToggleContext } from "../ToggleContext";
import { AiOutlineClose } from "react-icons/ai";
import { Buffer } from "buffer";

const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});
// Form initial state
const INITIAL_STATE = {
  contestName: "",
  contestants: "",
  tags: "",
  desc: "",
  thumbnail: "",
  buffer: [],
};

const CreateContest: React.FC = () => {
  const isToggled = useContext(ToggleContext);
  const toggle = useContext(ToggleContext);

  const [formStep, setFormStep] = useState(0);
  const [formState, setFormState] = useState(INITIAL_STATE);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    toggle;

    const { name, value } = e.currentTarget;
    console.log(name, value);
    ipfs.add(formState.buffer, (error: any, result: any) => {
      console.log("IPFS result", result);

      setFormState((prevState) => ({ ...prevState, thumbnail: result[0] }));
      if (error) {
        console.error(error);
        return;
      }

      // Step 2: Add to database
    });
  };

  const captureFile = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, files } = e.currentTarget;

    const reader = new window.FileReader();
    reader.readAsArrayBuffer(files![0]);

    reader.onloadend = () => {
      setFormState((prevState) => ({
        ...prevState,
        [name]: new Buffer.from(reader.result),
      }));
      console.log("====================================");
      console.log(formState);
      console.log("====================================");
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
                  onClick={() => toggle}
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
                        <span className="display-1">
                          <FcAddImage />
                        </span>
                        <input
                          className="form-control w-25 mt-4"
                          type="file"
                          onInput={(e) => captureFile(e)}
                          name="buffer"
                          id="buffer"
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
