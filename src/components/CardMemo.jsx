import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function CardMemo(props) {
  const { card } = props;

  const [turn, setTurn] = useState(false);

  useEffect(() => {
    console.log('Volteando carta');
    setTurn(!turn)
  }, [turn])

  const clickCard = (e) => {
    console.log(e);
    console.log(turn);
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
      cursor="pointer"
      _hover={{
        transform: "scale(1.1)",
        transition: "0.4s",
        border: "2px solid rgba( 255, 87, 34,1)",
      }}
      onClick={clickCard}
    >
      <Image width="100%" src={card.src} alt="Imagen Memo" />
    </Box>
  );
}

export default CardMemo;
