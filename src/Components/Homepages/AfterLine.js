import logo2 from "../../Images/Logo2.png";

const AfterLine = () => {
  return (
    <div>
      <div className="d-flex row mt-5 pt-5 container">
        <div className="ms-5 col-9 col-lg-4 ">
          <div className="d-flex">
            <img src={logo2} alt="" />
            <h4 className="fw-bold text-light ms-3">Afrianska</h4>
          </div>

          <div className="d-flex mt-3">
            <p className="text-light">A.</p>
            <p className=" text-light ms-3">
              Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
            </p>
          </div>

          <div className="d-flex">
            <p className="text-light">T.</p>
            <p className=" text-light ms-3">+62-812-7313-4321</p>
          </div>

          <div className="d-flex">
            <p className="text-light">E</p>
            <p className=" text-light ms-3">hello.afrian@gmail.com</p>
          </div>
        </div>

        {/* About Us */}

        <div className=" col-9 col-lg-3 ms-5 mt-5 mt-lg-0">
          <h4 className="fw-bold text-light ">About Us</h4>
          <p className=" text-light mt-3">About</p>
          <p className=" text-light ">What We Do</p>
          <p className="text-light">Project</p>
          <p className=" text-light ">How It Work With Us</p>
        </div>

        {/* Follow Us */}

        <div className="col-9 col-lg-3 ms-5 mt-5 mt-lg-0">
          <h4 className="fw-bold text-light ">Follow Us</h4>
          <p className=" text-light mt-3 ">Instagram</p>
          <p className=" text-light ">facebook</p>
          <p className="text-light">LinkedIn</p>
          <p className=" text-light ">Youtube</p>
        </div>
      </div>
      <p className="ms-5  py-5 mb-3">2022 © Afrianska. All rights reserved.</p>
    </div>
  );
};

export default AfterLine;
