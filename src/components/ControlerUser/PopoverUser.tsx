import { Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { BsBagCheck, BsGearWide } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

export const PopoverUser = () => {
  const itens = [
    {
      itemName: "Meus pedidos",
      icon: <BsBagCheck size={"24px"} />,
      funcao: () => {
        console.log("Meus pedidos");
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
        console.log("Sair");
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
