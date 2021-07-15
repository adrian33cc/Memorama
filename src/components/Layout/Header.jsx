import { Button, Heading, Stack, chakra } from "@chakra-ui/react";
import React from "react";

const ButtonControl = chakra(Button, {
  baseStyle: {
    padding: "2rem 1rem",
    borderRadius: "5px",
    color: "white",
    backgroundColor: "rgba( 255, 87, 34,1)",
    width: "200px",
    fontWeight: 700,
  },
});

function Header() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      backgroundColor="#512DA8"
      alignItems="center"
      padding="2rem"
    >
      <Heading as="h1" color="white">
        Memo-Code
      </Heading>
      <Stack direction="row" spacing="2rem">
        <ButtonControl _hover={{ backgroundColor: "rgba( 255, 87, 34,0.8)" }}>
          Reiniciar
        </ButtonControl>
        <ButtonControl _hover={{ backgroundColor: "rgba( 255, 87, 34,0.8)" }}>
          Nuevo Juego
        </ButtonControl>
      </Stack>
    </Stack>
  );
}

export default Header;
