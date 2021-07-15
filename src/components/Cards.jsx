import { Grid, Heading, Stack } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import CardMemo from "./CardMemo";
import { cards } from "../api/memorama";

function Cards(props) {
  const [loadCards, setLoadCards] = useState([])

  useEffect(() => {
      const barajar = () => {
        const orden = () => Math.random()  - 0.5;
        cards.sort(orden)
      }
      barajar();
      setLoadCards(cards)
  }, [])

  return (
    <>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="4"
        marginTop="2em"
        justifyItems="center"
      >
        {loadCards.map((card) => (
          <CardMemo card={card} key={card.id} />
        ))}
      </Grid>
      <Stack marginTop='10px' direction='row' justifyContent='space-between'>
        <Heading as='h2' color='white'>Errores:</Heading>
        <Heading as='h2' color='white'>Nivel:</Heading>
      </Stack>
    </>
  );
}

export default Cards;
