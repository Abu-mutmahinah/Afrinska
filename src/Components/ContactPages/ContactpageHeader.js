import Navbar from "../Navbar/Navbar";
const ContactHeader = () => {
  return (
    <div>
      {" "}
      <div>
        <div className="px-4">
          <Navbar />
        </div>

        <div className="blogafrianska py-0 py-xl-5  container">
          <h1 className="pb-3 pt-2 pt-xl-0 fw-bold text-light text-center">
            Contact Us
          </h1>
          <p className="pb-4 pb-xl-1 text-light px-1 px-lg-0 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            nisi iure minima praesentium at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
