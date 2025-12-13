const FooterSocials = ({ link, icon, alt }) => {
  return (
    <a href={link}>
      <img src={icon} alt={alt} />
    </a>
  );
};

export default FooterSocials;
