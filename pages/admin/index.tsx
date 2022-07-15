import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import AdminDashboardLayout from '../../components/AdminDashboardLayout';
import { dateTimeFormatter, http } from '../../utils/utils';

const Index = () => {

  const [general, setGeneral] = useState<boolean>(true)
  const [pyoMeetings, setPyoMeetings] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [schedules, setSchedules] = useState<any>()
  const [pyoSchedules, setPyoSchedules] = useState<any>();
  const [members, setMembers] = useState<any>();
  const [message, setMessage] = useState<any>();
  const [status, setStatus] = useState<any>()

  const getMeetings = () => {
  setPyoMeetings(false);
  setGeneral(true);
} 
  const getPyoMeetings = () => {
    setPyoMeetings(true)
    setGeneral(false)
  }

  

  const editApproval = (id: string) => { 

    http
      .put(`/schedule/${id}`, {status: "true"})
      .then((res) => setSchedules(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }
  
  useEffect(() => {
    setLoading(true);
    http
      .get(`/schedule`)
      .then((res) => setSchedules(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    
  }, []);

   useEffect(() => {
    //  setLoading(true);
     http
       .get(`/register`)
       .then((res) => setMembers(res.data.data))
       .catch((err) => console.log(err))
       .finally(() => setLoading(false));
   }, []);
  
   useEffect(() => {
     //  setLoading(true);
     http
       .get(`/message`)
       .then((res) => setMessage(res.data.data))
       .catch((err) => console.log(err))
       .finally(() => setLoading(false));
   }, []);
  
   useEffect(() => {
     //  setLoading(true);
     http
       .get(`/pyo-schedule`)
       .then((res) => setPyoSchedules(res.data.data))
       .catch((err) => console.log(err))
       .finally(() => setLoading(false));
   }, []);
  
  
console.log(schedules)
  useEffect(() => {
    // setUser(getUser());
  }, []);

  

  return (
    <AdminDashboardLayout>
      <div className="bg-[#f4f4f4] min-h-screen py-3 flex flex-col">
        <div className="flex md:justify-around mt-5  mb-12">
          <div className="flex-1 items-center md:items-start inline-flex flex-col md:flex-row space-y-5 md:space-y-0 justify-center md:justify-around">
            <div>
              <div className="dashboard-card w-[250px] h-[250px] hover:scale-110 flex flex-col justify-center items-center">
                <p className="text-6xl font-bold"> {message?.length}</p>
                <h1 className="text-2xl">Messages</h1>
              </div>
            </div>
            <div>
              <div className="dashboard-card w-[250px] h-[250px] hover:scale-110 flex flex-col justify-center items-center">
                {/* <i className="fa-solid fa-rss text-3xl"></i> */}
                <p className="text-6xl font-bold"> {members?.length}</p>
                <h1 className="text-2xl">Members</h1>
              </div>
            </div>
            <div>
              <div className="dashboard-card w-[250px] h-[250px] hover:scale-110 flex flex-col justify-center items-center">
                {/* <i className="fa-solid fa-people-group text-3xl"></i> */}
                <p className="text-6xl font-bold">{schedules?.length}</p>
                <h1 className="text-2xl">General Meetings</h1>
              </div>
            </div>
            <div>
              <div className="dashboard-card w-[250px] h-[250px] hover:scale-110 flex flex-col justify-center items-center">
                {/* <i className="fa-solid fa-people-group text-3xl"></i> */}
                <p className="text-6xl font-bold"> {pyoSchedules?.length}</p>
                <h1 className="text-2xl">Meetings with PYO</h1>
              </div>
            </div>
          </div>
        </div>

        <div className=" mx-3 lg:mt-0 overflow-x-auto ">
          <div className="flex flex-row justify-start items-end">
            <button
              className={`p-3 border-l-[1px] border-x-[1px] border-t-[1px] border-[#1F2937] border-solid rounded-tl-md
            ${general ? "bg-[#1F2937] text-[#fff]" : ""}`}
              onClick={getMeetings}
            >
              General Meetings
              {/* <i className="fa-solid fa-calendar ml-1 text-white"></i> */}
            </button>
            <button
              className={` p-3 border-l-[1px] border-x-[1px] border-t-[1px] border-[#1F2937] border-solid rounded-tr-md
            ${pyoMeetings ? "bg-[#1F2937] text-[#fff]" : ""}`}
              onClick={getPyoMeetings}
            >
              PYO Meetings
              {/* <i className="fa-solid fa-calendar ml-1 text-white"></i> */}
            </button>
          </div>
          {/* {loading && (
            <div className="h-[200px] w-full flex justify-center items-center">
              Loading...
            </div>
          )} */}
          {/* {!loading && schedules.length < 1 && (
            <div className="w-full h-[200px] flex flex-col space-y-2 justify-center items-center">
              <p>You have no scheduled event</p>
              <button className="p-3 bg-[#1F2937] text-white rounded-md">
                Schedule Event{" "}
                <i className="fa-solid fa-calendar ml-1 text-white"></i>
              </button>
            </div>
          )} */}
          {/* {!loading && schedules.length >= 1 && ( */}

          <div className="pt-6 bg-white">
            <table className="w-full text-sm text-left shadow-md text-gray-500 ">
              {general && (
                <>
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
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  {schedules && schedules?.map((schedule: any, index: any) => (
                    <tbody className="overflow-x-scroll" key={index}>
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4">
                          {schedule?.title}
                        </th>
                        <td className="px-6 py-4">{schedule?.type}</td>
                        <td className="px-6 py-4">
                          {dateTimeFormatter(`${schedule?.date}`)}
                        </td>
                        <td className="px-6 py-4">{schedule?.location}</td>

                        <td className="px-6 py-4">{schedule?.city}</td>
                        <td className="px-6 py-4">{schedule?.state}</td>
                        <td className="px-6 py-4">{schedule?.country}</td>
                        <td className="px-6 py-4 cursor-pointer">
                            <div className={`w-[90px] ${schedule?.status ? "bg-[green]" : "bg-[red]"} text-white p-2 rounded-sm`}
                            onClick={() => editApproval(schedule?._id)}>
                             {schedule?.status ? "Approved" : "Not Approved"}
                              <i className={`ml-[2px]  ${schedule?.status ? "fa-check" : "fa-xmark"}  fa-solid text-[10px]`}></i>
                            </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </>
              )}
              {pyoMeetings && (
                <>
                  <p> PYO Meetings</p>
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
                        Status
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
                  <tbody className="overflow-x-scroll">
                    {/* {schedules?.map((schedule, index) => ( */}
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4">
                        title
                      </th>
                      <td className="px-6 py-4">
                        {/* {schedule.type} */}
                        tyoe
                      </td>
                      <td className="px-6 py-4">
                        {/* {dateTimeFormatter(`${schedule.date}`)} */}
                        date
                      </td>
                      <td className="px-6 py-4">
                        {/* {schedule.location} */}
                        location
                      </td>
                      <td className="px-6 py-4">
                        {/* {schedule.status ? "approved" : "unapproved"}{" "} */}
                        status
                      </td>
                      <td className="px-6 py-4">
                        {/* {schedule.city} */}
                        city
                      </td>
                      <td className="px-6 py-4">
                        {/* {schedule.state} */}
                        state
                      </td>
                      <td className="px-6 py-4">{/* {schedule.country} */}</td>
                    </tr>
                  </tbody>
                </>
              )}
            </table>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

export default Index;