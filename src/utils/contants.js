import HOME_IMAGE from "../assets/home.png";
import ABOUT_ME from "../assets/profile.png";
import PROJECTS from "../assets/projects.png";

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

// Printfresh
import PF_BANNER_IMG from "../assets/pf/banner.png";
import PF_PROFILE_IMG from "../assets/pf/profile.png";
import PF_ALL_POSSIBLE_OPT_IMG from "../assets/pf/allpossibleOption.png";
import PF_BLOG_EDITING_IMG from "../assets/pf/blogEditing.png";
import PF_DRGGING_IMG from "../assets/pf/dragging.png";
import PF_QUICKSHOP_IMG from "../assets/pf/quickShp.png";
import PF_STOREFRONT_BLOG_IMG from "../assets/pf/storefrontBlog.png";
// Printfresh

//Recharge Custom Portal
import RECHARGE_BANNER_IMG from "../assets/rechargePortal/banner.png";
import RECHARGE_PROFILE_IMG from "../assets/rechargePortal/profile.png";
import RECHARGE_DISCOUNT_IMG from "../assets/rechargePortal/discount.png";
import RECHARGE_EDIT_INFO_IMG from "../assets/rechargePortal/editInfo.png";
import RECHARGE_MANAGE_SUB_IMG from "../assets/rechargePortal/managSubTab.png";
import RECHARGE_PREVIOUS_IMG from "../assets/rechargePortal/previousOrder.png";
import RECHARGE_SUB_DETAIL_IMG from "../assets/rechargePortal/subscriptionDetailModal.png";
import RECHARGE_UPCOMING_IMG from "../assets/rechargePortal/upcomingOrder.png";
//Recharge Custom Portal

//Nextrition Form
import NEXTRITIONFORM_BANNER_IMG from "../assets/nextritionForm/banner.png";
import NEXTRITIONFORM_PROFILE_IMG from "../assets/nextritionForm/profile.png";
import NEXTRITIONFORM_ACTIVITY_IMG from "../assets/nextritionForm/activity.png";
import NEXTRITIONFORM_ADMIN_DASHBOARD_IMG from "../assets/nextritionForm/adminDashboard.png";
import NEXTRITIONFORM_ALLERGIES_IMG from "../assets/nextritionForm/allergies.png";
import NEXTRITIONFORM_RESULT_IMG from "../assets/nextritionForm/result.png";
//Nextrition Form

//Technicron
import TECHNICRON_BANNER_IMG from "../assets/technicron/banner.png";
import TECHNICRON_PROFILE_IMG from "../assets/technicron/profile.png";
import TECHNICRON_CONTACT_MOBILE_IMG from "../assets/technicron/contactusmobile.png";
import TECHNICRON_DESKTOP_HOME_IMG from "../assets/technicron/desktop.png";
import TECHNICRON_MOBILE_HOME_IMG from "../assets/technicron/mobileHome.png";
import TECHNICRON_CONSTACTUS_DESKTOP_IMG from "../assets/technicron/constactusDesktop.png";
//Technicron

