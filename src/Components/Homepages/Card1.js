import bookguy from "../../Images/bookguy.png";
import arrow from "../../Images/Vector.png";

const card1 = () => {
  return (
    <div className="Card my-5 px-3 pb-5 ">
      <div className="">
        <img className="ms-0 ms-lg-5 ms-md-0" src={bookguy} alt="" />
        <h5 className="fw-bold text-primary mt-4">
          Make Your business To Be Better Famous In Internet
        </h5>

        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Conse cumque
          voluptate earum consecte, corrupti sunt, libero similique amet,{" "}
        </p>
        <div className=" Learn d-flex justify-content-between col-7 mt-5 pt-4">
          <p className="fw-bold text-primary">Learn more</p>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default card1;
