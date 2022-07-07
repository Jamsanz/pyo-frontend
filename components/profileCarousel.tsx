import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface IProfile {
  img?: string,
  title?: string,
  date?: string,
  text?: string,
  text2?: string,
  text3?: string,
  text4?: string,
  
}
export const Profile: IProfile[] = [
  {
    // img: "/images/contribution/profile.jpg",
    title: "Oluyemi Oluleke Osinbajo",
    date: "",
    text: "Born on the 8 March 1957 Lagos",

  },

  {
    date: "1975- 1980",
    title: "Education",
    text: "Graduate of the University of Lagos \n Nigeria Law School \n School of Economics",
  },
  {
    date: "1997- 1999",
    title: "Achieved Professorship",
    text: "Professor of Law and appointed as Head of ​Department of Public Law, University of Lagos.",
  },
  {
    date: "1999 - 2007",
    title: "Member of Cabinet",
    text: "Prof. Yemi Osinbajo is elected as a Member of the ​Cabinet of the Lagos State Government where he ​served as Attorney-General and Commissioner for ​Justice",
    text2: "Established the Office of the Public Defender ​(OPD)",
    text3:
      "Member, United Nations Secretary General's ​Committee of Experts on Conduct and Discipline of ​UN, Peacekeeping Personnel around the globe, ​Member, 2006.",
  },
  {
    date: "2007 – 2013",
    title: "Professor of Law",
    text: "Employed as a Professor of Law, Department ​of Public Law, Faculty of Law, University of Lagos.",
    text2: "Became Senior Partner at SimmonsCooper ​Partners, Nigeria",
  },
  {
    date: "2013- 2014",
    title: "All Progressive Congress (APC)",
    text: "Development of a manifesto for the All Progressives ​Congress (APC)",
    text2:
      'Prof. Yemi Osinbajo presented the "Roadmap to a ​New Nigeria", a document published by APC as its ​manifesto in 2013.',
    text3:
      "The presidential candidate of the All Progressives ​Congress, retired General Muhammadu Buhari, ​announced Osinbajo as his running mate and vice-​presidential candidate for the 2015 general ​elections",
  },
  {
    date: "2015 - 2022",
    title: "Vice Presidential terms",
    text: "Prof Yemi Osinbajo was sworn in as the Vice ​President-elect of Nigeria, in 2015",
    text2:
      "In 2017, he became Acting President during ​President Buhari's medical leave",
    text3:
      "On 29 May 2019, Professor Yemi Osinbajo took his ​oath of office to begin his second term at Eagle ​Square in the capital of Abuja",
    text4:
      "In 2020, President Muhammadu Buhari appointed ​Vice president Osinbajo to chair an economic ​sustainability committee.",
  },
  {
    title: "Membership Associations",
    text: "Member- International Bar Association\n Member- British Institute of International and ​Comparative Law \n Member- Nigerian Body of Benchers and the Council ​for Legal Education of Nigeria \nIndependent Director- CitiBank Nigeria \nEthics Adviser- African Development Bank (AfDB)",
  },
  {
    date: "2022 - Date",
    title: "PYO Institute for Global Governance",
    text: "Prof. Yemi Osinbajo launched the PYO Institute for Global Governance",
    text2: 'Launched the "New Tribe" movement for white-collar and blue-collar employees in ​Nigeria',
    text3: "Launched the PYO Fellowship for Elite youths in Africa, Tech4Growth and Just Energy ​Initiatives.",
  },
];

const ProfileCarousel = () => {
    return (
      <div className="pt-12 lg:pt-16 lg:pb-12 bg-white border-black border-b-[1px] border-b-solid  mx-0 lg:mx-20">
        <h1 className=" px-5 lg:px-20 my-4 pb-10 text-[30px] md:text-4xl font-bold text-center leading-tight text-[#000]">
          Chronology of Prof. Yemi Osinbajo's Career
        </h1>
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row text-black items-center">
          <div
            className="flex flex-col w-full lg:w-2/6 justify-start boxShadow4 rounded-2xl"
            style={{
              background: "url('/images/profile.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right top",
              height: "550px",
            }}
          ></div>

          <Swiper
            navigation={true}
            autoplay={{
              delay: 4000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper w-full lg:w-[65%] text-center mx-auto self-center"
          >
            {Profile?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" pt-2 lg:pt-4 pb-8 mx-10 md:px-10 text-left self-center">
                    <p className="mb-4 text-lg lg:text-2xl text-[#53575B]">
                      {item.date}
                    </p>
                    <h1 className="font-bold text-2xl lg:text-5xl  mb-2 lg:mb-5">
                      {" "}
                      {item.title}
                    </h1>
                    <p className=" text-xl lg:text-3xl mb-2 lg:mb-4 text-[#53575B]">
                      {item.text}
                    </p>
                    <p className="text-xl lg:text-3xl mb-2 lg:mb-4 text-[#53575B]">
                      {item.text2}
                    </p>
                    <p className="text-xl lg:text-3xl  mb-2 lg:mb-4 text-[#53575B]">
                      {item.text3}{" "}
                    </p>
                    <p className="text-xl lg:text-3xl text-[#53575B]">
                      {item.text4}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
};

export default ProfileCarousel;
