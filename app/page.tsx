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
    <div className="max-w-3xl mx-auto h-screen flex flex-col">
      <ChatHeader />
      <ChatDisplay />
      <ChatSendMessageArea user={user} />
    </div>
  )
}
