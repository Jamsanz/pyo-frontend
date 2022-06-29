import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../components/dashboardLayout';

const Dashboard = () => {
  const [firstName, setFirstName] = useState<string>("");
  useEffect(() => {
    setFirstName(localStorage.getItem("firstName")!);
  }, []);
  return (
    <DashboardLayout pageName="dashboard">
      <div className="bg-[#f4f4f4] min-h-[100vh]">
        <div className="w-[100%] flex justify-between my-3">
          <div className='ml-12 mt-5 text-[#000]'>
            <span className="capitalize font-bold text-2xl"> Schedules </span>
          </div>
          <h2 className="text-[#000] mr-4 self-end">
            {" "}
            Welcome{" "}
            <span className="capitalize"> {firstName && firstName} </span>
          </h2>
        </div>
        <div className="flex">
          <div className="lg:flex-1 ml-3">
            <table className='w-full table-auto text-sm overflow-x-scroll text-left shadow-md text-gray-500 '>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
              <tbody>
                <tr className='bg-white border-b'>
                  <th scope='row' className='px-6 py-4'>My First Event</th>
                  <td className='px-6 py-4'>Breackfast Meeting</td>
                  <td className='px-6 py-4'>28th June 2022 4pm</td>
                  <td className='px-6 py-4'>Lagos, Nigeria</td>
                  <td className='px-6 py-4'>Ikeja</td>
                  <td className='px-6 py-4'>Lagos</td>
                  <td className='px-6 py-4'>Nigeria</td>
                </tr>
                <tr className='bg-white border-b'>
                  <th scope='row' className='px-6 py-4'>My First Event</th>
                  <td className='px-6 py-4'>Breackfast Meeting</td>
                  <td className='px-6 py-4'>28th June 2022 4pm</td>
                  <td className='px-6 py-4'>Lagos, Nigeria</td>
                  <td className='px-6 py-4'>Ikeja</td>
                  <td className='px-6 py-4'>Lagos</td>
                  <td className='px-6 py-4'>Nigeria</td>
                </tr>
                <tr className='bg-white border-b'>
                  <th scope='row' className='px-6 py-4'>My First Event</th>
                  <td className='px-6 py-4'>Breackfast Meeting</td>
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
          <div className="hidden lg:block bg-white shadow-md min-w-[300px] max-h-[200px] max-w-[350px] rounded-lg px-3 pt-3 pb-5 mx-4">
            <div className=" inline-flex justify-center items-center space-x-3">
              <div className="">
                <img src="/images/user-alt.png" width={100} height={100} alt="" className='rounded-full' />
              </div>
              <ul className='flex flex-col space-y-2'>
                <li className='capitalize'><span className='font-bold'>Name:</span> {firstName && firstName}</li>
                <li> <span className='font-bold'> Gender: </span> Female</li>
                <li><span className='font-bold'> Country: </span> Nigeria</li>
                <li><span className='font-bold'> Group: </span> PYO Fellow</li>
              </ul>
            </div>
            {/* <p>
            <span className='font-bold'>Personal Quote: <br /></span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum necessitatibus quis inventore. Iste impedit minus aut qui commodi unde inventore, expedita amet, beatae suscipit modi adipisci voluptatibus ab voluptatem quaerat.
          </p> */}
          </div>
        </div>
        <div className="lg:flex-1 mx-3 mt-12">
          {/* <div className='ml-12 my-5 text-[#000]'>
            <span className="capitalize font-bold text-2xl"> Lorem ipsum </span>
          </div> */}
          <table className='w-full table-auto text-sm overflow-x-scroll text-left shadow-md text-gray-500 '>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
            <tbody>
              <tr className='bg-white border-b'>
                <th scope='row' className='px-6 py-4'>My First Event</th>
                <td className='px-6 py-4'>Breackfast Meeting</td>
                <td className='px-6 py-4'>28th June 2022 4pm</td>
                <td className='px-6 py-4'>Lagos, Nigeria</td>
                <td className='px-6 py-4'>Ikeja</td>
                <td className='px-6 py-4'>Lagos</td>
                <td className='px-6 py-4'>Nigeria</td>
              </tr>
              <tr className='bg-white border-b'>
                <th scope='row' className='px-6 py-4'>My First Event</th>
                <td className='px-6 py-4'>Breackfast Meeting</td>
                <td className='px-6 py-4'>28th June 2022 4pm</td>
                <td className='px-6 py-4'>Lagos, Nigeria</td>
                <td className='px-6 py-4'>Ikeja</td>
                <td className='px-6 py-4'>Lagos</td>
                <td className='px-6 py-4'>Nigeria</td>
              </tr>
              <tr className='bg-white border-b'>
                <th scope='row' className='px-6 py-4'>My First Event</th>
                <td className='px-6 py-4'>Breackfast Meeting</td>
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