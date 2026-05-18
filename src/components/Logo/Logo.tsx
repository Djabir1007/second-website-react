import { Link } from "react-router-dom";

import { logo, lightLogo } from "@/assets/img";
import { useTranslation } from "react-i18next";
import type { Theme } from "@/types/theme";

type LogoProps = {
  theme: Theme;
};

const Logo = ({ theme }: LogoProps) => {
  const { t } = useTranslation();

  return (
    <Link to="/">
      {theme === "light" ? (
        <img src={logo} alt={t("logo.alt")} />
      ) : (
        <img src={lightLogo} alt={t("logo.alt")} />
      )}
    </Link>
  );
};

export default Logo;
