import type { FooterSocialsModel } from "./footerSocialsData";

type FooterSocialsProps = Pick<FooterSocialsModel, "link" | "icon" | "alt">;

const FooterSocials = ({ link, icon, alt }: FooterSocialsProps) => {
  return (
    <a href={link}>
      <img src={icon} alt={alt} />
    </a>
  );
};

export default FooterSocials;
