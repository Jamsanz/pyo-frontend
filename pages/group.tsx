import React from 'react'
import DashboardLayout from '../components/dashboardLayout';

const Group = () => {
  return (
    <DashboardLayout pageName="group">
      <div className="bg-[#f4f4f4] w-full min-h-screen flex flex-col justify-center items-center">
        <img src="/images/chat-group.svg" width={300} alt="" />
        <h1 className="text-2xl font-bold text-center">
          Welcome to PYO Institute's <br /> fellows chat group
        </h1>
        <p>Coming soon...</p>
      </div>
    </DashboardLayout>
  )
}

export default Group;