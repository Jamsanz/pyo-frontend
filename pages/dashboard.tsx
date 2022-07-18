import Link from "next/link";
import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/dashboardLayout";
import ProfileCard from "../components/profileCard";
import { Member } from "../interfaces/member.interface";
import Schedule from "../interfaces/schedule.interface";
import { dateTimeFormatter, getUser, http } from "../utils/utils";

const Dashboard = () => {
  const [user, setUser] = useState<Member>();
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user?.userId) {
      setLoading(true);
      http
        .get(`/schedule/user/${user.userId}`)
        .then((res) => setSchedules(res.data.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [user]);
  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <DashboardLayout pageName="dashboard">
      <div className="bg-[#f4f4f4] min-h-screen py-3 flex flex-col">
        <div className="flex md:justify-around mt-5">
          <div className="flex-1 items-center md:items-start inline-flex flex-col md:flex-row space-y-5 md:space-y-0 justify-center md:justify-around">
            <Link href="/schedule-meeting">
              <a className="dashboard-card w-[250px] h-[250px] cursor-pointer hover:scale-110 flex flex-col justify-center items-center">
                <i className="fa-solid fa-calendar text-3xl"></i>
                <h1>Schedule Meeting</h1>
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
                <h1>
                  PYO Fellows <br /> Chat Group
                </h1>
              </a>
            </Link>
          </div>
          <ProfileCard />
        </div>
        <div className="lg:flex-1 mx-3 mt-12 lg:mt-0 overflow-x-auto">
          <div className="ml-12 mb-5 text-[#000]">
            <span className="capitalize font-bold text-2xl">
              My Schedules <i className="fa-solid fa-timer"></i>
            </span>
          </div>
          {loading && (
            <div className="h-[200px] w-full flex justify-center items-center">
              Loading...
            </div>
          )}
          {!loading && schedules.length < 1 && (
            <div className="w-full h-[200px] flex flex-col space-y-2 justify-center items-center">
              <p>You have no scheduled event</p>
              <Link href="/schedule-meeting">
                <a className="p-3 bg-[#1F2937] text-white rounded-md">
                  Schedule Event{" "}
                  <i className="fa-solid fa-calendar ml-1 text-white"></i>
                </a>
              </Link>
            </div>
          )}
          {!loading && schedules.length >= 1 && (
            <table className="w-full text-sm text-left shadow-md text-gray-500 ">
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
                {schedules?.map((schedule, index) => (
                  <tr className="bg-white border-b" key={index}>
                    <th scope="row" className="px-6 py-4">
                      {schedule.title}
                    </th>
                    <td className="px-6 py-4">{schedule.type}</td>
                    <td className="px-6 py-4">
                      {dateTimeFormatter(`${schedule.date}`)}
                    </td>
                    <td className="px-6 py-4">{schedule.location} </td>
                    <td className="px-6 py-4">
                      {schedule.status ? "approved" : "unapproved"}{" "}
                    </td>
                    <td className="px-6 py-4">{schedule.city}</td>
                    <td className="px-6 py-4">{schedule.state}</td>
                    <td className="px-6 py-4">{schedule.country}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot></tfoot>
            </table>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
