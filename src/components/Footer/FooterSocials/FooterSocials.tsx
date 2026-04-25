import { useTranslation } from "react-i18next";
import type { FooterSocialsModel } from "./footerSocialsData";

type FooterSocialsProps = Pick<FooterSocialsModel, "link" | "icon" | "altKey">;

const FooterSocials = ({ link, icon, altKey }: FooterSocialsProps) => {
  const { t } = useTranslation();

  return (
    <a href={link}>
      <img src={icon} alt={t(altKey)} />
    </a>
  );
};

export default FooterSocials;
