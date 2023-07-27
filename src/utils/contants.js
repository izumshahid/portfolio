import HOME_IMAGE from "../assets/home.png";
import PROFILE from "../assets/profile.png";
import APEX_BANNER_IMG from "../assets/apex/banner.png";
import APEX_PROFILE_IMG from "../assets/apex/profile.png";
import PF_BANNER_IMG from "../assets/pf/banner.png";
import PF_PROFILE_IMG from "../assets/pf/profile.png";
import RECHARGE_BANNER_IMG from "../assets/rechargePortal/banner.png";

export const NAV_ARRAY = [
  {
    link: "/",
    title: "Dashboard",
    img: HOME_IMAGE,
  },
  {
    link: "/Profile",
    title: "Profile",
    img: PROFILE,
  },
  // {
  //   link: "/GeneralAptitude",
  //   title: "General Aptitude",
  //   img: APTITUDE_IMAGE,
  //   children: [
  //     {
  //       link: "/ArithmeticAptitude",
  //       title: "Arithmetic Aptitude",
  //       img: NAV_CHILD_BEND_ARROW,
  //     },
  //     {
  //       link: "/DataInterpretation",
  //       title: "Data Interpretation",
  //       img: NAV_CHILD_BEND_ARROW,
  //     },
  //     {
  //       link: "/OnlineAptituteTest",
  //       title: "Online Aptitute Test",
  //       img: NAV_CHILD_BEND_ARROW,
  //     },
  //     {
  //       link: "/DataInterpretationTest",
  //       title: "Data Interpretation Test",
  //       img: NAV_CHILD_BEND_ARROW,
  //     },
  //   ],
  // },
];

export const SKILLS_ARR = [
  {
    title: "JavaScript",
  },
  {
    title: "NodeJS",
  },
  {
    title: "ExpressJS",
  },
  {
    title: "React",
  },
  {
    title: "Ant Design",
  },
  {
    title: "CoreUI",
  },
  {
    title: "HTML",
  },
  {
    title: "CSS",
  },
  {
    title: "Bootstrap",
  },
  {
    title: "TailwindCSS",
  },
  {
    title: "Redux",
  },
  {
    title: "Context API",
  },
  {
    title: "Fetch API",
  },
  {
    title: "Axios",
  },
  {
    title: "JWT",
  },
  {
    title: "HTML",
  },
  {
    title: "MongoDB",
  },
  {
    title: "PostgreSQL",
  },
  {
    title: "NextJS",
  },
  {
    title: "Digital Ocean",
  },
  {
    title: "Vercel",
  },
  {
    title: "NGINX",
  },
  {
    title: "PM2",
  },
  {
    title: "AWS EC2",
  },
  {
    title: "Heroku",
  },
  {
    title: "Git",
  },
  {
    title: "GitHub",
  },
  {
    title: "Cloudflare",
  },
  {
    title: "Google Tag Manager",
  },
  {
    title: "Shopify",
  },
  {
    title: "Contentful",
  },
  {
    title: "GasbyJS",
  },
];

export const INTERESTS = [
  {
    title: "Movies & TV Shows",
  },
  {
    title: "Technology",
  },
  {
    title: "Gaming",
  },
  {
    title: "Travelling & Exploring",
  },
  {
    title: "Sports",
  },
  {
    title: "Driving",
  },
];

export const ALL_PROJECTS = [
  {
    title: "Apex Gaming",
    description:
      "Apex Gaming is a custom PC builder website. It is a full-stack project built with React, Polaris, NodeJS, ExpressJS, MongoDB, and Ant Design. It is a fully responsive website with a mobile-first approach.",
    bannerImage: APEX_BANNER_IMG,
    profileImage: APEX_PROFILE_IMG,
    navlink: "/ApexGaming",
  },
  {
    title: "Printfresh",
    description:
      "Printfresh is a Shopify website. It is a fully responsive website with a mobile-first approach. It is a custom theme built with Javascript, GQL.",
    bannerImage: PF_BANNER_IMG,
    profileImage: PF_PROFILE_IMG,
    navlink: "/Printfresh",
  },
  {
    title: "Recharg Custom Portal",
    description:
      "Customer portal for handling shopify subscription products. It was build with React, ContextApi, Ant Design, ExpressJS, MongoDB, Recharg's API & Shopify's API.",
    bannerImage: RECHARGE_BANNER_IMG,
    profileImage: PF_PROFILE_IMG,
    navlink: "/RechargeCustomPortal",
  },
];
