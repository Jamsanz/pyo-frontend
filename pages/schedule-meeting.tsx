import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import DashboardLayout from '../components/dashboardLayout';
import Schedule from '../interfaces/schedule.interface';
import { getUser, http } from '../utils/utils';
import toastr from '../utils/toastr';

const ScheduleMeeting = () => {
  const [data, setData] = useState<Schedule>();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>();
  const reset = useRef<any>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const tempData: { [key: string]: any } = { ...data };
    tempData[name] = value;
    setData(tempData as Schedule);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    http.post('/schedule', {...data, userId: user._id})
      .then(res => {
        toastr.success(res.data.message);
        reset.current.click();
        setData(undefined);
      }).catch(err => {
        console.log(err.response.data.message);
        toastr.error(err.response.data.message);
      }).finally(() => setLoading(false));
  }

  useEffect(() => {
    setUser(getUser);
  }, []);
  return (
    <DashboardLayout pageName="schedule-meeting">
      <div className="min-h-[100vh] flex justify-center items-center space-y-3 flex-col px-3 pt-3 bg-[#F4F4F4]">
        <img src="/images/standup-meeting.svg" width="300" height="300" alt="" />
        <form className="inline-flex flex-col space-y-3 md:w-[80%]" onSubmit={handleSubmit}>
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-md focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">Event Title: </label>
            <input
              type="text"
              className='ml-2 outline-none flex-1'
              name='title'
              onChange={handleChange} required
            />
            <i className="fa-solid fa-pen mr-1"></i>
          </div>
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-md focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">Event Date & Time: </label>
            <input
              type="datetime-local"
              className='ml-2 outline-none flex-1 mr-1'
              name='date'
              onChange={handleChange} required
            />
          </div>
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-md focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">Event Type: </label>
            <select className='ml-2 outline-none flex-1 mr-2' onChange={handleChange} required name='type'>
              <option value=""></option>
              <option value="Breakfast Meeting">Breakfast Meeting</option>
              <option value="Lunch Meeting">Lunch Meeting</option>
              <option value="Quartely Meeting">Quartely Meeting</option>
              <option value="Annual Gathering">Annual Gathering</option>
            </select>
          </div>
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-md focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">Event Location: </label>
            <input
              type="text"
              className='ml-2 outline-none flex-1'
              name='location'
              onChange={handleChange} required
            />
            <i className="fa-solid fa-location-dot mr-2"></i>
          </div>
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-md focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">City: </label>
            <select className='ml-2 outline-none flex-1 mr-2' name='city' onChange={handleChange} required>
              <option value=""></option>
              <option value="Maitama">Maitama</option>
            </select>
          </div>
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-md focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">State: </label>
            <select className='ml-2 outline-none flex-1 mr-2' name='state' onChange={handleChange} required>
              <option value=""></option>
              <option value="Abuja">FCT</option>
            </select>
          </div>
          <div className="border items-center cursor-pointer bg-white text-gray-900 sm:text-sm rounded-md focus:outline-2 focus:outline-blue-500 focus:ring-1 flex p-2.5">
            <label htmlFor="">Country: </label>
            <select className='ml-2 outline-none flex-1 mr-2' name='country' onChange={handleChange} required>
              <option value=""></option>
              <option value="NGN">Nigeria</option>
            </select>
          </div>
          <div className="mx-auto">
            <button
              type="submit"
              className="p-3 bg-[#1F2937] text-white rounded-md"
              disabled={loading}
            >
              {
                loading ? "Loading..." : <>Schedule Event <i className="fa-solid fa-calendar ml-1 text-white"></i></>
              }
              
            </button>
            <button ref={reset} type='reset' hidden>Reset</button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}

export default ScheduleMeeting;