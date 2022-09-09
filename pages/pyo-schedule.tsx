import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import DashboardLayout from '../components/dashboardLayout';
import PyoSchedule from '../interfaces/pyo.schedule.interface';
import { http } from '../utils/utils';
import toastr from '../utils/toastr';

const PyoSchedule = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<PyoSchedule>();
  const reset = useRef<any>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value } as PyoSchedule);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setLoading(true);
    http.post('/pyo-schedule', data).then((res) => {
      toastr.success(res.data.message);
    }).catch((err) => {
      toastr.error(err.response.data.message)
    }).finally(() => {
      setLoading(false);
      reset.current.click();
      setData(undefined);
    })
  }
  
  return (
    <DashboardLayout pageName="pyo-schedule">
      <div className='min-h-[100vh] px-3 pt-3 bg-[#F4F4F4]'>
        <div className='md:p-3'>
          <h1 className='text-2xl font-bold'>Meeting</h1>
          <p className='text-xs md:text-md'>Please fill out this form to invite Prof. Yemi Osibanjo to appear or speak at your event.</p>
        </div>

        <form onSubmit={handleSubmit} className="py-3 flex flex-col space-y-2">
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Name of Organization</label>
            <input type="text" className="p-2 border" onChange={handleChange} required name='orgName' />
          </div>
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2'>Host Organization Website</label>
            <input type="text" className="p-2 border" onChange={handleChange} name='orgWebsite' />
          </div>
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Please Describe Your Organization</label>
            <textarea rows={8} className="p-2 border" onChange={handleChange} required name='orgDescription' />
          </div>
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Host Contact Name</label>
            <input type="text" className="p-2 border" onChange={handleChange} required name='hostName' />
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[48%] flex flex-col">
              <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Host Contact Email</label>
              <input type="text" className="p-2 border" onChange={handleChange} required name='hostEmail' />
            </div>
            <div className="w-[48%] flex flex-col">
              <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Host Contact Phone</label>
              <input type="text" className="p-2 border" onChange={handleChange} required name='hostPhone' />
            </div>
          </div>
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Event Title</label>
            <input type="text" className="p-2 border" onChange={handleChange} required name='eventTitle' />
          </div>
          <div className="w-full flex space-x-3">
            <div className="w-[48%] flex flex-col">
              <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Event Date</label>
              <input type="date" className="p-2 border" onChange={handleChange} required name='eventDate' />
            </div>
            <div className="w-[25%] flex flex-col">
              <label htmlFor="media" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Will Media be Present</label>
              <select className="p-2 border" onChange={handleChange} required name='media'>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Event Location</label>
            <input type="text" className="p-2 border" onChange={handleChange} required name='eventLocation' />
          </div>
          <div className="w-full flex space-x-3">
            <div className="w-[48%] flex flex-col">
              <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Country</label>
              <input type="text" className="p-2 border" onChange={handleChange} required name='country' />
            </div>
          </div>
          <div className="w-full flex space-x-3">
            <div className="w-[48%] flex flex-col">
              <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>State</label>
              <input type="text" className="p-2 border" onChange={handleChange} required name='state' />
            </div>
            <div className="w-[48%] flex flex-col">
              <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>City</label>
              <input type="text" className="p-2 border" onChange={handleChange} required name='city' />
            </div>
          </div>
          <div className="w-full flex space-x-3">
            <div className="w-[48%] flex flex-col">
              <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Street</label>
              <input type="text" className="p-2 border" onChange={handleChange} required name='street' />
            </div>
            <div className="w-[48%] flex flex-col">
              <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Postal Code</label>
              <input type="text" className="p-2 border" onChange={handleChange} required name='postalCode' />
            </div>
          </div>
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Audience and Notable invitees (including estimated number of attendees)</label>
            <textarea rows={8} className="p-2 border" onChange={handleChange} required name='audience' />
          </div>
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Description of events</label>
            <textarea rows={8} className="p-2 border" onChange={handleChange} required name='eventDescription' />
          </div>
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="name" className='text-black text-sm md:text-md font-bold uppercase px-2 required'>Formal Invitation letter (.pdf format)</label>
            <input type="file" accept=".pdf" className="p-2"  name='letter' />
          </div>
          <div>
            <button
              type='submit'
              className='uppercase p-2 mb-5 mt-3 bg-[#1F2937] font-bold rounded-md text-white'
              disabled={loading}
            >
              {loading ? "Submitting..." : "Get in touch"}
            </button>
            <button
              type='submit'
              className='uppercase p-2 mb-5 mt-3 bg-[#1F2937] font-bold rounded-md text-white'
              hidden
              ref={reset}
            >
              reset
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}

export default PyoSchedule;