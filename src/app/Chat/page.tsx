'use client'
import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'

// それっぽいのは作ったけど
// OpenAI APIが使えないからこれ以上作れない。

const testChatLogs: ChatLogProps[] = [
  {
    isUser: true,
    message: 'こんにちわ',
  },
  {
    isUser: false,
    message: 'こんにちわ。何かご用ですか？',
  },
]

type ChatLogProps = {
  isUser: boolean
  message: string
}

const ChatBaloon = (props: ChatLogProps) => {
  const { isUser, message } = props
  return (
    <div className={`flex mb-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`p-2 rounded-md ${isUser ? 'bg-indigo-400 text-white' : 'bg-white'}`}>{message}</div>
    </div>
  )
}

export const Chat = () => {
  const [inputValue, setInputValue] = useState('')
  const [chatLogs, setChatLogs] = useState<ChatLogProps[]>(testChatLogs)

  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAPI_KEY,
  })

  const openai = new OpenAIApi(configuration)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setChatLogs(prevChatLog => [...prevChatLog, { isUser: true, message: inputValue }])
    setInputValue('')

    // APIを叩きます
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: inputValue }],
    })

    console.log(response)
  }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='max-w-lg w-full'>
        <div style={{ height: 650 }} className='bg-gray-100 w-full p-4 h-96 overflow-scroll rounded-lg'>
          <span className='text-center block font-medium text-2xl border-b-2 border-indigo-400 pb-4 mb-3'>
            ChatGPT-Clone
          </span>
          {chatLogs.length
            ? chatLogs.map((chatLog, index) => <ChatBaloon key={'chat-log-' + index} {...chatLog} />)
            : null}
        </div>
        <form className='w-full' onSubmit={e => handleSubmit(e)}>
          <div className='flex items-center p-4 bg-gray-200 rounded-b-lg w-full'>
            <input
              type='text'
              className='flex-1 border-2 py-2 px-4 focus:outline-none rounded-lg focus:border-indigo-400'
              value={inputValue}
              onChange={inputChangeHandler}
            />
            <button type='submit' className='p-2 bg-indigo-400 rounded-lg text-white hover:bg-indigo-500'>
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Chat
