import { Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { BsBagCheck, BsGearWide } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { useHistory } from "react-router-dom";

export const PopoverUser = () => {

    const history = useHistory();
  const itens = [
    {
      itemName: "Meus pedidos",
      icon: <BsBagCheck size={"24px"} />,
      funcao: () => {
        history.push("/finalizar-compras");
      },
    },
    {
      itemName: "Configurações",
      icon: <BsGearWide size={"24px"} />,
      funcao: () => {
        console.log("Configurações");
      },
    },
    {
      itemName: "Sair",
      icon: <BiLogIn size={"27px"} />,
      funcao: () => {
        history.push("/");
      },
    },
  ];

  return (
    <Menu isLazy>
      <MenuButton display={"flex"} alignItems="center">
        <AiOutlineUser />
      </MenuButton>
      <MenuList>
        {itens.map(({ itemName, icon, funcao }) => (
          <MenuItem key={itemName}>
            <Flex
              alignItems={"center"}
              justifyContent="space-between"
              fontSize={"18px"}
              color={"blue.200"}
              w="100%"
              onClick={funcao}
            >
              {itemName} {icon}
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
