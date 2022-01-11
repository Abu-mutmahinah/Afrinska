import AfterLine from "./AfterLine";

const Footer2 = () => {
  return (
    <div className="footer2 col-11 mt-5 ">
      <div className="  d-flex align-items-center justify-content-between my -5 py-5 row">
        <div className="ps-5 col-9 col-lg-5">
          <h2 className="  fw-bold text-light ms-4 ">
            intrested to work with our team?
          </h2>
          <p className="mt-3 text-center text-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            pariatur. Aperiam, earum ut porro id quas consectetur corrupti
            quaerat assumenda, natus illum
          </p>
        </div>
        <div className="  col-lg-4 container button ">
          <button className="px-5 py-2 ms-5 ">Let's talk</button>
        </div>
      </div>
      <div className="line col-11 col-lg-10"></div>
      <div>
        <AfterLine />
      </div>
    </div>
  );
};

export default Footer2;
