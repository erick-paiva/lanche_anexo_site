import { Flex, Text } from "@chakra-ui/react"
import {AiOutlineShoppingCart} from "react-icons/ai"

export const CartLanche = () => {

    return(
        <Flex bg="red" w="64px" h="32px" borderRadius={"8px"} paddingX="10px" alignItems="center" justifyContent={"space-between"}>
            <AiOutlineShoppingCart color="white" size="22px" />
            <Text fontSize={"15px"} color="white">
                0
            </Text>
        </Flex>
    )
}