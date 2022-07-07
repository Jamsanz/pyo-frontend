import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface IMessage {
  text?: string;
  name?: string
}
export const Message: IMessage[] = [
  {
    text: '"Osinbajo is the pride of Nigeria"',
    name: "Nigerian Supreme Council for Islamic Affairs (NSCIA)",
  },
  {
    text: '"Osinbajo has demonstrated God’s Wisdom"',
    name: "Pst. E.A. Adeboye",
  },
  {
    text: '"You are a model of a person combining religious commitment with public administration. You have done that creditably well. Mr Vice President, we want to thank you on behalf of the Muslim community of this country. You are a pride to this nation; we thank you and pray that God will continue to be with you."',
    name: "Ishaq Oloyede, former Secretary-General of NSCIA",
  },
  {
    text: "Prof. Osinbajo has shown great character, intellect, and professional knowledge in serving Nigeria",
    name: "Tinubu",
  },
  {
    text: '"Osinbajo has provided excellent leadership"',
    name: "El-Rufai",
  },
  {
    text: '"The point is it is easy to criticise. A lot of people don’t know the role that man is playing there. He is the ‘sole light’ in the midst of darkness in Aso Villa and he is doing his best"',
    name: "Bishop Wale Oke",
  },
  {
    text: '"In public and personal lives, Prof Osinbajo has demonstrated that the most worthy service is that ​carried out for the good of fellow human beings even for no personal gains and comfort"',
    name: "Rauf ​Aregbesola",
  },
  {
    text: "Can we borrow VP Yemi Osinbajo for about 4 years—starting in 2020? Our nation needs leaders like him",
    name: "Joel Rainey (Pastor of Covenant Church, United States of America)",
  },
  {
    text: '"You’re a man of deep social conscience"',
    name: "El-Rufai tells Osinbajo",
  },
  {
    text: '"VP Demonstrates Capacity in Handling State Matters"',
    name: "Gombe Gov Alhaji Muhammadu Inuwa Yahaya",
  },
  {
    text: '"We are building on your solid judiciary foundation, Attorneys-General tell Osinbajo"',
    name: "Mr. Moyosore ​Onigbanjo SAN",
  },
  {
    text: '"Nigeria will Find Solution To Challenges Through Osinbajo Leadership"',
    name: "Revd Dr Supo Ayokunle",
  },
  {
    text: "Osinbajo is a problem solver",
    name: "Buhari",
  },
  {
    text: '"You (Prof. Osinbajo) are a bridge builder; you are a pastor who is friends with Imams and emirs; you are ​a professor who can speak the language of ordinary people."',
    name: "Gov Nasir El-Rufai",
  },
  {
    text: '"Osinbajo\'s Leadership Style Fascinates Faith Leaders"',
    name: "Says CAN President",
  },
  {
    text: '"Whether Christians or Muslims or traditional worshipers, they all agree ​with me that you (Osinbajo) are the sanest vice president we have ever ​seen"',
    name: "Mr Kure, (the founder of Throne Room Ministry, Kafanchan)",
  },
  {
    text: '"Osinbajo, the most honest person I have ever met"',
    name: "Gbajabiamila",
  },
  {
    text: '"Osinbajo loves Muslims, not pursuing religious agenda"',
    name: "MURIC",
  },
  {
    text: '"Vice President, Prof Yemi Osinbajo is a change agent."',
    name: "Senator Ovie Omo-Agege (Deputy President of ​the Nigerian Senate)",
  },
  {
    text: '"You\'re A Reliable Deputy"',
    name: "Buhari Tells Osinbajo",
  },
];

const MessageCarousel = () => {
  return (
    <>
      <div className=" bg-[#53575B] text-center lg:py-10">
        <Swiper
          autoplay={{
            delay: 8000,
          }}
          modules={[Autoplay]}
          className="mySwiper md:w-[85%] text-center mx-auto self-center"
        >
          {Message?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="py-4 lg:pt-4 pb-8 self-center">
                  <p className=" text-2xl lg:text-4xl mb-4 text-white italic">
                    {item.text}
                  </p>
                  <p className="text-xl lg:text-3xl mb-4 text-white playFont">
                    ~ {item.name}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default MessageCarousel;
