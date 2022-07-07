import axios from "axios";

export const http = axios.create({
  baseURL: "https://pyo-institute-backend.herokuapp.com/",
});

export const getUser = () => ({
  _id: localStorage.getItem("token"),
  email: localStorage.getItem("useremail"),
  firstName: localStorage.getItem("firstName"),
  lastName: localStorage.getItem("lastName"),
  country: localStorage.getItem("country"),
});


export const handleScroll = () => {
  var header: any = document.getElementById("header");
  var navcontent: any = document.getElementById("nav-content");
  var navaction: any = document.getElementById("navAction");
  var toToggle: any = document.querySelectorAll(".toggleColour");
  /*Apply classNamees for slide in bar*/
  const scrollpos = window.scrollY;

  if (scrollpos > 10) {
    header?.classList.add("bg-white");
    navaction?.classList.remove("bg-white");
    navaction?.classList.add("gradient");
    navaction?.classList.remove("text-gray-800");
    navaction?.classList.add("text-black");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-gray-800");
      toToggle[i].classList.remove("text-white");
    }
    header.classList.add("shadow");
    navcontent.classList.remove("bg-gray-100");
    navcontent.classList.add("bg-white");
  } else {
    header.classList.remove("bg-black");
    navaction?.classList.remove("gradient");
    navaction?.classList.add("bg-white");
    navaction?.classList.remove("text-white");
    navaction?.classList.add("tex-white");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-white");
      toToggle[i].classList.remove("text-gray-800");
    }

    header.classList.remove("shadow");
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-gray-100");
  }
};

export interface IReadMore  {
  id?: number,
  title?: string,
  slug?: string,
  images?: string,
  text1?: string,
  text2?: string,
  text3?: string,
  text4?: string
}

export const pyoFellowship:IReadMore[] = [
  {
    id: 1,
    title: "PYO Fellows",
    images: "images/1 3.png",
    text1:
      "A proposed one-year fellowship which will be offered on a yearly basis is aimed at building a network of high-potential young Nigerians who are already making a difference in their communities.",
  },
  {
    id: 2,
    title: "PYO New Tribe (White-Collar)",
    images: "images/2 3.png",
    text1:
      "PYO New Tribe White Collar will bring together various age groups and demographics, to create awareness and develop a nuanced perspective among Nigerians to tackle challenges in various fields in the public and private sectors.",
  },
  {
    id: 3,
    title: "PYO New Tribe (Blue-Collar)",
    images: "images/3 3.png",
    text1:
      "The PYO New Tribe Blue-Collar will provide funding, skills development programmes and capacity building across various blue collar demographics such as market women, taxi drivers, okada riders, artisans etc."
  }
];

export const readMore:IReadMore[] = [
  {
    id: 1,
    text2:
      " PYO Fellows program will include creating a sustainable opportunity to take their work to the next level through an immersive curriculum that combines academic, skills-based, and hands-on learning, and providing opportunities for them to rise to top leadership positions in the public sector.",
    text3:
      "For Young Graduates and Professionals, Entrepreneurs, Artisans etc.",
  },
  {
    id: 2,
    text2:
      " The program will establish cells and social clubs in schools and universities with the aim of instilling the importance of values-based leadership, good governance, and hard work in children and young adult professionals. This will also involve breakfast meetings and discussion sessions on various conversational topics over the next few months. PYO New Tribe White Collar will have access to co-create and implement projects around sustainable development goals. ",
    text3:
      "For Young Graduates and Professionals (Entrepreneurs, private and public sector professionals)",
  },
  {
    id: 3,
    text2:
      " The project will coordinate and support these groups with tools and advisory for business development, supporting them with their daily businesses while engaging and indoctrinating them with the values of the PYO Insititute. ",
    text4: "The project will also seek to support these groups with loans, grants, and equipment for work through non-government organizations, loan organizations, UN bodies, etc. The beneficiaries will receive various training packages which will include selling the values and ideals of PYO Institute.",
    text3:
      "For  Artisans, Market women and men, and workers in the service industry (bikes, taxis etc)",
  },
];
export const pyoInstitute: IReadMore[] = [
  {
    id: 1,
    title: "Global Institute for Governance",
    images: "images/4.png",
    text1:
      "PYO Global Institute for Governance aims to develop exceptionally passionate, principled, and innovative governmental, corporate, and civil society leaders while also establishing itself as a global governance and leadership institute of repute with a long-term impact on national and corporate governance, ultimately accelerating the sustainable development of communities in Nigeria and around the world. ",
  },
  {
    id: 2,
    title: "PYO - Tech for Growth",
    slug: "(Tech 4 Growth)",
    images: "images/5.png",
    text1:
      "PYO-Tech for Growth initiative seeks to facilitate growth in the technology and creative ecosystem in order to boost innovation, create employment, encourage entrepreneurship, improve social development, and achieve economic transformation. ICTs can assist underprivileged communities in obtaining, managing, and disseminating knowledge, as well as connecting to global information and service networks. ",
  },
  {
    id: 3,
    title: "PYO - Just Energy Transition",
    slug: "(JET)",
    images: "images/6.png",
    text1:
      "PYO Just Energy Transition is based on two grounds: that collective global action is necessary to address the drivers and consequences of climate change; and the transformational change required to solve these challenges for economies, societies, and the global commons has the potential to affect some stakeholders while benefiting others. ",
  },
];

export const readMoreInstitute:IReadMore[] = [
  {
    id: 1,
    text2:
      "PYO Global Institute for Governance, as a non-profit independent institute and a 'Think Tank,' will advocate the principles of Effective Public Administration and Sustainable Development through cutting-edge research & advocacy, with a primary focus on teaching good governance and leadership to young leaders from various streams.",
    text3:
      "For Professionals (Junior level, Mid-level and Advanced level), Political aspirants and Leaders.",
  },
  {
    id: 2,
    text2:
      "Through Digital entrepreneurship skills, Venture funding and Business development, the goal of the skills and enterprise development component is to harness Nigeria's young talent pool and equip them with digital and creative skills in order to boost their employability, stimulate innovation in both ecosystems, and support the emergence of more entrepreneurs.",
    text3:
      "For Students (Primary, Secondary and University Students), Young Graduates and  Professionals (Entrepreneurs, Artisans, Market Women).",
  },
  {
    id: 3,
    text2:
      "The PYO-JET Initiative is aligned with the Climate Investment Funds (CIF) view that just energy transitions to low-carbon and climate-resilient development can create opportunities for social equity, environmental sustainability and economic prosperity. ",
    text4: "As societies transition to low-carbon and resilient economies, PYO-JET's framework will focus on promoting equitable access to the benefits and sharing of the costs of sustainable development, ensuring that the livelihoods of all people, including the most vulnerable, are supported and enhanced.",
    text3:
      "For Young Graduates, Professionals (Junior level, Mid level and Advanced Level) and Entrepreneurs",
  },
];