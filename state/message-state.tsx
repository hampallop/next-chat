import { create } from 'zustand'

type Message = {
  id: string
  user: string
  message: string
}

type MessagesStatus = 'init' | 'fetched'

interface MessageState {
  messages: Array<Message>
  messagesStatus: MessagesStatus
  setMessagesStatus: (messagesStatus: MessagesStatus) => void
  addNewMessage: (messageData: Message) => void
  setMessages: (message: Array<Message>) => void
}

export const useMessageStore = create<MessageState>()((set) => ({
  messages: [],
  messagesStatus: 'init',
  setMessagesStatus: (messagesStatus) => set(() => ({ messagesStatus })),
  addNewMessage: (messageData) =>
    set((state) => ({ messages: [...state.messages, messageData] })),
  setMessages: (messages) => set(() => ({ messages })),
}))
