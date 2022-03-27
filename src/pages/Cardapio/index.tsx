import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { CardProdutos } from "../../components/CardProdutos";
import { ControlerUser } from "../../components/ControlerUser";
import { HeaderLanche } from "../../components/Header";
import {todosProdutos} from "../../Data/produtos";
import imgDefault from "../../assets/ImagensCategorias/lanches.svg";

interface Props {
    categoria: keyof typeof todosProdutos;
}

export const Cardapio = () => {
    const {categoria} = useParams<Props>();
    
    console.log(todosProdutos[categoria] )
  return (
    <Flex flexDirection={"column"} h="100vh" justifyContent={"space-between"}>
      <HeaderLanche />

      
     

      <Grid
        templateColumns="repeat(auto-fill, minmax(120px, 1fr))"
        gridGap="20px 0"
        w="100%"
        paddingY={"20px"}
        justifyItems="center"
        overflowY={"scroll"}
        paddingX="20px"
        mt="1px"
      >
        {todosProdutos[categoria].map(({nome, descricao, preco}) => (
            <CardProdutos key={`${nome}${descricao}`} name={nome} img={imgDefault} desc={descricao} price = {preco} />
        ))}
      </Grid>

      <ControlerUser />
    </Flex>
  );
};
