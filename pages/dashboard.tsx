import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../components/dashboardLayout';
import ProfileCard from '../components/profileCard';

const Dashboard = () => {
  const [firstName, setFirstName] = useState<string>("");

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName")!);

  }, []);
  return (
    <DashboardLayout pageName="dashboard">
      <div className="bg-[#f4f4f4] min-h-screen py-3 flex flex-col">
        {/* <div className="w-[100%] flex justify-between mt-5 mb-3">
          <h1 className='text-[#000] text-center text-4xl flex-1 font-bold'>PYO Fellows</h1>
          <h2 className="text-[#000] mr-4 self-end hidden md:block">
            {" "}
            Welcome{" "}
            <span className="capitalize"> {firstName && firstName} </span>
          </h2>
        </div> */}
        <div className="flex md:justify-around mt-5">
          <div className="flex-1 items-center md:items-start inline-flex flex-col md:flex-row space-y-5 md:space-y-0 justify-center md:justify-around">
            <Link href="/schedule-meeting">
              <a className="dashboard-card w-[250px] h-[250px] cursor-pointer hover:scale-110 flex flex-col justify-center items-center">
                <i className="fa-solid fa-calendar text-3xl"></i>
                <h1>Sehedule Meeting</h1>
              </a>
            </Link>
            <Link href="/news-feed">
            <a className="dashboard-card w-[250px] h-[250px] cursor-pointer hover:scale-110 flex flex-col justify-center items-center">
              <i className="fa-solid fa-rss text-3xl"></i>
              <h1>News Feeds</h1>
              </a>
            </Link>
            <Link href="/group">
            <a className="dashboard-card w-[250px] h-[250px] cursor-pointer hover:scale-110 flex flex-col justify-center items-center">
              <i className="fa-solid fa-people-group text-3xl"></i>
              <h1>PYO Fellows <br /> Chat Group</h1>
              </a>
            </Link>
          </div>
          <ProfileCard />
        </div>
        <div className="lg:flex-1 mx-3 mt-12 lg:mt-0 overflow-x-auto">
          <div className='ml-12 mb-5 text-[#000]'>
            <span className="capitalize font-bold text-2xl">My Schedules <i className="fa-solid fa-timer"></i></span>
          </div>
          <table className='w-full text-sm text-left shadow-md text-gray-500 '>
            <thead className="text-xs overflow-x-scroll text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  State
                </th>
                <th scope="col" className="px-6 py-3">
                  Country
                </th>
              </tr>
            </thead>
            <tbody className='overflow-x-scroll'>
              <tr className='bg-white border-b'>
                <th scope='row' className='px-6 py-4'>My First Event</th>
                <td className='px-6 py-4'>Breakfast Meeting</td>
                <td className='px-6 py-4'>28th June 2022 4pm</td>
                <td className='px-6 py-4'>Lagos, Nigeria</td>
                <td className='px-6 py-4'>Ikeja</td>
                <td className='px-6 py-4'>Lagos</td>
                <td className='px-6 py-4'>Nigeria</td>
              </tr>
              <tr className='bg-white border-b'>
                <th scope='row' className='px-6 py-4'>My First Event</th>
                <td className='px-6 py-4'>Breakfast Meeting</td>
                <td className='px-6 py-4'>28th June 2022 4pm</td>
                <td className='px-6 py-4'>Lagos, Nigeria</td>
                <td className='px-6 py-4'>Ikeja</td>
                <td className='px-6 py-4'>Lagos</td>
                <td className='px-6 py-4'>Nigeria</td>
              </tr>
              <tr className='bg-white border-b'>
                <th scope='row' className='px-6 py-4'>My First Event</th>
                <td className='px-6 py-4'>Breakfast Meeting</td>
                <td className='px-6 py-4'>28th June 2022 4pm</td>
                <td className='px-6 py-4'>Lagos, Nigeria</td>
                <td className='px-6 py-4'>Ikeja</td>
                <td className='px-6 py-4'>Lagos</td>
                <td className='px-6 py-4'>Nigeria</td>
              </tr>
              <tr className='bg-white border-b'>
                <th scope='row' className='px-6 py-4'>My First Event</th>
                <td className='px-6 py-4'>Breakfast Meeting</td>
                <td className='px-6 py-4'>28th June 2022 4pm</td>
                <td className='px-6 py-4'>Lagos, Nigeria</td>
                <td className='px-6 py-4'>Ikeja</td>
                <td className='px-6 py-4'>Lagos</td>
                <td className='px-6 py-4'>Nigeria</td>
              </tr>
              <tr className='bg-white border-b'>
                <th scope='row' className='px-6 py-4'>My First Event</th>
                <td className='px-6 py-4'>Breakfast Meeting</td>
                <td className='px-6 py-4'>28th June 2022 4pm</td>
                <td className='px-6 py-4'>Lagos, Nigeria</td>
                <td className='px-6 py-4'>Ikeja</td>
                <td className='px-6 py-4'>Lagos</td>
                <td className='px-6 py-4'>Nigeria</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>

        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;