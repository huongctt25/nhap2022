import Lightbox from "react-image-lightbox";
import { useState } from "react";
import "react-image-lightbox/style.css";
import SlideShow from "./slideshow";

const Home = () => {
  // const images = [
  //   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg",
  //   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chow-chow-portrait-royalty-free-image-1652926953.jpg",
  //   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/happy-dog-outdoors-royalty-free-image-1652927740.jpg",
  //   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lonely-pug-royalty-free-image-1652974264.jpg?crop=0.447xw:1.00xh;0.355xw,0&resize=980:*",
  // ];
  const images = [
    "//placekitten.com/300/300",
    "//placekitten.com/800/1200",
    "//placekitten.com/1500/1500",
    "//placekitten.com/300/306",
  ];
  const [photoIndex, setPhotoIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  console.log("home");
  const handleClick = () => {
    setOpenModal(true);
  };
  const a = [0, 1, 2, 3, 4, 5];
  const imageClick = (index) => {
    setPhotoIndex(a[index]);
    if (!openModal) {
      setOpenModal(true);
    }
  };

  const imgArray = images.map((image, index) => {
    return (
      <img
        src={image}
        width="300px"
        key={index}
        onClick={() => imageClick(index)}
      />
    );
  });

  return (
    <div className="container">
      <div className="center">
        <h1>Home</h1>
        <div className="row">{imgArray}</div>
        <button onClick={handleClick}>Hello</button>
        <SlideShow />
        {openModal && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setOpenModal(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + images.length + 1) % images.length)
            }
          />
        )}
      </div>
    </div>
  );
};

export default Home;
