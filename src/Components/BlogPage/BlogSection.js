import share from "../../Images/share.png";
import bookmark from "../../Images/bookmark.png";
import Rectangle5 from "../../Images/Rectangle 5.png";
import Popular2 from "./Popular2";
import Article from "./Article";

const BlogSection = () => {
  return (
    <div>
      <div className="  mt-5">
        <div className="d-flex col-9 container">
          <div className="me-4">
            <p className="fw-bold text-primary ">POPULAR</p>
            <h3 className="text-primary fw-bold">
              Feugiat sodales at nullam tellus.
            </h3>
            <p className="mt-3 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
              posuere nibh tempor fringilla porta pellentesque ipsum.
            </p>

            <div className="d-flex align-items-center justify-content-between mt-5 ">
              <p>
                Samatha Leuthex <br />
                May 5, 3 min read
              </p>
              <div className="d-flex justify-content-between col-3 me-5 pe-4">
                <img src={bookmark} alt="" className="mx-4" />
                <img src={share} alt="" />
              </div>
            </div>
          </div>

          <div>
            <img
              src={Rectangle5}
              alt=""
              className="rectangle5 d-none d-lg-block mt-4"
            />
          </div>
        </div>

        <div className="col-9 container">
          <Popular2 />
        </div>
        <div>
          <Article />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
