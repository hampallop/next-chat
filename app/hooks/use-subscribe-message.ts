import * as React from 'react'
import { useMessageStore } from '@/state/message-state'
import { createClient } from '@/lib/supabase/client'

export function useSubscribeMessage() {
  const { messages, addNewMessage } = useMessageStore()
  const supabase = createClient()

  React.useEffect(() => {
    const channel = supabase
      .channel('chat-room')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          if (payload.new) {
            const { id, message, user } = payload.new
            const sameMessage = messages.find((message) => message.id === id)
            if (!sameMessage) {
              addNewMessage({ id, user, message })
            }
          }
        },
      )
      .subscribe()

    return () => {
      channel.unsubscribe()
    }
  }, [addNewMessage, messages, supabase])
}
