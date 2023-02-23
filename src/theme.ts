import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/montserrat/100.css";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `"Montserrat", sans-serif`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("#FFFFFF", "#000000")(props),
      },
    }),
  },
});

export default theme;
