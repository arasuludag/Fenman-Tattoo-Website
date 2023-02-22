import { Container, Wrap } from "@chakra-ui/react";
import Swiper from "./Swiper/Swiper";

export default function CallToActionWithVideo() {
  return (
    <Container maxW={"7xl"}>
      <Wrap
        margin={"50px 0px"}
        spacing="80px"
        justify="space-around"
        align="center"
      >
        <Swiper />
        <iframe
          src="https://instagram.com/nagehan.tattoos/embed"
          width="350"
          height="420"
          style={{ borderRadius: "20px", overflow: "hidden" }}
          title="Nagehan Fenman Instagram"
        ></iframe>
      </Wrap>
    </Container>
  );
}
