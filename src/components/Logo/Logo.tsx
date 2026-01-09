// React
import { Link } from "react-router-dom";

// Assets
import { logo } from "@/assets/img";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Логотип" />
    </Link>
  );
};

export default Logo;
