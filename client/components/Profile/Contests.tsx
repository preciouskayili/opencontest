import Link from "next/link";

const Contests = () => {
  return (
    <>
      <div className="container-fluid bg-dark rounded-5">
        <div className="card-body">
          <h1 className="fw-bold text-white text-upper">Contests</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 mt-4">
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
                <Link href="/">
                  <a className="tagcloud-dark">OpenVoting</a>
                </Link>
                <Link href="/">
                  <a className="tagcloud-dark">Cloud</a>
                </Link>
                <Link href="/">
                  <a className="tagcloud-dark">codespace</a>
                </Link>
                <Link href="/">
                  <a className="tagcloud-dark">technology</a>
                </Link>
                <Link href="/">
                  <a className="tagcloud-dark">openvoting</a>
                </Link>
                <Link href="/">
                  <a className="tagcloud-dark">NFTS</a>
                </Link>
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
    </>
  );
};

export default Contests;
