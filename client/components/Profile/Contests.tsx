import Image from "next/image";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";

const Contests = () => {
  return (
    <>
      <div className="col-lg-6 col-xl-4 col-md-4 col-sm-6 mt-1 mb-2">
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
    </>
  );
};

export default Contests;
