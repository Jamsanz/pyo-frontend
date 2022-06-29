import React from 'react'
import DashboardLayout from '../components/dashboardLayout';

const ScheduleMeeting = () => {
  return (
    <DashboardLayout pageName="schedule-meeting">
      <div className="min-h-[100vh] flex justify-center items-center space-y-3 flex-col px-3 pt-3 bg-[#F4F4F4]">
        <img src="/images/standup-meeting.svg" width="300" height="300" alt="" />
        <form className="inline-flex flex-col space-y-3 md:w-[80%]">
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-full focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">Event Title: </label>
            <input
              type="text"
              className='ml-2 outline-none flex-1'
            />
            <i className="fa-solid fa-pen mr-1"></i>
          </div>
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-full focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">Event Date & Time: </label>
            <input
              type="datetime-local"
              className='ml-2 outline-none flex-1 mr-1'
            />
          </div>
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-full focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">Event Type: </label>
            <select className='ml-2 outline-none flex-1 mr-2'>
              <option value=""></option>
              <option value="">Breakfast Meeting</option>
              <option value="">Lunch Meeting</option>
              <option value="">Quartely Meeting</option>
              <option value="">Annual Gathering</option>
            </select>
          </div>
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-full focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">Event Location: </label>
            <input
              type="text"
              className='ml-2 outline-none flex-1'
            />
            <i className="fa-solid fa-location-dot mr-2"></i>
          </div>
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-full focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">Event City: </label>
            <select className='ml-2 outline-none flex-1 mr-2'>
              <option value=""></option>
            </select>
          </div>
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-full focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">Event State: </label>
            <select className='ml-2 outline-none flex-1 mr-2'>
              <option value=""></option>
            </select>
          </div>
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-full focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">Event Country: </label>
            <select className='ml-2 outline-none flex-1 mr-2'>
              <option value=""></option>
            </select>
          </div>
          <div className="mx-auto">
            <button className="p-3 bg-[#1F2937] text-white rounded-md"> Schedule Event <i className="fa-solid fa-calendar ml-1 text-white"></i>
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}

export default ScheduleMeeting;