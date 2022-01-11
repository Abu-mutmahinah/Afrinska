import illustration from "../../Images/illustration.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const HomepageHeader = () => {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="  d-flex justify-content-between ">
        <div className="mt-5 text-center text-lg-start">
          <div className="">
            <h1 className="fw-bold  ">
              New Automation <br /> Tool for Your Home
            </h1>
          </div>

          <div className="mt-4 container-fluid">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quos nulla distinctio doloribus hic suscipit fugit perspiciatis
              ducimus inventore necessitatibus Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div>
            <Link to="/Blogpage">
              <button className="py-2 px-3 mt-5">See Next Page</button>
            </Link>
          </div>
        </div>

        <div className="Header-image d-none d-lg-inline  ">
          <img src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomepageHeader;
