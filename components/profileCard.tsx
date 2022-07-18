import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { siteUrl } from '../utils/constant';
import { https } from '../utils/utils';

interface Info {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  group: string;
}

const ProfileCard = () => {
  const [id, setId] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [initial, setInitial] = useState<string>("");


  useEffect(() => {
    setEmail(localStorage.getItem('useremail')!);
    setFirstName(localStorage.getItem('firstName')!);
    setLastName(localStorage.getItem('lastName')!);
    setId(localStorage.getItem('token')!);
    setInitial(firstName.charAt(0) + " " + lastName.charAt(0))

  }, []);

  

  
  return (
    <div className="hidden hover:scale-110 lg:flex flex-col items-center bg-white shadow-md min-w-[300px] min-h-[400px] max-h-[400px] max-w-[350px] rounded-lg overflow-hidden mx-4">
      <div className="profile-card w-full"></div>
      <img
        src={`https://via.placeholder.com/200x200.png/000/fff/?text=${firstName}`}
        alt=""
        className="w-[100px] h-[100px] object-cover rounded-full -mt-12 bg-white p-1 shadow-md outline-white outline-2 outline-offset-2"
      />
      <h1 className="text-xl font-bold text-black font-sans my-2">
        {firstName + " " + lastName}
      </h1>
      <ul className="inline-flex flex-col space-y-2 w-[250px] mt-2 items-center">
        <li>
          <i className="fa-solid fa-envelope mr-2" /> {email}
        </li>
        <li>
          <i className="fa-solid fa-people-group mr-2" /> PYO Fellows
        </li>
        <li>
          <i className="fa-solid fa-location-dot mr-2" /> Nigeria
        </li>
      </ul>
      <hr className="w-[80%] h-[1px] mt-4 text-xl" />
      <ul className="inline-flex space-x-3 my-2">
        <FacebookShareButton
          url={`${siteUrl}/profile/${id}`}
          quote="PYO Institute Message Gallery"
          hashtag="pyoinstitute"
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={`${siteUrl}/profile/${id}`}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={`${siteUrl}/profile/${id}`}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
      </ul>
    </div>
  );
}

export default ProfileCard;