const ContactCard = () => {
  return (
    <div className="Card2 bg-light d-flex justify-content-center my-5 py-5  ">
      <div className=" ">
        <h5 className="fw-bold text-primary mb-5">SEND US MESSAGE</h5>
        <div>
          <h6 className="fw-bold text-primary">Full Name</h6>
          <input type="text" placeholder="Your Name" className="py-2 px-5 " />
        </div>

        <div className="mt-3">
          <h6 className="fw-bold text-primary">Email</h6>
          <input type="text" placeholder=" Your Email " className="py-2 px-5" />
        </div>

        <div className="mt-3 mb-5">
          <h6 className="fw-bold text-primary">Message</h6>
          <textarea
            type="text"
            placeholder=" Your Message"
            className="py-5 px-5"
          />
        </div>

        <div className="d-flex justify-content-center">
          <button className="px-5 py-3 col-12 text-light">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
