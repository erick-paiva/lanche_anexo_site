import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { CardProdutos } from "../../components/CardProdutos";
import { ControlerUser } from "../../components/ControlerUser";
import { HeaderLanche } from "../../components/Header";
import { todosProdutos } from "../../Data/produtos";
import imgDefault from "../../assets/ImagensCategorias/lanches.svg";
import { useCart } from "../../hooks/CartContext";
import { useEffect, useRef } from "react";


interface Props {
  categoria: keyof typeof todosProdutos;
}

export const Cardapio = () => {
  const { categoria } = useParams<Props>();
  // const test= useRef<HTMLDivElement>({} as HTMLDivElement);
  const { addProductToCart } = useCart();


  // const scrollHandler = () => {
  //   console.log(test.current.getBoundingClientRect());
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHandler, true);
  //   return () => {
  //     window.removeEventListener("scroll", scrollHandler, true);
  //   };
  // }, []);

  

  return (
    <Flex flexDirection={"column"} h="100vh" justifyContent={"space-between"}>
      <HeaderLanche voltar={`/cardapio/${categoria}`} />

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
            // ref={test}
            cursor="pointer"
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

      <ControlerUser ordem={[3,1,2]} selecionado={3} />
    </Flex>
  );
};
