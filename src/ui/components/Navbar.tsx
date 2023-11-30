import logo from "../../assets/images/logo.png";
import aiImage from "../../assets/images/ai-logo.png";
import avatar from "../../assets/images/avatar.png";
const Navbar = () => {
  return (
    <header className="bg-[#E8ECF1] w-full flex justify-between items-center py-5 px-10 md:px-20">
      <div>
        <img src={logo} alt="logo image" />
      </div>
      <nav className="hidden lg:flex items-center justify-center">
        <ul className="flex justify-center items-center space-x-10 font-semibold">
          <li>
            <img src={aiImage} alt="ai-image" />
          </li>
          <li>
            <a href="#">Lists</a>
          </li>{" "}
          <li>
            <a href="#">Gift Exchange</a>
          </li>{" "}
          <li>
            <a href="#">Shop</a>
          </li>{" "}
          <li>
            <a href="#">Occasions</a>
          </li>{" "}
          <li>
            <a href="#">Ecards</a>
          </li>{" "}
          <li>
            <a href="#">Blog</a>
          </li>{" "}
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-between items-center gap-2">
        <span className="font-semibold">Jane Smith</span>
        <img src={avatar} alt="avatar image" />
      </div>
    </header>
  );
};

export default Navbar;
