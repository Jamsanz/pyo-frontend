import React, { useEffect, useState } from 'react'
import DashboardLayout from '../components/dashboardLayout';

const Group = () => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    let user = window.localStorage.getItem("appUser");
    let save = JSON.parse(user!);
    setUser(save);
    console.log(user)
  }, []);

  return (
    <DashboardLayout pageName="group">
      <div className="bg-[#f4f4f4] w-full min-h-screen relative flex flex-col space-y-3 pt-2">
        <img src="/images/chat-group.svg" className="el-center opacity-30" width={300} alt="" />
        <div className="rounded-tl-lg z-40 mx-4 max-w-[450px] self-end rounded-tr-lg rounded-bl-lg bg-white p-2 shadow-md">
          <div className="flex justify-between">
            <span className='font-bold'>{user?.fellowship}</span>
            <span className='font-bold'>lorem Ipsum</span>
          </div>
          <div className='max-w-[400px] my-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eligendi aliquid voluptate. Quibusdam facere odio minima aliquam pariatur quasi temporibus esse! Numquam architecto deserunt ratione saepe error unde placeat rem!</div>
          <div className='flex justify-end'>
            <p className='font-bold'>2:05pm</p>
          </div>
        </div>
        <div className="rounded-tl-lg z-40 mx-4 max-w-[450px] rounded-tr-lg rounded-br-lg bg-[#1F2937] text-white p-2 shadow-md">
          <div className="flex justify-between">
            <span className='font-bold'>{user?.fellowship}</span>
            <span className='font-bold'>{`${user?.firstName} ${user?.lastName}`}</span>
          </div>
          <div className='max-w-[400px] my-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eligendi aliquid voluptate. Quibusdam facere odio minima aliquam pariatur quasi temporibus esse! Numquam architecto deserunt ratione saepe error unde placeat rem!</div>
          <div className='flex justify-end'>
            <p className='font-bold'>2:33pm</p>
          </div>
        </div>
        <div className="rounded-tl-lg z-40 mx-4 max-w-[450px] self-end rounded-tr-lg rounded-bl-lg bg-white p-2 shadow-md">
          <div className="flex justify-between">
            <span className='font-bold'>{user?.fellowship}</span>
            <span className='font-bold'>lorem Ipsum</span>
          </div>
          <div className='max-w-[400px] my-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eligendi aliquid voluptate. Quibusdam facere odio minima aliquam pariatur quasi temporibus esse! Numquam architecto deserunt ratione saepe error unde placeat rem!</div>
          <div className='flex justify-end'>
            <p className='font-bold'>3:05pm</p>
          </div>
        </div>
        <div className='fixed bottom-10 w-full lg:w-auto z-50'>
          <form action="" className="mx-auto lg:ml-4 focus-within:outline focus-within:outline-offset-2 focus-within:outline-2 rounded-full p-2 w-[90vw] bg-white lg:w-[80vw] flex items-center space-x-2">
            <input type="text" className="flex-1 focus:outline-none px-2" autoFocus />
            <button type='submit'> <i className="fa fa-paper-plane text-black" /></button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Group;