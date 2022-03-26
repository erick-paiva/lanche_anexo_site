import { Flex } from "@chakra-ui/react";
import {AiOutlineShop, AiOutlineSearch, AiOutlineUser} from "react-icons/ai"


export const ControlerUser = () => {
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
      <AiOutlineShop  />
      <AiOutlineSearch />
      <AiOutlineUser  />
    </Flex>
  );
};
