import HOME_IMAGE from "../assets/home.png";
import PROFILE from "../assets/profile.png";

import PF_BANNER_IMG from "../assets/pf/banner.png";
import PF_PROFILE_IMG from "../assets/pf/profile.png";
import RECHARGE_BANNER_IMG from "../assets/rechargePortal/banner.png";
import RECHARGE_PROFILE_IMG from "../assets/rechargePortal/profile.png";
import NEXTRITIONFORM_BANNER_IMG from "../assets/nextritionForm/banner.png";
import NEXTRITIONFORM_PROFILE_IMG from "../assets/nextritionForm/profile.png";
import TECHNICRON_BANNER_IMG from "../assets/technicron/banner.png";
import TECHNICRON_PROFILE_IMG from "../assets/technicron/profile.png";
import MCQS_BANNER_IMG from "../assets/mcsLearning/banner.png";
import MCQS_PROFILE_IMG from "../assets/mcsLearning/profile.png";

import A_ALPHABET_IMG from "../assets/a.png";
import P_ALPHABET_IMG from "../assets/p.png";
import N_ALPHABET_IMG from "../assets/n.png";
import M_ALPHABET_IMG from "../assets/m.png";
import R_ALPHABET_IMG from "../assets/r.png";
import T_ALPHABET_IMG from "../assets/t.png";

//APEXgAMING
import APEX_BANNER_IMG from "../assets/apex/banner.png";
import APEX_PROFILE_IMG from "../assets/apex/profile.png";
import CONFIGURATOR_IMG from "../assets/apex/configurator.png";
import FPS_IMG from "../assets/apex/fps.png";
import GROUPS_IMG from "../assets/apex/groups.png";
import PDP_IMG from "../assets/apex/pdp.png";
import RECOMMENDED_PROD_IMG from "../assets/apex/recommendedProducts.png";
//APexGaming

export const ALL_PROJECTS = [
  {
    title: "Apex Gaming",
    description:
      "Apex Gaming is a custom PC builder website. It is a full-stack project built with React, Polaris, NodeJS, ExpressJS, MongoDB, and Ant Design. It is a fully responsive website with a mobile-first approach.",
    bannerImage: APEX_BANNER_IMG,
    profileImage: APEX_PROFILE_IMG,
    navlink: "/ApexGaming",
    images: [
      {
        img: CONFIGURATOR_IMG,
        desc: "This is the configurator page. Here user can select the parts for their PC. On selection of few products if their compatibality is not matching then it will show the error message and will scroll to compatibal parts. User can also select the pre-build PC.",
      },
      {
        img: FPS_IMG,
        desc: "This is the FPS page. Here admin can set the FPS for each game and can link these fps to to perticular products in result when user will select GPUs games will appear will the FPS that were assigned here.",
      },
      {
        img: GROUPS_IMG,
        desc: "This is the groups page. Here admin can create groups and can assign products to these groups. These groups will appear as parent title in configurator modal",
      },
      {
        img: PDP_IMG,
        desc: "This is the PDP page. Here user can see the details of the product and can add it to cart.",
      },
      {
        img: RECOMMENDED_PROD_IMG,
        desc: "This is the recommended products section. User can assign any products on the admin dashbaord to a product which will be visible on the PDP of that product. user can add these products to cart",
      },
    ],
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
    profileImage: RECHARGE_PROFILE_IMG,
    navlink: "/RechargeCustomPortal",
  },
  {
    title: "Nextrition Form",
    description:
      "A quiz app. It is a full-stack project built with React, NodeJS, ExpressJS, MongoDB. By providing the information for their pet they get the products subscription",
    bannerImage: NEXTRITIONFORM_BANNER_IMG,
    profileImage: NEXTRITIONFORM_PROFILE_IMG,
    navlink: "/NextritionForm",
  },
  {
    title: "Technicron",
    description:
      "An HTML template created in tailwindcss. It is a fully responsive website with a mobile-first approach.",
    bannerImage: TECHNICRON_BANNER_IMG,
    profileImage: TECHNICRON_PROFILE_IMG,
    navlink: "/Technicron",
  },
  {
    title: "MCQs Learning",
    description:
      "A NextJS app. It was built with React, NextJS, NodeJS, ExpressJS, Postgres. It is a fully responsive website with a mobile-first approach.",
    bannerImage: MCQS_BANNER_IMG,
    profileImage: MCQS_PROFILE_IMG,
    navlink: "/MCQsLearning",
  },
];

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
  {
    link: "/ApexGaming",
    title: "Apex Gaming",
    img: A_ALPHABET_IMG,
  },
  {
    link: "/Printfresh",
    title: "Printfresh",
    img: P_ALPHABET_IMG,
  },
  {
    link: "/RechargeCustomPortal",
    title: "Recharge Custom Portal",
    img: R_ALPHABET_IMG,
  },
  {
    link: "/NextritionForm",
    title: "Nextrition Form",
    img: N_ALPHABET_IMG,
  },
  {
    link: "/Technicron",
    title: "Technicron",
    img: T_ALPHABET_IMG,
  },
  {
    link: "/MCQsLearning",
    title: "MCQs Learning",
    img: M_ALPHABET_IMG,
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
