import { create } from 'zustand'
import { originMessages } from '@/lib/data'

type Message = {
  id: string
  user: string
  message: string
}

type MessagesStatus = 'init' | 'fetched'

interface MessageState {
  messages: Array<Message>
  messageInput: string
  messagesStatus: MessagesStatus
  setMessagesStatus: (messagesStatus: MessagesStatus) => void
  updateMessageInput: (messageInput: string) => void
  clearMessageInput: () => void
  addNewMessage: (messageData: Message) => void
  setMessages: (message: Array<Message>) => void
}

export const useMessageStore = create<MessageState>()((set) => ({
  // messages: originMessages,
  messages: [],
  messageInput: '',
  messagesStatus: 'init',
  setMessagesStatus: (messagesStatus) => set(() => ({ messagesStatus })),
  updateMessageInput: (messageInput) => set(() => ({ messageInput })),
  clearMessageInput: () => set(() => ({ messageInput: '' })),
  addNewMessage: (messageData) =>
    set((state) => ({ messages: [...state.messages, messageData] })),
  setMessages: (messages) => set(() => ({ messages })),
}))
