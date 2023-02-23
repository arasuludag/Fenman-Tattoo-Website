import { Container, Stack, Heading, Text, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import AboutImage from "../assets/AboutImage.jpg";

export default function CallToActionWithVideo() {
  const { t } = useTranslation();
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 150 }}
        py={{ base: 50 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={100}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            {t("About.Title")}
          </Heading>
          <Text color={"gray.500"}>{t("About.Bio")}</Text>
        </Stack>
        <Image
          alt="Hero Image"
          fit="contain"
          align="center"
          w="336px"
          h="420px"
          style={{ borderRadius: "20px" }}
          src={AboutImage}
        />
      </Stack>
    </Container>
  );
}
