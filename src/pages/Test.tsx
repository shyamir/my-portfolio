import CompoundButton from "../components/Button/CompoundButton";
import IconButton from "../components/Button/IconButton";
import ToggleCard from "../components/Card/ToggleCard";
import BackIcon from "../icons/BackIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import Layout1On from "../assets/project1/layout1-on.png";
import Layout1Off from "../assets/project1/layout1-off.png";

function Test() {
  return (
    <div className="pt-20">
      <CompoundButton
        icon={BackIcon}
        children="Hello"
        label="Linkedin"
        variant="secondary"
        size="md"
        href="/"
      />

      <IconButton
        icon={LinkedinIcon}
        label="Linkedin"
        variant="secondary"
        size="md"
        href="https://www.linkedin.com/in/shyami-abeysekera/"
      />

      <div className="w-1/2">
        <ToggleCard image1={Layout1Off} image2={Layout1On} text="Toggle"/>
      </div>
    </div>
  );
}

export default Test;
