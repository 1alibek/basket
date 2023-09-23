import React from "react";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  CardBody,
  Image,
  Button,
} from "@chakra-ui/react";

const Basket = () => {
  const { store, setStore } = useContext(BasketContext);
  const onDelete = () => {
    localStorage.removeItem("basket-post");
    setStore([]);
  };
  const deleteone=(id)=>{
    const newData =store.filter((item)=>item.id!==id)
    setStore(newData)
  }
  return (
    <Container maxW={"1280px"}>
      <Box>
        {!store.length && (
          <Heading textAlign={"center"} p={5}>
            Tovar yoq
          </Heading>
        )}
        {store.map((item) => (
          <Card
            w={200}
            height={300}
            mb={5}
            display={"flex"}
            alignItems={"center"}
            gap={10}
            key={item.id}
          >
            <CardBody>
              <Image w={200} height={150} src={item.images[0]} />
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>${item.price}</Text>
              <Button colorScheme={"green"} mt={1} onClick={()=>deleteone(item.id)}>
                Delete
              </Button>
            </CardBody>
          </Card>
        ))}
        {
          store.length &&
        (<Button onClick={onDelete} colorScheme={"green"} mt={1}>
        Delete
      </Button>)}
        
      </Box>
    </Container>
  );
};

export default Basket;
