import React from "react";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import Image from "next/image";

const ContestCard: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="card">
              <Image
                src="/images/nft.webp"
                alt="Card image"
                className="img-responsive card-img-top"
                width="100%"
                height="225"
                objectFit="cover"
                loading="lazy"
                unoptimized={true}
              />

              <div className="card-body">
                <small className="text-dark">
                  <span>
                    <AiOutlineLike style={{ marginTop: "-3px" }} />
                  </span>{" "}
                  24 Votes
                </small>
                <h3 className="card-title text-dark fw-bold">Lorem Election</h3>

                <div className="tags">
                  <a href="/" className="tagcloud-dark">
                    OpenVoting
                  </a>
                  <a href="/" className="tagcloud-dark">
                    Cloud
                  </a>
                  <a href="/" className="tagcloud-dark">
                    codespace
                  </a>
                  <a href="/" className="tagcloud-dark">
                    technology
                  </a>
                  <a href="/" className="tagcloud-dark">
                    OpenVoting
                  </a>
                  <a href="/" className="tagcloud-dark">
                    Cloud
                  </a>
                </div>
              </div>

              <Link href="/join-contest/1">
                <a
                  style={{
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                  }}
                  className="btn btn-primary w-100 mt-3"
                >
                  Join Contest
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContestCard;
