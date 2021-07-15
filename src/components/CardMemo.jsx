import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";

function CardMemo(props) {
  const { card } = props;

  const [turn, setTurn] = useState(false);

  const clickCard = (e) => {
    console.log(e);
  };

  return (
    <Box
      boxShadow="dark-lg"
      maxWidth={{ base: "250px", md: "150px" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="10px"
      backgroundColor="rgba( 255, 87, 34,0.5)"
      borderRadius="md"
      onClick={clickCard}
      cursor="pointer"
      _hover={{
        transform: "scale(1.1)",
        transition: "0.4s",
        border: "2px solid rgba( 255, 87, 34,1)",
      }}
    >
      <Image width="100%" src={card.src} alt="Imagen Memo" />
    </Box>
  );
}

export default CardMemo;
