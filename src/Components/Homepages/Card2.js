import cardimg from "../../Images/3.png";
import arrow from "../../Images/Vector.png";

const card2 = () => {
  return (
    <div className="">
      <div className="Card my-5 px-3 pb-5 ">
        <img
          className="ms-0 ms-lg-5 ms-md-3"
          src={cardimg}
          alt=""
          style={{ width: "200px", height: "140px" }}
        />
        <h5 className="fw-bold text-primary mt-4">
          Bring technology to your confortable home
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

export default card2;
