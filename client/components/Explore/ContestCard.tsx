import React from "react";
import Link from "next/link";

const ContestCard: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="card">
              <img
                src="https://media.news9live.com/h-upload/2021/09/17/23118-opensea.webp"
                alt="Card image"
                className="img-responsive w-100 card-img-top"
              />

              <div className="card-body">
                <small className="text-dark">
                  <i className="fas fa-vote-yea text-success me-1"></i> 24 Votes
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
