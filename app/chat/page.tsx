'use client'
import {Suspense} from 'react'
import {Flex} from '@radix-ui/themes'
import {useWeb3Modal, useWeb3ModalAccount} from '@web3modal/ethers/react'
import {Chat, ChatContext, ChatSideBar, useChatHook} from '@/components'

const ChatProvider = () => {
  const provider = useChatHook()
  const {open} = useWeb3Modal()

  const {isConnected} = useWeb3ModalAccount()
  return (
    <ChatContext.Provider value={provider}>
      <Flex style={{height: 'calc(100% - 56px)'}} className="relative">
        {isConnected ?
          <>
            <ChatSideBar/>
            <div className="flex-1 relative">
              <Chat ref={provider.chatRef}/>
            </div>
          </>
          :
          <div className="flex flex-col items-center pt-12 text-center w-full gap-4">
            <div className="text-2xl">Galadriel on-chain ChatGPT demo</div>
            <div className="">Connect wallet to use the chat</div>
            <button
              onClick={() => open()}
              className="mt-4 p-4 bg-[#F3D7FF] text-xl text-black hover:bg-[#BCA5C5] duration-200"
            >
              Connect wallet
            </button>
          </div>
        }
      </Flex>
    </ChatContext.Provider>
  )
}

const ChatPage = () => {
  return (
    <Suspense>
      <ChatProvider/>
    </Suspense>
  )
}

export default ChatPage
