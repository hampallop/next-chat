import * as React from 'react'
import { useMessageStore } from '@/state/message-state'
import { createClient } from '@/lib/supabase/client'

export function useFetchMessage() {
  const { messagesState, setMessagesState } = useMessageStore()
  const supabase = createClient()

  React.useEffect(() => {
    const getMessages = async () => {
      const response = await supabase.from('messages').select('*')
      const { data, error } = response
      if (error) {
        console.error(`error: ${response.error.message}`)
      } else {
        setMessagesState({ status: 'fetched', messages: data })
      }
    }

    if (messagesState.status === 'idle') {
      getMessages()
    }
  }, [messagesState.status, setMessagesState, supabase])

  return { messagesState }
}
