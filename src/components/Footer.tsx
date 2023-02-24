import { Container, Stack, Text } from "@chakra-ui/react";

export default function SmallWithSocial() {
  const date = new Date();

  return (
    <Container
      as={Stack}
      maxW={"6xl"}
      py={4}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
      <Text fontSize="sm">Kadıköy / İstanbul</Text>
      <Text fontSize="sm">
        © {date.getFullYear()} Nagehan Fenman. All rights reserved.
      </Text>
    </Container>
  );
}
