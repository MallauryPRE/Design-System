import image8 from "./assets/image8.svg";
import image12 from "./assets/image12.svg";
import image14 from "./assets/image14.svg";
import image30 from "./assets/image30.svg";
import image33 from "./assets/image33.svg";

const SvgGallery = () => {
  return (
    <div className="svg-gallery">
      <div className="svg-container">
        <img src={image8} alt="pixel art" />
        <img src={image12} alt="pixel art" />
        <img src={image14} alt="pixel art" />
        <img src={image30} alt="pixel art" />
        <img src={image33} alt="pixel art" />
      </div>
    </div>
  );
};

export default SvgGallery;
