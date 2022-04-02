import { Box, Center, Flex, Image, Text, VStack } from "@chakra-ui/react";

interface Props {
  name: string;
  price: number;
  desc: string;
  img: string;
}

export const CardProdutos = ({ img, name, price, desc = "" }: Props) => {
  const priceFormated = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });


  const descFormated = desc.length > 60 ? desc.slice(0, 60) + "..." : desc;
  return (
    <Box w="120px" bg="white" borderRadius={"6px"} boxShadow="lg">
      <Center as="figure">
        <Image src={img} alt={name} boxSize="85px" />
      </Center>
      <VStack spacing={1} alignItems={"flex-start"} padding="5px 10px" minH="50px" maxH={"100px"} boxSizing="content-box">
        <Text fontWeight={"bold"} fontSize="10px">
          {name}
        </Text>
        {desc ? <Text whiteSpace={"normal"} fontSize={"9px"} color="gray.500" fontWeight={"semibold"} >{descFormated}</Text> : <></>}
        <Text fontSize={"10px"} color="blue.300" fontWeight={"semibold"} >{priceFormated}</Text>
      </VStack>
    </Box>
  );
};
