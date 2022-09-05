import React from 'react'
import DashboardLayout from '../components/dashboardLayout';

const NewsFeed = () => {
  return (
    <DashboardLayout pageName="news-feed">
      <div className="min-h-[100vh] px-3 pt-3 bg-[#F4F4F4]">
        <div className="flex justify-between mb-12">
          <h1 className="text-black font-extrabold text-4xl">June 28-06 <span className='font-sm text-gray-400 text-sm'>2022</span></h1>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="inline-flex flex-col space-y-3 flex-start bg-white p-3 shadow-md rounded-md">
            <h2> How technology might be used to address Nigeria's poor governance and security issues.</h2>
            <p>Instability in governance promotes insecurity, which frequently leads to the loss of lives, possessions, livelihoods, and food supplies in a country. Consider Nigeria as an illustration, where weak governance has led to human right abuses, widespread poverty, banditry, abduction, job insecurity, food inflation, and subpar socioeconomic performance.</p>
            <button className='self-start hover:bg-[#1F2937] p-3 rounded-md hover:text-white'>
              Read more <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="inline-flex flex-col space-y-3 flex-start bg-white p-3 shadow-md rounded-md">
            <h2>Child rights as a distinct sphere in global social governance</h2>
            <p>Global social governance is a branch of world politics that primarily addresses problems affecting individuals, their families, and their communities. Children are a previously "forgotten" population that contemporary global social governance seeks to address.</p>
            <button className='self-start hover:bg-[#1F2937] p-3 rounded-md hover:text-white'>
              Read more <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="inline-flex flex-col space-y-3 flex-start bg-white p-3 shadow-md rounded-md">
            <h2>Climate Catastrophe; An extinction crisis to mankind</h2>
            <p>Climate change is intertwined with every aspect of our lives including but not limited to energy, development, housing, investment, security, economic growth, fisheries, forests, food, water and trade.</p>
            <button className='self-start hover:bg-[#1F2937] p-3 rounded-md hover:text-white'>
              Read more <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default NewsFeed;