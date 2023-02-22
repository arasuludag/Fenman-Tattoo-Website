import {
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
  Select,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { i18n } = useTranslation();

  return (
    <Box px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Select
              variant="filled"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
            </Select>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
