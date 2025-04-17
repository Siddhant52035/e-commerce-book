import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id?: string;
  name?: string;
  email?: string;
}

interface UserState {
  user: User | null;
  isProfileUpdated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateProfile: (val: boolean) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isProfileUpdated: false,

      login: (user) => set({ user }),
      logout: () => set({ user: null }),
      updateProfile: (val) => set({ isProfileUpdated: val }),
    }),
    {
      name: "user-storage", // localStorage key
    }
  )
);

export default useUserStore;
