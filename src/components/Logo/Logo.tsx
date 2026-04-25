import { Link } from "react-router-dom";

import { logo } from "@/assets/img";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();

  return (
    <Link to="/">
      <img src={logo} alt={t("logo.alt")} />
    </Link>
  );
};

export default Logo;
