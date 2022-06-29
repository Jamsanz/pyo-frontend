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
            <h2>Headline 1</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam vel animi, corrupti labore vitae ad aspernatur sint id, minima inventore facilis qui amet sapiente. Ducimus maiores alias nisi minima quibusdam?</p>
            <button className='self-start hover:bg-[#1F2937] p-3 rounded-md hover:text-white'>
              Read more <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="inline-flex flex-col space-y-3 flex-start bg-white p-3 shadow-md rounded-md">
            <h2>Headline 2</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam vel animi, corrupti labore vitae ad aspernatur sint id, minima inventore facilis qui amet sapiente. Ducimus maiores alias nisi minima quibusdam?</p>
            <button className='self-start hover:bg-[#1F2937] p-3 rounded-md hover:text-white'>
              Read more <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="inline-flex flex-col space-y-3 flex-start bg-white p-3 shadow-md rounded-md">
            <h2>Headline 3</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam vel animi, corrupti labore vitae ad aspernatur sint id, minima inventore facilis qui amet sapiente. Ducimus maiores alias nisi minima quibusdam?</p>
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