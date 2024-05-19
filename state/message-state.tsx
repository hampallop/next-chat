import { create } from 'zustand'
import { originMessages } from '@/lib/data'

type Message = {
  user: string
  message: string
}

interface MessageState {
  messages: Array<Message>
  messageInput: string
  updateMessageInput: (messageInput: string) => void
  clearMessageInput: () => void
  addNewMessage: (messageData: Message) => void
}

export const useMessageStore = create<MessageState>()((set) => ({
  messages: originMessages,
  messageInput: '',
  updateMessageInput: (messageInput) => set(() => ({ messageInput })),
  clearMessageInput: () => set(() => ({ messageInput: '' })),
  addNewMessage: (messageData) =>
    set((state) => ({ messages: [...state.messages, messageData] })),
}))
