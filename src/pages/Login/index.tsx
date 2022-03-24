import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import logoLanche from "../../assets/logo_lanche/logo_lanche.svg";

export default function Login() {
  return (
    <Center flexDirection={"column"}>
      <Center bg="secondary" w="100%">
        <Image src={logoLanche} alt="logo_lanche" />
      </Center>

        <Heading textAlign={"center"} width="90%" mt="10px">Fazer login com sua conta Anexo!</Heading>

    </Center>
  );
}
