import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "./index.css";

import turkish from "./localization/turkish.json";
import english from "./localization/english.json";

i18n.use(initReactI18next).init({
  resources: {
    en: english,
    tr: turkish,
  },
  lng: "tr", // if you're using a language detector, do not define the lng option
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
