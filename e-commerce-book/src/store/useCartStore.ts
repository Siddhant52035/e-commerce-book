import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  pdf:string;
  desc:string;
  
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
      // You can handle this however you want — toast, alert, etc.
      console.log("Item already exists in cart");
      return;
    } else {
      set({ items: [...get().items, item] });
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
