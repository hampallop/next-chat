'use client'
import * as React from 'react'
import { ArrowUp, LoaderIcon } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'

import { Button } from '@/components/ui/button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMessageStore } from '@/state/message-state'
import { useUserStore } from '@/state/user-state'
import { cn } from '@/lib/utils'

import { createClient } from '@/lib/supabase/client'
import { useFetchMessage } from '@/hooks/use-fetch-message'
import { useSubscribeMessage } from '@/hooks/use-subscribe-message'
import { useAdjustTextareaHeight } from '@/hooks/use-adjust-textarea-height'

function ChatHeader() {
  const { user, logout } = useUserStore()
  return (
    <header className="container flex py-4">
      <div className="flex flex-1 flex-col">
        <h1 className="text-xl font-bold">Beta Chat</h1>
        {user}
      </div>
      <div>
        <Button onClick={logout}>Logout</Button>
      </div>
    </header>
  )
}

// Future DateTime Component
// const DateTime = () => <p className="text-sm text-muted-foreground">date time</p>

function ChatDisplay() {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const { user } = useUserStore()
  const { messagesState } = useFetchMessage()
  useSubscribeMessage()

  React.useLayoutEffect(() => {
    const scrollToBottom = () => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight
      }
    }
    scrollToBottom()
  })

  if (messagesState.status === 'idle') {
    return (
      <main className="container flex flex-1 justify-center items-center py-4">
        <span role="alert" aria-busy="true" className="sr-only">
          Loading
        </span>
        <LoaderIcon className="animate-spin" />
      </main>
    )
  }

  return (
    <main
      className="container flex-1 py-4 overflow-y-auto"
      ref={containerRef}
      role="log"
    >
      {messagesState.messages.map((message, index) => (
        <div
          key={index}
          className={(cn('flex flex-col'), index !== 0 ? 'mt-4' : '')}
        >
          <div className="flex items-center space-x-4">
            <p className="text-sm font-semibold">{message.user}</p>
          </div>
          <div
            className={cn(
              'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm',
              message.user === user
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted',
            )}
          >
            {message.message}
          </div>
        </div>
      ))}
    </main>
  )
}

type FormValues = {
  message: string
}

function ChatSendMessageArea({ user }: { user: string }) {
  const { register, handleSubmit, formState, reset, watch } =
    useForm<FormValues>()
  const { addNewMessage } = useMessageStore()
  const supabase = createClient()

  const message = watch('message')
  const { textareaRef } = useAdjustTextareaHeight(message)

  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const id = uuidv4()

    // Optimistic Update
    addNewMessage({ id, user, message: data.message })
    reset({ message: '' })

    const { error } = await supabase
      .from('messages')
      .insert([{ id, user, message: data.message }])
      .select()

    if (error) {
      console.error(`Submitted Error: ${error.message}`)
    }
  }

  return (
    <div className="container py-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex bg-[#f4f4f4] items-end rounded-3xl p-4">
          <div className="flex flex-1 items-center">
            <textarea
              {...register('message', {
                required: true,
              })}
              ref={(e) => {
                textareaRef.current = e
                register('message').ref(e)
              }}
              className="bg-transparent resize-none border-none focus:outline-none focus:ring-0 w-full max-h-36 overflow-y-auto p-2 h-10"
              placeholder="Type your message here."
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  if (formState.isValid) {
                    handleSubmit(onSubmit)()
                  }
                }
              }}
            />
          </div>
          <Button
            className="rounded-full"
            size="icon"
            type="submit"
            disabled={!formState.isValid}
          >
            <ArrowUp className="h-6 w-6" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </form>
    </div>
  )
}

export { ChatHeader, ChatDisplay, ChatSendMessageArea }
