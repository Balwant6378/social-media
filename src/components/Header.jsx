import { APP_IMAGE } from "../constants/image.js";

export const Header = ({ selectedTab, setSelectedTab }) => {
  return (
    <>
      <header className="p-3 text-bg-dark">
        {" "}
        {/* <img
          src={APP_IMAGE.logo}
          // height={30px}
          alt="hello"
          className="logoImg"
          // style={{ backgroundColor: "white" }}
        /> */}
        <div className="container">
          {" "}
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {" "}
            <img
              src={APP_IMAGE.logo}
              // height={30px}
              alt="hello"
              className="logoImg text-bg-dark"
              // style={{ backgroundColor: "white" }}
            />
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              {" "}
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>{" "}
            </a>{" "}
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 navIcons">
              {" "}
              <li
                onClick={() => {
                  setSelectedTab("Home");
                }}
              >
                <a
                  href="#"
                  className={`nav-link text-white ${selectedTab === "Home" && "active"}`}
                >
                  Home
                </a>
              </li>{" "}
              <li
                onClick={() => {
                  setSelectedTab("Create Post");
                }}
              >
                <a
                  href="#"
                  className={`nav-link text-white ${selectedTab === "Create Post" && "active"}`}
                >
                  Create Post
                </a>
              </li>{" "}
              <li
                onClick={() => {
                  setSelectedTab("About");
                }}
              >
                <a
                  href="#"
                  className={`nav-link text-white ${selectedTab === "About" && "active"}`}
                >
                  About
                </a>
              </li>{" "}
            </ul>{" "}
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              {" "}
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />{" "}
            </form>{" "}
            <div className="text-end">
              {" "}
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>{" "}
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </header>
    </>
  );
};
