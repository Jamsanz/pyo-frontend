import React from 'react'
import DashboardLayout from '../components/dashboardLayout';
import ProfileCard from '../components/profileCard';

const Profile = () => {
  return (
    <DashboardLayout pageName="profile">
      <div className="bg-[#f4f4f4] w-full min-h-screen flex pt-3">
        <div className='flex-1 inline-flex flex-col p-3'>
          <h1 className='font-bold text-2xl ml-3 mb-3'>Yemisi's Profile</h1>
          <form className='w-full bg-white shadow-md space-y-3 min-h-[500px] rounded-lg flex-col p-12'>
            <div>
              <label htmlFor="">First Name:</label>
              <input type="text" className='w-full border p-3 rounded-md' name="" id="" />
            </div>
            <div>
              <label htmlFor="">Last Name:</label>
              <input type="text" className='w-full border p-3 rounded-md' name="" id="" />
            </div>
            <div>
              <label htmlFor="">Email:</label>
              <input type="text" className='w-full border p-3 rounded-md' name="" id="" />
            </div>
            <div>
              <label htmlFor="">Country: </label>
              <select name="" id="" className='w-full border p-3 rounded-md'>
                <option value=""></option>
              </select>
            </div>
            <div>
              <label htmlFor="">Fellowship Programme: </label>
              <select name="" id="" className='w-full border p-3 rounded-md'>
                <option value=""></option>
              </select>
            </div>
            <div className='w-full'>
              <button className='px-4 py-3 bg-[#1F2937] text-white rounded-md'> Update Profile </button>
            </div>
          </form>
        </div>
        <ProfileCard />
      </div>
    </DashboardLayout>
  )
}

export default Profile;