import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { CardCategory } from "../../components/CardCategory";
import { ControlerUser } from "../../components/ControlerUser";
import { HeaderLanche } from "../../components/Header";
import {images} from "../../Data/imagensCategorias";

export const MenuCategorias = () => {

  
  return (
    <Flex h="100vh" flexDirection={"column"} justifyContent="space-between" >
      <HeaderLanche />
      <Grid
        templateColumns="repeat(auto-fill, minmax(120px, 1fr))"
        gridGap="20px 0"
        w="100%"
        h="100%"
        paddingY={"20px"}
        justifyItems="center"
        overflowY={"scroll"}
        paddingX="20px"
        mt="1px"

      >
        {images.map(({name, img}) => (
            <CardCategory key={name} name={name} img={img} />
        ))}
      </Grid>
      <ControlerUser />
    </Flex>
  );
};
