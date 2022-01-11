import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Finish from "./Finish";
const HomepageSection = () => {
  return (
    <div className="mt-5 ">
      <div className="container d-flex justify-content-center">
        <h2 className="fw-bold text-primary text-center mb-5 ">
          What we do to help
          <br /> our client grow in <br />
          digital era,
        </h2>
      </div>

      <div className="d-flex row  justify-content-center ">
        <div className="col-9  col-md-5 col-lg-3  ">
          <Card1 />
        </div>

        <div className="col-9  col-md-5 col-lg-3 mt-lg-5 ">
          <Card2 />
        </div>

        <div className="col-9  col-md-5 col-lg-3  ">
          <Card3 />
        </div>
      </div>

      <div>
        <Finish />
      </div>
    </div>
  );
};

export default HomepageSection;
