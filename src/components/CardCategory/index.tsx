import { Box, Center, Flex, Image } from "@chakra-ui/react";
import ImageDefault from "../../assets/hamburguer_real.png";

export const CardCategory = () => {
  return (
    <Center
      h="110px"
      w="140px"
      alignItems={"center"}
      bg="gray.100"
      borderRadius={"8px"}
    >
      <Center
        w="100px"
        h="40px"
        bg="red.100"
        borderRadius={"10px"}
        alignItems="flex-end"
        mt="20px"
      >
        <Image src={ImageDefault} h="72px" />
      </Center>
    </Center>
  );
};
