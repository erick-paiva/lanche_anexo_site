import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../theme/theme";
import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <ChakraProvider resetCSS theme={theme}>
      <CartProvider>{children}</CartProvider>
    </ChakraProvider>
  </AuthProvider>
);
