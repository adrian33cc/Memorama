import { Container } from "@chakra-ui/react";
import React from "react";
import Cards from "../components/Cards";
import Layout from "../components/Layout/Layout";

function Index() {
  return (
    <Layout >
      <Container maxW={{base:"container.xl", "lg":"container.sm"}}>
        <Cards />
      </Container>
    </Layout>
  );
}

export default Index;
