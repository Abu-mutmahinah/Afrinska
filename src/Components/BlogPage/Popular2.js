import share from "../../Images/share.png";
import bookmark from "../../Images/bookmark.png";
import { PopularData } from "./BlogpageData";

const Popular2 = () => {
  return (
    <div>
      <div className="  d-flex align-items-center ms-3 mt-3 container ">
        {PopularData.map((item) => {
          return (
            <div key={item.id} className="d-none d-lg-block">
              <img src={item.img} alt="" className="col-11" />
              <h5 className="text-primary mt-3  fw-bold col-11">
                {item.title}
              </h5>
              <p className="col-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="d-flex align-items-center justify-content-between mt-2 ">
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
          );
        })}
      </div>
      <div className="d-flex justify-content-end me-3 d-none d-lg-block  ">
        <h6 className="text-primary my-4">SEE ALL POPULAR ARTICLE</h6>
      </div>
      <div className="Line mb-3 col-11 container d-none d-lg-block"></div>
    </div>
  );
};

export default Popular2;
