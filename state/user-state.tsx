import { create } from 'zustand'

interface UserState {
  user: string | null
  logout: () => void
  getUser: () => void
}

export const useUserStore = create<UserState>()((set) => ({
  user: localStorage.getItem('username') || null,
  logout: () => {
    localStorage.removeItem('username')
    set({ user: null })
  },
  getUser: () => {
    let username = localStorage.getItem('username')

    if (!username) {
      while (!username) {
        username = prompt('Please enter your username:')
        if (username) {
          localStorage.setItem('username', username)
          set({ user: username })
        }
      }
    }
  },
}))
