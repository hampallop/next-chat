import { create } from 'zustand'

interface UserState {
  user: string | null
  logout: () => void
  getUser: () => void
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('username')
    }
    set({ user: null })
  },
  getUser: () => {
    if (typeof window !== 'undefined') {
      let username = localStorage.getItem('username')

      while (!username) {
        username = prompt('Please enter your username:')
      }

      if (username) {
        localStorage.setItem('username', username)
        set({ user: username })
      }
    }
  },
}))
