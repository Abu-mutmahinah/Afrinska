import Group8 from "../../Images/Group 8.png";
import Footer2 from "./Footer2";

const HomaPageFooter = () => {
  return (
    <div className=" Footer1 mb-5">
      <div className=" mt-5">
        <div className="d-flex justify-content-around align-items-center mt-5 pt-5">
          <h1 className=" mt-5  fw-bold text-light">
            Our beloved <br />
            Client
          </h1>
          <p className="col-5 mt-5 text-light d-none d-lg-inline">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum
            quas, ipsa consequatur adipisci eligendi distinctio obcaecati.
            Placeat
          </p>
        </div>
      </div>

      <div className=" Logo  d-flex justify-content-around d-none d-lg-block mt-5 py-5  ms-5 ps-3">
        <img src={Group8} alt="" />
      </div>

      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default HomaPageFooter;
