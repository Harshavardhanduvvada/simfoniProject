import { useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

function HeroSection() {
  const images = [
    "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
    // Add more image URLs here
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: "relative" }}>
      <img src={images[currentImage]} alt="" style={{ maxWidth: "100%" }} />
      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
        }}
      >
        <GrCaretPrevious />
      </button>
      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
        }}
      >
        <GrCaretNext />
      </button>
    </div>
  );
}

export default HeroSection;
