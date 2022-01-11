import laptopgirl from "../../Images/4.png";
import arrow from "../../Images/Vector.png";

const card3 = () => {
  return (
    <div className="">
      <div className="Card my-5 px-3 pb-5 ">
        <img className="ms-0 ms-lg-5ms-md-3" src={laptopgirl} alt="" />
        <h5 className="fw-bold text-primary mt-4">
          Build Your Digital Product That Suitable For Your Need
        </h5>

        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Conse cumque
          voluptate earum consecte, corrupti sunt, libero similique amet,
        </p>
        <div className=" Learn d-flex justify-content-between col-7 mt-5 pt-4">
          <p className="fw-bold text-primary">Learn more</p>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default card3;
