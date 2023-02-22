import { Flex, Container, Heading, Stack } from "@chakra-ui/react";
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
        py={{ base: 50 }}
      >
        <Heading
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          fontWeight={100}
        >
          {t("Company Name")}
        </Heading>

        <img width="400px" src={HeroImage} />
      </Stack>
    </Container>
  );
}
