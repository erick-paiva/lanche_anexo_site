import { Flex, Text } from "@chakra-ui/react"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useCart } from "../../hooks/CartContext"

export const CartLanche = () => {

    const {cart} = useCart()
    const totalProdutos = cart.reduce((acc, curr) => acc + curr.quantidade, 0)
    return(
        <Flex bg="red" w="64px" h="32px" borderRadius={"8px"} paddingX="10px" alignItems="center" justifyContent={"space-between"}>
            <AiOutlineShoppingCart color="white" size="22px" />
            <Text fontSize={"15px"} color="white">
                {totalProdutos}
            </Text>
        </Flex>
    )
}