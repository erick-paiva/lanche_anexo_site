import { createContext, ReactNode, useContext, useState } from "react";

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

  const addProductToCart = ({ nome, preco, descricao, quantidade }: Product) => {
    const produtoExistente = cart.find((p) => p.nome === nome);

    if (produtoExistente) {
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
