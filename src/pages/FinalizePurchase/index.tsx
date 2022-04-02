import { Box, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ControlerUser } from "../../components/ControlerUser";
import { HeaderLanche } from "../../components/Header";
interface Props {
  voltar: string;
}
export const FinalizePurchase = () => {
  const voltar = localStorage.getItem("voltar") || "/menu";
  console.log(voltar);
  return (
    <Flex flexDirection={"column"} h="100vh" justifyContent={"space-between"}>
      <HeaderLanche />

      <ControlerUser ordem={[3, 1, 2]} voltar={voltar} selecionado={3} />
    </Flex>
  );
};
