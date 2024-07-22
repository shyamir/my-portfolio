import Logo from "../../assets/header/logo.svg";
import IconButton from "../Button/IconButton";
import EmailIcon from "../../icons/EmailIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full bg-neutral-bold3x py-4 px-6 fixed z-[20] mx-auto md:px-16">
      <img src={Logo} alt="logo" className="h-8 md:h-9" />

      <div className="flex items-center justify-between w-fit	grid-row gap-4">
        <IconButton
          icon={LinkedinIcon}
          label="Linkedin"
          variant="secondary"
          size="md"
          href="https://www.linkedin.com/in/shyami-abeysekera/"
        />
        <IconButton
          icon={EmailIcon}
          label="Email"
          variant="secondary"
          size="md"
          href="mailto:abeysekera.shyami@gmail.com"
        />
      </div>
    </div>
  );
}

