import { Flex, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import logoLanche from "../../assets/logo_lanche/logo_lanche.svg";
import { CartLanche } from "../Cart";

export const HeaderLanche = () => {

  

  return (
    <Flex
      borderBottom={"0.5px solid #717171"}
      paddingX="10%"
      h="76px"
      alignItems={"center"}
      justifyContent="space-between"
    >
      <Image src={logoLanche} alt="logo_lanche" h="60px" />
      <CartLanche />
    </Flex>
  );
};
