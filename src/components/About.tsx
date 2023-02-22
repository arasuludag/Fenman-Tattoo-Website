import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import AboutImage from "../assets/AboutImage.jpg";

export default function CallToActionWithVideo() {
  const { t } = useTranslation();
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 50 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            {t("About.Title")}
          </Heading>
          <Text color={"gray.500"}>{t("About.Bio")}</Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"600px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={AboutImage}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
