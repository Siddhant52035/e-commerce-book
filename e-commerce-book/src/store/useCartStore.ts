// store/useCartStore.ts
import { StaticImageData } from "next/image";
import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image:string;
    desc:string;
  // add any other fields you need
};

type CartState = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (item) => {
    const existingItem = get().items.find((i) => i.id === item.id);
    if (existingItem) {
      set({
        items: get().items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({ items: [...get().items, { ...item, quantity: 1 }] });
    }
  },
  removeFromCart: (id) =>
    set({ items: get().items.filter((item) => item.id !== id) }),
  updateQuantity: (id, quantity) =>
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    }),
  clearCart: () => set({ items: [] }),
}));
