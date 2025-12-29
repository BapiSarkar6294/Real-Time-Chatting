import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContrainer from '../components/ChatContrainer'
import RightSiderbar from '../components/RightSiderbar'
import { ChatContext } from '../../context/ChatContext'

const Home = () => {

    const {selectedUser} = useContext(ChatContext)
  
  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%] bg-black'>
      <div className={`bg-black border-2 border-gray-600 rounded-2xl
       overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ? 
       'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
        <Sidebar/>
        <ChatContrainer/>
        <RightSiderbar/>
      </div>
    </div>
  )
}

export default Home
