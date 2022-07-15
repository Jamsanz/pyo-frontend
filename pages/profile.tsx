import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import DashboardLayout from '../components/dashboardLayout';
import ProfileCard from '../components/profileCard';
import { getUser, http } from '../utils/utils';
import toastr from '../utils/toastr';

const Profile = () => {
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState<boolean>()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    http.put(`/member/${user._id}`, user).then(res => {
      toastr.success(res.data.message);
    }).catch;
  };

  useEffect(() => {
    setUser(getUser);
  }, []);
  return (
    <DashboardLayout pageName="profile">
      <div className="bg-[#f4f4f4] w-full min-h-screen flex pt-3">
        <div className='flex-1 inline-flex flex-col p-3'>
          <h1 className='font-bold text-2xl ml-3 mb-3'>{user?.firstName}'s Profile</h1>
          <form onSubmit={handleSubmit} className='w-full bg-white shadow-md space-y-3 min-h-[500px] rounded-lg flex-col p-12'>
            <div>
              <label htmlFor="">First Name:</label>
              <input
                type="text"
                className='w-full border p-3 rounded-md'
                name="firstName"
                id=""
                onChange={handleChange}
                value={user?.firstName}
              />
            </div>
            <div>
              <label htmlFor="">Last Name:</label>
              <input
                type="text"
                className='w-full border p-3 rounded-md'
                name="lastName"
                id=""
                onChange={handleChange}
                value={user?.lastName}
              />
            </div>
            <div>
              <label htmlFor="">Email:</label>
              <input
                type="text"
                className='w-full border p-3 rounded-md'
                name=""
                id=""
                value={user?.email}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="">Country: </label>
              <select name="country" onChange={handleChange} value={user?.country} id="" className='w-full border p-3 rounded-md'>
                <option value=""></option>
              </select>
            </div>
            <div>
              <label htmlFor="">Fellowship Programme: </label>
              <select name="fellowship" onChange={handleChange} value={user?.fellowship} id="" className='w-full border p-3 rounded-md'>
                <option value=""></option>
                <option value="PYO Fellows">PYO Fellows </option>
                <option value="PYO New Tribe">PYO New Tribe </option>
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