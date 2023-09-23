import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

function Header() {
  const {store}=useContext(BasketContext)
  return (
    <Container
      maxW={"1280px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      py={"20px"}
      borderBottom={"1px solid gray"}
    >
      <Link to={'/'}>
        <Heading size={"lg"}>Products</Heading>
      </Link>
      <Link to={'/Basket'}>
        <Box position={"relative"}>
          <Text
            w={"25px"}
            height={"25px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"150px"}
            background={"red"}
            position={"absolute"}
            top={-3}
            left={4}
          >
            {store?.length}
          </Text>
          <StarIcon w={"30px"} h={"30px"} />
        </Box>
      </Link>
    </Container>
  );
}

export default Header;
