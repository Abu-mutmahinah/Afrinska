import Group1 from "../../Images/Mask Group.png";
import Group2 from "../../Images/Mask Group2.png";
import Group3 from "../../Images/Mask Group3.png";

const Finish = () => {
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-around align-items-center container col-10">
        <h1 className=" col-9 col-lg-6 fw-bold text-primary">
          Our finished <br /> Project
        </h1>
        <h6 className="d-none d-lg-inline ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, natus!
          Impedit corporis saepe consequatur autem rerum a quidem, ratione
          repudiandae!
        </h6>
      </div>

      <div>
        <div className="d-flex justify-content-center mt-5">
          <img src={Group1} alt="" className="col-10 container-fluid" />
        </div>

        <div className="d-flex justify-content-center mt-5 container mb-5 pb-5">
          <div>
            <img src={Group2} alt="" className="col-9 col-lg-10 ps-0 ps-lg-5" />
          </div>
          <div>
            <img
              src={Group3}
              alt=""
              className="col-9 col-lg-10 ps-0 ps-lg-4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
