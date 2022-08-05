import { createContext, useContext } from 'react';

export const CartContext = createContext();

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (ctx == null) {
    throw new Error('useMyContext must be used inside a ContextProvider.');
  }
  return ctx;
}
