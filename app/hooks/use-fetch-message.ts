import * as React from 'react'
import { useMessageStore } from '@/state/message-state'
import { createClient } from '@/lib/supabase/client'

export function useFetchMessage() {
  const { setMessages, messagesStatus, setMessagesStatus } = useMessageStore()
  const supabase = createClient()

  React.useEffect(() => {
    const getMessages = async () => {
      const response = await supabase.from('messages').select('*')
      const { data, error } = response
      if (error) {
        console.error(`error: ${response.error.message}`)
      } else {
        setMessages(data)
      }
    }

    if (messagesStatus === 'init') {
      getMessages()
      setMessagesStatus('fetched')
    }
  }, [messagesStatus, setMessages, setMessagesStatus, supabase])
}
