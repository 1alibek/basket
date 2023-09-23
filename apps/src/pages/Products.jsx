import React from "react";
import { Box, Container, Heading, Text,Card,CardBody,Image, Button } from "@chakra-ui/react";
import '../App';

import axios from "axios";
import { useEffect, useState ,useContext} from "react";
import { BasketContext } from "../context/BasketContext";
function Products() {
  const [state, setState] = useState([]);
const {setBasket}=useContext(BasketContext)
const addToBasket=(post)=>{
setBasket(post)
}
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((result) => {
      setState(result.data.products);
    });
  }, []);
  return (
    <Container maxW={'1280px'}>
      <Heading size={'lg'}>All Products</Heading>
      <Box display={"flex"} flexWrap={"wrap"} gap={5} justifyContent={"center"}py={5}>
        {state.map((post) => {
          return (
              <Card key={post.id} w={200} height={270} mb={5} display={"flex"} gap={10}>
                <CardBody>
                  <Image w={200} height={150} src={post.images[0]} />
                  <Text className="product">{post.title}</Text>
                  <Button onClick={()=>addToBasket(post)}  colorScheme='yellow'mt={2}>add to basket</Button>
                </CardBody>
              </Card>
          );
        })}
      </Box>
    </Container>
  );
}

export default Products;
