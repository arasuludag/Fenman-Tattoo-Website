import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/montserrat/100.css";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `"Montserrat", sans-serif`,
    text: `"Montserrat", sans-serif`,
    button: `"Montserrat", sans-serif`,
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
