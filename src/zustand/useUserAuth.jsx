import { create } from 'zustand'
import { persist, createJSONStorage } from "zustand/middleware"

let store = (set, get) => ({
    isLoggedIn: false,
    userLoggedin: (value) => set({ isLoggedIn: value })
})

store = persist(store, {
    name: "userAuthDetails",
    storage: createJSONStorage(() => localStorage)
})

export const useUserAuth = create(store)