import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <>
      {/* Footer */}
      <footer className="text-lg-left">
        {/* Grid container */}
        <hr className="bg-white" />
        <div className="container px-3 py-5">
          {/*Grid row*/}
          <div className="row my-auto mt-3">
            {/*Grid column*/}
            <div className="col-lg-6 col-md-12 mb-md-0">
              <h5 className="fw-bold text-gradient fs-3">Open Contest.</h5>
              <p className="pt-4 text-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae
              </p>
            </div>
            {/*Grid column*/}

            {/*Grid column*/}
            <div className="col-lg-6 col-md-12 mb-md-0">
              <h5 className="fw-bold text-gradient fs-3">Tags</h5>

              <div className="pt-4">
                <Link href="/openvoting">
                  <a className="tagcloud">OpenVoting</a>
                </Link>
                <Link href="/cloud">
                  <a className="tagcloud">Cloud</a>
                </Link>
                <Link href="/codespace">
                  <a className="tagcloud">codespace</a>
                </Link>
                <Link href="/technology">
                  <a className="tagcloud">technology</a>
                </Link>
              </div>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-2"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.02)",
          }}
        >
          <p className="text-white pt-3">
            &copy; 2022 | {"All Right's Reserved by "}
            <a
              className="text-light"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/preciouskayili/"
            >
              Stacks
            </a>
          </p>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;
