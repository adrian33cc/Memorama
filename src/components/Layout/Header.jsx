import { Button, Heading, Stack, chakra } from "@chakra-ui/react";
import React from "react";

/* const ButtonControl = chakra(Button, {
  baseStyle: {
    padding: "2rem 1rem",
    borderRadius: "5px",
    color: "white",
    backgroundColor: "rgba( 255, 87, 34,1)",
    fontWeight: 700,
  },
}); */

function Header() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent="space-between"
      backgroundColor="#512DA8"
      alignItems="center"
      padding="20px"
      boxShadow="md"
      
    >
      <Heading as="h1"  color="white">
        Memo-Code
      </Heading>
      <Stack direction="row" spacing={4}>
        <Button
          backgroundColor="rgba( 255, 87, 34,1)"
          color="white"
          size="md"
          _hover={{ backgroundColor: "rgba( 255, 87, 34,0.8)" }}
        >
          Reiniciar
        </Button>
        <Button
          backgroundColor="rgba( 255, 87, 34,1)"
          color="white"
          size="md"
          _hover={{ backgroundColor: "rgba( 255, 87, 34,0.8)" }}
        >
          Nuevo Juego
        </Button>
      </Stack>
    </Stack>
  );
}

export default Header;
