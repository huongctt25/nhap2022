/* eslint-disable jsx-a11y/alt-text */
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const SlideShow = () => {
  const images = [
    "//placekitten.com/300/300",
    "//placekitten.com/800/1200",
    "//placekitten.com/1500/1500",
    "//placekitten.com/300/306",
  ];

  return (
    <div className="slide-container container">
      <Slide>
        {images.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <img src={slideImage} width="100%" key={index} className="center" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
