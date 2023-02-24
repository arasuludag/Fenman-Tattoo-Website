import { Image, Container, Heading, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import HeroImage from "../assets/RoseWBirdDrawing.png";

export default function CallToActionWithIllustration() {
  const { t } = useTranslation();
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 28 }}
        margin="75px 0px 150px 0px"
      >
        <Heading
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          fontWeight={100}
        >
          {t("Company Name")}
        </Heading>

        <Image width="400px" src={HeroImage} alt="Nagehan Fenman Kuş Çizimi" />
      </Stack>
    </Container>
  );
}
