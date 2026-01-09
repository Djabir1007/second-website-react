import { Link } from "react-router-dom";
import { logo } from "@/assets/img";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Логотип" />
    </Link>
  );
};

export default Logo;
