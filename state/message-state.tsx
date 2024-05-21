import { create } from 'zustand'

type Message = {
  id: string
  user: string
  message: string
}

type MessagesStatus = 'idle' | 'fetched'

type MessagesState = {
  status: MessagesStatus
  messages: Array<Message>
}

type State = {
  messagesState: MessagesState
}

type Action = {
  setMessagesState: (messagesState: MessagesState) => void
  addNewMessage: (messageData: Message) => void
}

export const useMessageStore = create<State & Action>()((set) => ({
  messagesState: { status: 'idle', messages: [] },
  setMessagesState: (messagesState) => set({ messagesState }),
  addNewMessage: (messageData) =>
    set((state) => ({
      messagesState: {
        ...state.messagesState,
        messages: [...state.messagesState.messages, messageData],
      },
    })),
}))
