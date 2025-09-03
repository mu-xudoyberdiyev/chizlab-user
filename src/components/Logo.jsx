import Image from "next/image";
import Link from "next/link";
import HeaderLogo from "/public/dark-logo.svg";
import FooterLogo from "/public/white-logo.svg";

function Logo({ type }) {
  let currentImage = null;
  switch (type) {
    case "header":
      currentImage = HeaderLogo;
      break;
    case "footer":
      currentImage = FooterLogo;
      break;
    default:
      currentImage = HeaderLogo;
  }
  return (
    <Link
      className="shrink-0 flex hover:opacity-80 active:opacity-60 transition-opacity"
      tabIndex="-1"
      href="/"
    >
      <Image
        className="lg:w-[220px] lg:h-[50px] w-[170px] h-[55px]"
        src={currentImage}
        alt="chizlab.uz logo"
        priority
        width="220"
        height="50"
      />
    </Link>
  );
}

export default Logo;
