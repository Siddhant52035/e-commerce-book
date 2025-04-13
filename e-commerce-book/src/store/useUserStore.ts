import { create } from 'zustand';

interface User {
  id?: string;
  name?: string;
  email?: string;
  // add other user fields as needed
}

interface UserState {
  user: User | null;
  isProfileUpdated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateProfile: (val: boolean) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  isProfileUpdated: false,

  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  updateProfile: (val) => set({ isProfileUpdated: val }),
}));

export default useUserStore;
