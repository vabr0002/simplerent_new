// src/store/cartStore.js
"use client"; // Only necessary if you're using Next.js app directory

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      // Possible cartStatus values: 'empty', 'checkedOut', 'abandoned'
      cartStatus: null, 
      setEmptyCart: () => set({ cartStatus: "empty" }),
      setCheckedOut: () => set({ cartStatus: "checkedOut" }),
      setAbandoned: () => set({ cartStatus: "abandoned" }),
      resetCartStatus: () => set({ cartStatus: null }),
    }),
    {
      name: "cart-storage", // key in localStorage
    }
  )
);

export default useCartStore;