//MCQs Learning
import MCQS_BANNER_IMG from "../assets/mcsLearning/banner.png";
import MCQS_PROFILE_IMG from "../assets/mcsLearning/profile.png";
import MCQS_DASHBOARD_IMG from "../assets/mcsLearning/dashboard.png";
import MCQS_DESKTOPVIEW_IMG from "../assets/mcsLearning/desktopMcq.png";
import MCQS_MOBILEVIEW_IMG from "../assets/mcsLearning/mobilemcq.png";
import MCQS_TABLETVIEW_IMG from "../assets/mcsLearning/tabletMcq.png";
//MCQs Learning

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
    images: [
      {
        img: PF_ALL_POSSIBLE_OPT_IMG,
        desc: "This is the options modal. Here admin can see all the possible options for the blog creation and select anyone of them to create a blog.",
      },
      {
        img: PF_BLOG_EDITING_IMG,
        desc: "This is the blog editing page. Here admin can edit the blog and can see the live preview of the blog on the right side.",
      },
      {
        img: PF_DRGGING_IMG,
        desc: "In this picture admin is dragging the blog section to change the order of the blog sections.",
      },
      {
        img: PF_QUICKSHOP_IMG,
        desc: "This is the quick shop modal. Here user can see the details of the product and can add it to cart. This modal was totally created from JS.",
      },
      {
        img: PF_STOREFRONT_BLOG_IMG,
        desc: "This is the storefront blog page. Here user can see the blogs created by the admin.",
      },
    ],
  },
  {
    title: "Recharg Custom Portal",
    description:
      "Created a custom customer portal, where users can handle their subscriptions, view their upcoming orders details, previous orders and their details, update upcoming order and there delivery date, swap a product, update their payment method using Shopify update address and personal information",
    bannerImage: RECHARGE_BANNER_IMG,
    profileImage: RECHARGE_PROFILE_IMG,
    navlink: "/RechargeCustomPortal",
    images: [
      {
        img: RECHARGE_DISCOUNT_IMG,
        desc: "This is the discount modal. Here user can apply discount on their subscription.",
      },
      {
        img: RECHARGE_EDIT_INFO_IMG,
        desc: "This is the edit info modal. Here user can edit their personal information.",
      },
      {
        img: RECHARGE_MANAGE_SUB_IMG,
        desc: "This is the manage subscription page. Here user can see their subscription details and can reschedule them.",
      },
      {
        img: RECHARGE_PREVIOUS_IMG,
        desc: "This is the previous order page. Here user can see their previous orders and can see the details of the order.",
      },
      {
        img: RECHARGE_SUB_DETAIL_IMG,
        desc: "This is the manage subscription modal. Here user can see their subscription details change the quantity, cancel the subscription, change frequency and can swap the product.",
      },
      {
        img: RECHARGE_UPCOMING_IMG,
        desc: "This is the upcoming order page. Here user can see their upcoming orders and can see the details of the order.",
      },
    ],
  },
  {
    title: "Nextrition Form",
    description:
      "A quiz app. It is a full-stack project built with React, NodeJS, ExpressJS, MongoDB. By providing the information for their pet they get the products subscription",
    bannerImage: NEXTRITIONFORM_BANNER_IMG,
    profileImage: NEXTRITIONFORM_PROFILE_IMG,
    navlink: "/NextritionForm",
    images: [
      {
        img: NEXTRITIONFORM_ACTIVITY_IMG,
        desc: "This is the activity page. Here user can select the activity level of their pet.",
      },
      {
        img: NEXTRITIONFORM_ADMIN_DASHBOARD_IMG,
        desc: "This is the admin dashboard page. Here admin can see the details of the user and can see the result of the user.",
      },
      {
        img: NEXTRITIONFORM_ALLERGIES_IMG,
        desc: "This is the allergies page. Here user can select the allergies of their pet.",
      },
      {
        img: NEXTRITIONFORM_RESULT_IMG,
        desc: "This is the result page. Here user can see the result of the quiz. User can also see the details of the products as well as which one is recommended for their pet and which one is not recommended for their pet.",
      },
    ],
  },
  {
    title: "Technicron",
    description:
      "An HTML template created in tailwindcss. It is a fully responsive website with a mobile-first approach.",
    bannerImage: TECHNICRON_BANNER_IMG,
    profileImage: TECHNICRON_PROFILE_IMG,
    navlink: "/Technicron",
    images: [
      {
        img: TECHNICRON_CONTACT_MOBILE_IMG,
        desc: "This is the contact us page. Here user can see the contact details of the company. This page is for mobile view.",
      },
      {
        img: TECHNICRON_DESKTOP_HOME_IMG,
        desc: "This is the home page. This page is for desktop view.",
      },
      {
        img: TECHNICRON_MOBILE_HOME_IMG,
        desc: "This is the home page. This page is for mobile view.",
      },
      {
        img: TECHNICRON_CONSTACTUS_DESKTOP_IMG,
        desc: "This is the contact us page. Here user can see the contact details of the company. This page is for desktop view.",
      },
    ],
  },
  {
    title: "MCQs Learning",
    description:
      "A NextJS app. It was built with React, NextJS, NodeJS, ExpressJS, Postgres. It is a fully responsive website with a mobile-first approach.",
    bannerImage: MCQS_BANNER_IMG,
    profileImage: MCQS_PROFILE_IMG,
    navlink: "/MCQsLearning",
    images: [
      {
        img: MCQS_DASHBOARD_IMG,
        desc: "This is the dashboard page. Here user can see the select subject they are willing to give the test.",
      },
      {
        img: MCQS_DESKTOPVIEW_IMG,
        desc: "This is the test page. This page is for desktop view.",
      },
      {
        img: MCQS_MOBILEVIEW_IMG,
        desc: "This is the test page. This page is for mobile view.",
      },
      {
        img: MCQS_TABLETVIEW_IMG,
        desc: "This is the test page. This page is for tablet view.",
      },
    ],
  },
];

export const NAV_ARRAY = [
  {
    link: "/",
    title: "Home",
    img: HOME_IMAGE,
  },
  {
    link: "/Projects",
    title: "Projects",
    img: PROJECTS,
  },
  {
    link: "/AboutMe",
    title: "About Me",
    img: ABOUT_ME,
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
