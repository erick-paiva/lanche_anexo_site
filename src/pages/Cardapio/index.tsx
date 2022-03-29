import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { CardProdutos } from "../../components/CardProdutos";
import { ControlerUser } from "../../components/ControlerUser";
import { HeaderLanche } from "../../components/Header";
import { todosProdutos } from "../../Data/produtos";
import imgDefault from "../../assets/ImagensCategorias/lanches.svg";
import { useCart } from "../../hooks/CartContext";

interface Props {
  categoria: keyof typeof todosProdutos;
}

export const Cardapio = () => {
  const { categoria } = useParams<Props>();

  const { addProductToCart } = useCart();

  return (
    <Flex flexDirection={"column"} h="100vh" justifyContent={"space-between"}>
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
        mb="1px"
      >
        {todosProdutos[categoria].map(({ nome, descricao, preco }) => (
          <Box
            onClick={() =>
              addProductToCart({ nome, descricao, preco, quantidade: 1 })
            }
            key={nome}
          >
            <CardProdutos
              key={`${nome}${descricao}`}
              name={nome}
              img={imgDefault}
              desc={descricao}
              price={preco}
            />
          </Box>
        ))}
      </Grid>

      <ControlerUser />
    </Flex>
  );
};
