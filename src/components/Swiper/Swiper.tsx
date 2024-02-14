// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./swiper.css";

function getImageUrl(name: string) {
  return new URL(`../../assets/Tattoo Samples/${name}.jpg`, import.meta.url)
    .href;
}

let images: string[] = [];
for (let i = 1; i < 20; i++) {
  images.push(getImageUrl(i.toString()));
}

// import required modules
import { EffectCards } from "swiper";

export default function Cards() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {images.map((imageSRC, index) => (
        <SwiperSlide key={index}>
          <Image
            src={imageSRC}
            width="100%"
            height="100%"
            objectFit="fill"
            alt="Örnek fotoğraflar"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
