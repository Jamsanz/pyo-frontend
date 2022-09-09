import React, { FormEvent, useEffect, useRef, useState } from 'react'
import DashboardLayout from '../components/dashboardLayout';
import { timeFormatter } from '../utils/utils';

interface IMessage {
  name: string;
  email: string;
  receiver: boolean;
  message: string;
  time: string;
}

const Group = () => {
  const [user, setUser] = useState<any>();
  const [msgs, setMsgs] = useState<IMessage[]>([]);
  const [message, setMessage] = useState<string>("");
  const messageEnd = useRef<any>();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setMsgs([...msgs, {
      name: user.firstName + " " + user.lastName,
      email: user.email,
      receiver: false,
      message,
      time: timeFormatter()
    }]);
    setMessage("");
  }
  
  useEffect(() => {
    let user = window.localStorage.getItem("appUser");
    let save = JSON.parse(user!);
    setUser(save);
  }, []);
  
  useEffect(() => {
    if (messageEnd.current) {
      messageEnd.current.scrollTop = messageEnd.current?.scrollHeight;
    }
  }, [messageEnd, msgs]);
  
  return (
    <DashboardLayout pageName="group">
      <div className="bg-[#f4f4f4] w-full relative flex flex-col space-y-3 pt-2">
        <img src="/images/chat-group.svg" className="el-center opacity-30" width={300} alt="" />
        <div ref={messageEnd} className='h-[74vh] overflow-scroll pb-10 z-40 md:h-[78vh] flex flex-col space-y-3'>
          <div className="rounded-tl-lg z-40 mx-4 max-w-[250px] md:max-w-[450px] self-end rounded-tr-lg rounded-bl-lg bg-white p-2 shadow-md">
            <div className="flex justify-between">
              <span className='font-bold'>{user?.fellowship}</span>
              <span className='font-bold'>lorem Ipsum</span>
            </div>
            <div className='max-w-[400px] my-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eligendi aliquid voluptate. Quibusdam facere odio minima aliquam pariatur quasi temporibus esse! Numquam architecto deserunt ratione saepe error unde placeat rem!</div>
            <div className='flex justify-end'>
              <p className='font-bold'>2:05pm</p>
            </div>
          </div>
          <div className="rounded-tl-lg z-40 mx-4 max-w-[250px] md:max-w-[450px] rounded-tr-lg rounded-br-lg bg-[#1F2937] opacity-90 text-white p-2 shadow-md">
            <div className="flex justify-between">
              <span className='font-bold'>{user?.fellowship}</span>
              <span className='font-bold'>{`${user?.firstName} ${user?.lastName}`}</span>
            </div>
            <div className='max-w-[400px] my-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eligendi aliquid voluptate. Quibusdam facere odio minima aliquam pariatur quasi temporibus esse! Numquam architecto deserunt ratione saepe error unde placeat rem!</div>
            <div className='flex justify-end'>
              <p className='font-bold'>2:33pm</p>
            </div>
          </div>
          <div className="rounded-tl-lg z-40 mx-4 max-w-[250px] md:max-w-[450px] self-end rounded-tr-lg rounded-bl-lg bg-white p-2 shadow-md">
            <div className="flex justify-between">
              <span className='font-bold'>{user?.fellowship}</span>
              <span className='font-bold'>lorem Ipsum</span>
            </div>
            <div className='max-w-[400px] my-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eligendi aliquid voluptate. Quibusdam facere odio minima aliquam pariatur quasi temporibus esse! Numquam architecto deserunt ratione saepe error unde placeat rem!</div>
            <div className='flex justify-end'>
              <p className='font-bold'>3:05pm</p>
            </div>
          </div>
          {
            msgs?.map((msg, index) => (
              <div key={index} className="rounded-tl-lg z-40 max-w-[250px] mx-4 md:max-w-[450px] rounded-tr-lg rounded-br-lg bg-[#1F2937] opacity-90 text-white p-2 shadow-md">
                <div className="flex justify-between">
                  <span className='font-bold'>{user?.fellowship}</span>
                  <span className='font-bold'>{`${user?.firstName} ${user?.lastName}`}</span>
                </div>
                <div className='max-w-[400px] my-1'>{msg.message}</div>
                <div className='flex justify-end'>
                  <p className='font-bold'>{msg.time}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div id='div2' className="clear-both"></div>
      </div>
      <div className='fixed bottom-0 w-full lg:w-auto z-50'>
        <form onSubmit={handleSubmit} className="mx-auto mb-5 shadow-lg lg:ml-4 rounded-full p-2 w-[90vw] bg-white lg:w-[80vw] flex items-center space-x-2">
          <input
            type="text"
            className="flex-1 focus:outline-none px-2"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            autoFocus
          />
          <button type='submit'> <i className="fa fa-paper-plane text-black" /></button>
        </form>
      </div>
    </DashboardLayout>
  )
}

export default Group;