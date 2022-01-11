import logo from "../../Images/logo.png";
import menu from "../../Images/menu_icn.png";

const Navbar = () => {
  return (
    <div className="container-fluid d-flex justify-content-between my-3">
      <div>
        <img src={logo} alt="" />
      </div>

      <div>
        <img src={menu} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
