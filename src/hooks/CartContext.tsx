import { background, Box, position, useToast } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useState } from "react";
// import GenericToast from "../components/GenericToast/GenericToast";
// import GenericToast from "../components/GenericToast/GenericToast";

interface Product {
  id?: number;
  nome: string;
  preco: number;
  descricao: string;
  quantidade: number;
}
interface CartContextData {
  cart: Product[];
  addProductToCart: (product: Product) => void;
}

interface CartContextProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within an CartProvider");
  }

  return context;
};

const CartProvider = ({ children }: CartContextProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  // const [exibirToast] = GenericToast()
  const toast = useToast();
  const addProductToCart = ({
    nome,
    preco,
    descricao,
    quantidade,
  }: Product) => {
    const produtoExistente = cart.find((p) => p.nome === nome);

    if (produtoExistente) {
      toast({
        position: "top-left",
        // status: "success",
        isClosable: true,
        duration: 1000,
        render: () => (
          <Box
            color="white"
            p={3}
            bg="green.600"
            borderRadius={"10px"}
            border="2px solid black"
          >
            {`Adcionado mais um ${nome.toLowerCase()}!`}
          </Box>
        ),
      });

      const cartAtualizado = cart.filter((p) => p.nome !== nome);
      setCart([
        ...cartAtualizado,
        {
          nome,
          preco,
          descricao,
          quantidade: produtoExistente.quantidade + 1,
        },
      ]);
    } else {
      toast({
        title: `Adcionado ${nome.toLowerCase()}!`,
        position: "top",
        status: "success",
        isClosable: true,
        duration: 1000,
      });
      setCart((oldCart) => [
        ...oldCart,
        { nome, preco, descricao, quantidade },
      ]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
