import {
  Container,
  Heading,
  Stack,
  Wrap,
  Image,
  Text,
  Button,
  Link,
  Box,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import BookingImage from "../assets/RoseDrawing.png";
import { EmailIcon } from "@chakra-ui/icons";

export default function CallToActionWithVideo() {
  const { t } = useTranslation();
  return (
    <Container maxW={"7xl"}>
      <Wrap margin={"150px 0px"} spacing="80px" align="center">
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={100}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            {t("Booking.Title")}
          </Heading>
          <Text>{t("Booking.Info")}</Text>
          <Box textAlign="center">
            <Link href="mailto:nagehanfenman@gmail.com" isExternal>
              <Button
                rounded="lg"
                variant="ghost"
                colorScheme="cyan"
                leftIcon={<EmailIcon />}
              >
                nagehanfenman@gmail.com
              </Button>
            </Link>
          </Box>
        </Stack>
        <Image
          alt="Gül Çizimi"
          fit="contain"
          align="center"
          w="336px"
          h="500px"
          src={BookingImage}
        />
      </Wrap>
    </Container>
  );
}
