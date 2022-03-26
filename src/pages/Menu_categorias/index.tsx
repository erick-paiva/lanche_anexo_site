import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { CardCategory } from "../../components/CardCategory";
import { ControlerUser } from "../../components/ControlerUser";
import { HeaderLanche } from "../../components/Header";

export const MenuCategorias = () => {
  return (
    <Flex h="100vh" flexDirection={"column"} justifyContent="space-between" >
      <HeaderLanche />
      <Grid
        templateColumns="repeat(auto-fill, minmax(120px, 1fr))"
        gridGap="20px 0"
        w="100%"
        paddingY={"20px"}
        justifyItems="center"
      >
        {[1, 2, 3, 4, 5, 6].map(() => (
            <CardCategory />
        ))}
      </Grid>
      <ControlerUser />
    </Flex>
  );
};
