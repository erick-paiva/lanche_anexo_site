import { useState } from "react";
import {
  AiOutlineShop,
  AiOutlineSearch,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { useHistory } from "react-router-dom";
// import {BsBagCheck} from "react-icons/bs";
import { PopoverUser } from "./PopoverUser";
import { Box, Flex } from "@chakra-ui/react";


interface Props {
  ordem?: number[];
  voltar?: string;
  selecionado?: number;
}

export const ControlerUser = ({
  ordem = [0, 1, 2],
  voltar = "/menu",
  selecionado = 0,
}: Props) => {
  const history = useHistory();

  // const popover = 


  const [ordens] = useState([
    <AiOutlineShop />,
    <AiOutlineSearch />,
    <PopoverUser />,
    <AiOutlineArrowLeft onClick={() => history.push(voltar)} />,
  ]);

  return (
    <Flex
      borderTop={"0.5px solid #717171"}
      paddingX="12%"
      h="50px"
      alignItems={"center"}
      justifyContent="space-between"
      color={"gray.500"}
      fontSize="24px"
    >
      {ordem.map((index) => {
        return selecionado === index ? (
          <Box
            key={`${index}${Math.random()}`}
            fontWeight="extrabold"
            color={"black"}
          >
            {ordens[index]}
          </Box>
        ) : (
          <Box key={`${index}${Math.random()}`}>{ordens[index]}</Box>
        );
      })}
    </Flex>
  );
};
