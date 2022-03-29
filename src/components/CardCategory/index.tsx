import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
interface Props {
  img: string;
  name?: string;
}

export const CardCategory = ({ img, name="/menu"}: Props) => {
  const history = useHistory();
  return (
    <Center
      h="110px"
      w="130px"
      alignItems={"center"}
      bg="gray.100"
      borderRadius={"8px"}
      onClick={() => history.push(`cardapio/${name.toLowerCase()}`)}
    >
      <Center
        w="100px"
        h="40px"
        bg="red.100"
        borderRadius={"10px"}
        alignItems="flex-end"
        mt="20px"
      >
        <Image
          src={img}
          alt={name}
          h="72px"
          transition={"filter .5s, -webkit-filter .5s;"}
        />
      </Center>
    </Center>
  );
};
