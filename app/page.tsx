'use client'
import * as React from 'react'
import { useEffect } from 'react'
import { useUserStore } from '@/state/user-state'
import { ChatHeader, ChatDisplay, ChatSendMessageArea } from '@/components/chat'

export default function Home() {
  const { user, getUser } = useUserStore()

  useEffect(() => {
    if (!user) {
      getUser()
    }
  }, [getUser, user])

  if (!user) {
    return null // Render nothing until username is set
  }

  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-dvh max-w-3xl mx-auto">
      <ChatHeader />
      <ChatDisplay />
      <ChatSendMessageArea user={user} />
    </div>
  )
}
