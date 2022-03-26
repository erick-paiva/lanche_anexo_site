import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import logoLanche from "../../assets/logo_lanche/logo_lanche.svg";
import google from "../../assets/icons/google.svg";
import { InputChakra } from "../../components/InputChakra";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useState } from "react";

export default function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const poli = {
    "clip-path":
      "circle(110% at 50% -49%)"
  };

  const animation = { animation: "mymove 5s infinite" };

  const mostrar = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <Center flexDirection={"column"}>
      <Center bg="blue.100" w="100%" h="200px" sx={poli}>
        <Image src={logoLanche} alt="logo_lanche" sx={animation} />
      </Center>

      <Heading textAlign={"center"} width="90%" mt="10px" fontSize={"25px"}>
        Fazer login com sua conta Anexo!
      </Heading>

      <VStack spacing={4} mt="15px">
        <Flex flexDirection={"column"} alignItems="flex-end" w="100%">
          <InputChakra name="email" placeholder="Email" h="51px" />
          <Text color="blue.300">Criar uma conta</Text>
        </Flex>

        <Flex flexDirection={"column"} alignItems="flex-end">
          <InputChakra
            type={mostrarSenha ? "text" : "password"}
            iconRigth={
              mostrarSenha ? (
                <BsEye color="red" onClick={mostrar} cursor="pointer" />
              ) : (
                <BsEyeSlash color="red" onClick={mostrar} cursor="pointer"  />
              )
            }
            name="senha"
            placeholder="Senha"
            h="51px"
          />
          <Text color="blue.300">Esqueci a senha</Text>
        </Flex>

        <Button bg="blue.200" h="51px" w="100%" color={"white"}>
          Entrar
        </Button>
        <Button
          leftIcon={<Image src={google} mr="15px" />}
          bg="white"
          h="51px"
          w="100%"
          color={"gray.400"}
          fontSize="14px"
          boxShadow={"md"}
          _hover={{"bg": "red"}}
          _active={{"bg": "yellow"}}
        >
          Continuar com Google
        </Button>
      </VStack>
    </Center>
  );
}
