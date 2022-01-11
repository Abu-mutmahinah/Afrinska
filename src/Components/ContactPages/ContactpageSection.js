import Group from "../../Images/Group (1).png";
import Phone from "../../Images/Vector (5).png";
import Mail from "../../Images/Vector (8).png";
import Internet from "../../Images/Vector (6).png";
import Map from "../../Images/Rectangle 2.png";
import ContactCard from "./ContactCard";

const ContactSection = () => {
  return (
    <div className="col-9 container">
      <div className="row">
        <div className="col-12 col-lg-5 container mb-5">
          <div className="mt-5 pt-5">
            <img src={Group} alt="" className="mt-5" />
            <div>
              <h6 className="fw-bold text-primary">ADDRESS</h6>
              <p>
                id convallis placerat sit sed duis id{" "}
                <br className="d-none d-lg-inline" /> amet volutpat a, phareta.
              </p>
            </div>

            <div>
              <h6 className="fw-bold text-primary">PHONE</h6>
              <div>
                <img src={Phone} alt="" className="mx-2 " />
                +62-812-7313-4321
              </div>
              <div className="pt-2 ">
                <img src={Phone} alt="" className="mx-2 " />
                +62-812-7313-4321
              </div>
            </div>

            <div>
              <h6 className="fw-bold text-primary mt-4">ONLINE SERVICE</h6>
              <div>
                <img src={Internet} alt="" className="mx-2 " />
                www.afriansska.com
              </div>
              <div className="pt-2 d-flex">
                <img src={Mail} alt="" className="mx-2 " />
                hello.afrianska.gmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="container col-9 col-lg-7 mt-5 d-none d-lg-inline">
          <ContactCard />
        </div>
        <img src={Map} alt="" className="map my-5" />
      </div>
    </div>
  );
};

export default ContactSection;
