import React from 'react'

interface Info {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  group: string;
}

const ProfileCard = () => {
  return (
    <div className="hidden hover:scale-110 lg:flex flex-col items-center bg-white shadow-md min-w-[300px] min-h-[350px] max-h-[350px] max-w-[350px] rounded-lg overflow-hidden mx-4">
      <div className="profile-card min-h-[96px] w-full"></div>
      <img src="/images/woman-2.avif" alt="" className='w-[100px] h-[100px] object-cover rounded-full -mt-12 bg-white p-1 shadow-md outline-white outline-2 outline-offset-2' />
      <h1 className='text-xl font-bold text-black font-sans my-2'>Yemisi Adesanya</h1>
      <ul className='inline-flex flex-col space-y-2 w-[250px] mt-2 items-center'>
        <li><i className="fa-solid fa-envelope mr-2" /> Yemisadesanya@gmail.com</li>
        <li><i className="fa-solid fa-people-group mr-2" /> PYO Fellows</li>
        <li><i className="fa-solid fa-location-dot mr-2" /> Nigeria</li>
      </ul>
      <hr className='w-[80%] h-[1px] mt-4'/>
      <ul className='inline-flex space-x-3 mt-2'>
        <a href="#"><i className="fa-brands text-xl fa-facebook"></i></a>
        <a href="#"><i className="fa-brands text-xl fa-twitter"></i></a>
        <a href="#"><i className="fa-brands text-xl fa-instagram"></i></a>
        <a href="#"><i className="fa-brands text-xl fa-linkedin"></i></a>
      </ul>
    </div>
  )
}

export default ProfileCard;