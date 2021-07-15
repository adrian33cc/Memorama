import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/Index";

const theme = extendTheme({
  fonts: {
    body: "Open Sans",
  },

  styles: {
    global: {
      body: {
        background:"linear-gradient(0deg, rgba(29,46,108,1) 0%, rgba(90,45,168,1) 39%, rgba(147,81,208,1) 100%)",

        //Deja fijo el color gradiente
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      },
      h1: { fontSize: "4rem" },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
