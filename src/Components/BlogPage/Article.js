import { ArticleData } from "./BlogpageData";
import share from "../../Images/share.png";
import bookmark from "../../Images/bookmark.png";

const Article = () => {
  return (
    <div className="col-9 container mt-5 d-none d-lg-block mb-5 pb-3">
      {ArticleData.map((item) => {
        return (
          <div key={item.id} className="">
            <div className="d-flex justify-content-between mt-3">
              <img src={item.img} alt="" className="" />

              <div className="col-7 d-none d-lg-inline">
                <h3 className="fw-bold text-primary">{item.title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus maxime porro aliquid dolor excepturi, in ipsa at id
                  rem unde deleniti quia eos soluta provident, dignissimos
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Article;
