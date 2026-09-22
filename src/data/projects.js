// Apex Gaming
import APEX_BANNER_IMG from "@/assets/apex/banner.png";
import CONFIGURATOR_IMG from "@/assets/apex/configurator.png";
import FPS_IMG from "@/assets/apex/fps.png";
import GROUPS_IMG from "@/assets/apex/groups.png";
import PDP_IMG from "@/assets/apex/pdp.png";
import RECOMMENDED_PROD_IMG from "@/assets/apex/recommendedProducts.png";

// Apex Inventory Management
import APEX_INVENTORY_BANNER from "@/assets/ApexInventory/banner.png";
import APEX_INVENTORY_ALLREPORTS from "@/assets/ApexInventory/allReports.png";
import APEX_INVENTORY_BREAKDOWN from "@/assets/ApexInventory/breakdown.png";
import APEX_INVENTORY_CHOOSEITEM from "@/assets/ApexInventory/chooseItemGlobally.png";
import APEX_INVENTORY_PART_DETAIL from "@/assets/ApexInventory/partDetailPage.png";
import APEX_INVENTORY_PERMISSIONS from "@/assets/ApexInventory/permissions.png";
import APEX_INVENTORY_ACQUISITION_REPORT from "@/assets/ApexInventory/qcquisitionReport.png";
import APEX_INVENTORY_QUEUE_POSITION from "@/assets/ApexInventory/queuePosition.png";
import APEX_INVENTORY_RMA from "@/assets/ApexInventory/rma.png";
import APEX_INVENTORY_SEQ_REORDER from "@/assets/ApexInventory/seqReOrder.png";

// Apex Software & QC
import APEX_WEB_BANNER from "@/assets/ApexWebApp/banner.png";
import APEX_WEB_LANDING from "@/assets/ApexWebApp/landing.png";
import APEX_WEB_ORDER_MAIN from "@/assets/ApexWebApp/OrderMainPage.png";
import APEX_WEB_ORDER_PARTS from "@/assets/ApexWebApp/OrderParts.png";
import APEX_WEB_SHIPPING_STATUS from "@/assets/ApexWebApp/shippingStatus.png";
import APEX_WEB_BUILD_STATUS from "@/assets/ApexWebApp/buildStatus.png";
import APEX_WEB_SETUP_STATUS from "@/assets/ApexWebApp/setupStatus.png";

// Apex Order Status
import APEX_ORDER_STATUS_BANNER from "@/assets/ApexOrderStatus/banner.png";
import APEX_ORDER_STATUS from "@/assets/ApexOrderStatus/orderstatus.png";
import APEX_ORDER_STATUS_LOGGEDIN from "@/assets/ApexOrderStatus/loggedInSupport.png";

// Printfresh
import PF_BANNER_IMG from "@/assets/pf/banner.png";
import PF_ALL_POSSIBLE_OPT_IMG from "@/assets/pf/allpossibleOption.png";
import PF_BLOG_EDITING_IMG from "@/assets/pf/blogEditing.png";
import PF_DRGGING_IMG from "@/assets/pf/dragging.png";
import PF_QUICKSHOP_IMG from "@/assets/pf/quickShp.png";
import PF_STOREFRONT_BLOG_IMG from "@/assets/pf/storefrontBlog.png";

// Recharge Custom Portal
import RECHARGE_BANNER_IMG from "@/assets/rechargePortal/banner.png";
import RECHARGE_DISCOUNT_IMG from "@/assets/rechargePortal/discount.png";
import RECHARGE_EDIT_INFO_IMG from "@/assets/rechargePortal/editInfo.png";
import RECHARGE_MANAGE_SUB_IMG from "@/assets/rechargePortal/managSubTab.png";
import RECHARGE_PREVIOUS_IMG from "@/assets/rechargePortal/previousOrder.png";
import RECHARGE_SUB_DETAIL_IMG from "@/assets/rechargePortal/subscriptionDetailModal.png";
import RECHARGE_UPCOMING_IMG from "@/assets/rechargePortal/upcomingOrder.png";

// Selli
import SELLI_DASHBAORD from "@/assets/selli/dashbaord.jpg";
import SELLI_BAR_GRAPH from "@/assets/selli/barGraph.jpg";
import SELLI_DASBHOARD_COMPLETE from "@/assets/selli/dashabordComplete.jpg";
import SELLI_PROD_COMP_GRAPH from "@/assets/selli/prodCompGraph.jpg";
import SELLI_REGIONAL_STATS from "@/assets/selli/regionalStats.jpg";
import SELLI_ROI from "@/assets/selli/roi.jpg";
import SELLI_VALUABLE_CUSTOMER from "@/assets/selli/valuablecustomer.jpg";

// Nextrition Form
import NEXTRITIONFORM_BANNER_IMG from "@/assets/nextritionForm/banner.png";
import NEXTRITIONFORM_ACTIVITY_IMG from "@/assets/nextritionForm/activity.png";
import NEXTRITIONFORM_ADMIN_DASHBOARD_IMG from "@/assets/nextritionForm/adminDashboard.png";
import NEXTRITIONFORM_ALLERGIES_IMG from "@/assets/nextritionForm/allergies.png";
import NEXTRITIONFORM_RESULT_IMG from "@/assets/nextritionForm/result.png";

// Technicron
import TECHNICRON_BANNER_IMG from "@/assets/technicron/banner.png";
import TECHNICRON_CONTACT_MOBILE_IMG from "@/assets/technicron/contactusmobile.png";
import TECHNICRON_DESKTOP_HOME_IMG from "@/assets/technicron/desktop.png";
import TECHNICRON_MOBILE_HOME_IMG from "@/assets/technicron/mobileHome.png";
import TECHNICRON_CONSTACTUS_DESKTOP_IMG from "@/assets/technicron/constactusDesktop.png";

// MCQs Learning
import MCQS_BANNER_IMG from "@/assets/mcsLearning/banner.png";
import MCQS_DASHBOARD_IMG from "@/assets/mcsLearning/dashboard.png";
import MCQS_DESKTOPVIEW_IMG from "@/assets/mcsLearning/desktopMcq.png";
import MCQS_MOBILEVIEW_IMG from "@/assets/mcsLearning/mobilemcq.png";
import MCQS_TABLETVIEW_IMG from "@/assets/mcsLearning/tabletMcq.png";

export const PROJECTS = [
  {
    slug: "apex-gaming",
    title: "Apex Gaming",
    category: "Commerce",
    tagline: "A custom PC configurator with real-time part compatibility.",
    summary:
      "A custom PC builder storefront. Customers configure a machine part by part, and the configurator validates compatibility as they go — incompatible selections surface an error and scroll the user to the parts that do fit. Admins manage product groups, per-GPU frame-rate data and recommended products from a dedicated dashboard.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Ant Design", "Polaris", "Shopify"],
    contributions: [
      "Built the configurator with live compatibility validation across part categories",
      "Admin tooling for product groups, FPS-per-GPU mapping and recommended products",
      "Product detail pages with add-to-cart and cross-sell modules",
    ],
    cover: APEX_BANNER_IMG,
    featured: true,
    gallery: [
      {
        img: CONFIGURATOR_IMG,
        title: "Configurator",
        desc: "Customers select parts for their build. When a combination isn't compatible the configurator raises an error and scrolls to the parts that will work. Pre-built machines can also be picked as a starting point.",
      },
      {
        img: FPS_IMG,
        title: "FPS management",
        desc: "Admins set expected frame rates per game and link them to specific GPUs. When a customer selects a GPU, the games render with the frame rates assigned here.",
      },
      {
        img: GROUPS_IMG,
        title: "Product groups",
        desc: "Admins create groups and assign products to them. Groups render as parent headings inside the configurator modal.",
      },
      {
        img: PDP_IMG,
        title: "Product detail page",
        desc: "Full product detail with add-to-cart.",
      },
      {
        img: RECOMMENDED_PROD_IMG,
        title: "Recommended products",
        desc: "Any product can be attached to another from the admin dashboard; the attached items surface on that product's detail page and can be added straight to cart.",
      },
    ],
  },
  {
    slug: "apex-inventory",
    title: "Apex Inventory Management",
    category: "Internal tooling",
    tagline: "Parts, purchase orders and build queues for a hardware business.",
    summary:
      "The inventory backbone for a custom PC operation. It tracks every part in stock, maps customer-facing product names to internal SKUs, prioritises the build queue by due date, handles RMAs and returns, and answers procurement questions like how many parts are needed to clear a given number of orders.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Ant Design"],
    contributions: [
      "Role-based permission system across the whole application",
      "Build queue prioritised by order priority and due date",
      "Procurement forecasting: parts needed per order volume or per budget",
      "CSV report exports and RMA handling with graphical breakdowns",
    ],
    cover: APEX_INVENTORY_BANNER,
    featured: true,
    gallery: [
      {
        img: APEX_INVENTORY_PART_DETAIL,
        title: "Part detail",
        desc: "Everything about a single part: how many orders need it, how many orders have already consumed it, and how many purchase orders have been raised against it.",
      },
      {
        img: APEX_INVENTORY_QUEUE_POSITION,
        title: "Build queue",
        desc: "Orders listed by priority and due date, so builds are fulfilled in the right sequence.",
      },
      {
        img: APEX_INVENTORY_SEQ_REORDER,
        title: "Procurement forecasting",
        desc: "Answers three questions: how many parts are needed to fulfil N orders, how many to reach a specific order number, and how many can be bought for a given budget.",
      },
      {
        img: APEX_INVENTORY_CHOOSEITEM,
        title: "Global item mapping",
        desc: "Internal part names and storefront product names didn't match. This maps a customer-facing name onto the inventory name so the two systems stay in sync.",
      },
      {
        img: APEX_INVENTORY_BREAKDOWN,
        title: "Order breakdown",
        desc: "When an order is cancelled it moves to breakdown, and every part allocated to that order is returned to available inventory.",
      },
      {
        img: APEX_INVENTORY_RMA,
        title: "RMA",
        desc: "Creates and tracks return orders, with a graphical view of return volume.",
      },
      {
        img: APEX_INVENTORY_PERMISSIONS,
        title: "Permissions",
        desc: "Role-based access control — admins review and assign permissions per user.",
      },
      {
        img: APEX_INVENTORY_ACQUISITION_REPORT,
        title: "Acquisition report",
        desc: "Reporting view for part acquisition over time.",
      },
      {
        img: APEX_INVENTORY_ALLREPORTS,
        title: "Report exports",
        desc: "Every report is exportable as CSV for use outside the system.",
      },
    ],
  },
  {
    slug: "apex-software-qc",
    title: "Apex Software & QC",
    category: "Internal tooling",
    tagline: "Post-build QA, fulfilment and UPS shipping automation.",
    summary:
      "Picks up where the inventory app stops. Once a machine is built, this system drives every remaining step — software and driver installation checks, peripheral verification, QA sign-off, packing and shipping. It integrates with UPS to generate tracking numbers and fulfils the matching order in Shopify.",
    stack: ["Node.js", "Express", "MVC", "UPS API", "Shopify API"],
    contributions: [
      "UPS integration generating tracking numbers and closing out Shopify fulfilment",
      "Step-by-step QA checklists for build, setup and shipping stages",
      "Per-order audit trail of who packed and who shipped",
    ],
    cover: APEX_WEB_BANNER,
    featured: false,
    gallery: [
      {
        img: APEX_WEB_LANDING,
        title: "Operations landing",
        desc: "Entry point showing every operation available in the application.",
      },
      {
        img: APEX_WEB_ORDER_MAIN,
        title: "Order lookup",
        desc: "Search any order to see where it sits — in build, in setup, or shipped.",
      },
      {
        img: APEX_WEB_ORDER_PARTS,
        title: "Order parts",
        desc: "Every part associated with the order.",
      },
      {
        img: APEX_WEB_BUILD_STATUS,
        title: "Build checklist",
        desc: "Technicians tick off each part as it goes into the machine, so nothing is missed before the build is signed off.",
      },
      {
        img: APEX_WEB_SETUP_STATUS,
        title: "Setup verification",
        desc: "Confirms software, drivers, peripherals and accessories are all present. RAM speed test results are emailed to the customer from this screen.",
      },
      {
        img: APEX_WEB_SHIPPING_STATUS,
        title: "Shipping",
        desc: "Shows who packed and who shipped the order, along with the tracking number. Draft orders are held back from shipping.",
      },
    ],
  },
  {
    slug: "apex-order-status",
    title: "Apex Order Status",
    category: "Customer-facing",
    tagline: "Public order tracking with a manual admin override.",
    summary:
      "A customer-facing tracker for build and delivery status. Support staff can log in and correct an order's stage manually when something goes wrong upstream in the fulfilment flow.",
    stack: ["Node.js", "Express", "MVC"],
    contributions: [
      "Public order status lookup for customers",
      "Authenticated support view with manual stage override",
    ],
    cover: APEX_ORDER_STATUS_BANNER,
    featured: false,
    gallery: [
      {
        img: APEX_ORDER_STATUS,
        title: "Order status",
        desc: "Customers check the current stage of their order.",
      },
      {
        img: APEX_ORDER_STATUS_LOGGEDIN,
        title: "Support override",
        desc: "Logged-in support staff can move an order to the correct status by hand.",
      },
    ],
  },
  {
    slug: "printfresh",
    title: "Printfresh",
    category: "Shopify",
    tagline: "A custom theme with a drag-and-drop blog builder.",
    summary:
      "A custom Shopify theme built in JavaScript and GraphQL. The centrepiece is a blog composition tool — editors pick from a set of section types, arrange them by dragging, and see a live preview alongside the editor. The storefront also carries a quick-shop modal written from scratch in vanilla JS.",
    stack: ["JavaScript", "GraphQL", "Liquid", "Shopify"],
    contributions: [
      "Drag-and-drop blog section builder with live preview",
      "Quick-shop modal built entirely in vanilla JavaScript",
      "Mobile-first responsive storefront templates",
    ],
    cover: PF_BANNER_IMG,
    featured: true,
    gallery: [
      {
        img: PF_BLOG_EDITING_IMG,
        title: "Blog editor",
        desc: "Editors compose a post on the left and see it render live on the right.",
      },
      {
        img: PF_DRGGING_IMG,
        title: "Section reordering",
        desc: "Sections are dragged to change their order in the published post.",
      },
      {
        img: PF_ALL_POSSIBLE_OPT_IMG,
        title: "Section types",
        desc: "The full set of section types available when composing a post.",
      },
      {
        img: PF_QUICKSHOP_IMG,
        title: "Quick shop",
        desc: "Product details and add-to-cart without leaving the listing. Built from scratch in JavaScript.",
      },
      {
        img: PF_STOREFRONT_BLOG_IMG,
        title: "Published post",
        desc: "How a composed post renders on the storefront.",
      },
    ],
  },
  {
    slug: "recharge-portal",
    title: "Recharge Custom Portal",
    category: "Shopify",
    tagline: "Self-serve subscription management for customers.",
    summary:
      "A replacement customer portal for Recharge subscriptions. Customers reschedule upcoming orders, swap products, change quantity and frequency, apply discounts, review order history, and update payment and address details through Shopify — without contacting support.",
    stack: ["React", "Recharge API", "Shopify", "JavaScript"],
    contributions: [
      "Subscription management: reschedule, swap, change frequency and quantity, cancel",
      "Upcoming and past order views with full order detail",
      "Discount application and payment/address updates via Shopify",
    ],
    cover: RECHARGE_BANNER_IMG,
    featured: false,
    gallery: [
      {
        img: RECHARGE_MANAGE_SUB_IMG,
        title: "Manage subscriptions",
        desc: "Customers review their subscriptions and reschedule them.",
      },
      {
        img: RECHARGE_SUB_DETAIL_IMG,
        title: "Subscription detail",
        desc: "Change quantity, change frequency, swap the product, or cancel the subscription.",
      },
      {
        img: RECHARGE_UPCOMING_IMG,
        title: "Upcoming orders",
        desc: "Every scheduled order with its full detail.",
      },
      {
        img: RECHARGE_PREVIOUS_IMG,
        title: "Order history",
        desc: "Past orders and their contents.",
      },
      {
        img: RECHARGE_DISCOUNT_IMG,
        title: "Discounts",
        desc: "Customers apply a discount code against their subscription.",
      },
      {
        img: RECHARGE_EDIT_INFO_IMG,
        title: "Account details",
        desc: "Personal information editing.",
      },
    ],
  },
  {
    slug: "selli",
    title: "Selli",
    category: "Shopify",
    tagline: "A public Shopify app for store analytics.",
    summary:
      "A non-embedded public Shopify app that reports on store performance. It surfaces product, order and customer insight in both tabular and graphical form — SKU comparisons, regional order breakdowns, ROI per product and a ranking of most valuable customers.",
    stack: ["React", "Ant Design", "Node.js", "Express", "MongoDB", "Shopify API"],
    contributions: [
      "Analytics dashboard aggregating product, order and customer data",
      "Comparative SKU and product performance charts",
      "ROI reporting and customer value ranking",
    ],
    cover: SELLI_DASHBAORD,
    featured: true,
    gallery: [
      {
        img: SELLI_DASBHOARD_COMPLETE,
        title: "Dashboard",
        desc: "The full store overview.",
      },
      {
        img: SELLI_BAR_GRAPH,
        title: "SKU comparison",
        desc: "Comparative performance across a product's SKUs.",
      },
      {
        img: SELLI_PROD_COMP_GRAPH,
        title: "Product comparison",
        desc: "Performance compared across products.",
      },
      {
        img: SELLI_REGIONAL_STATS,
        title: "Regional breakdown",
        desc: "Order volume broken down by region.",
      },
      {
        img: SELLI_ROI,
        title: "ROI",
        desc: "Return on investment calculated per product.",
      },
      {
        img: SELLI_VALUABLE_CUSTOMER,
        title: "Valuable customers",
        desc: "Customers ranked by their order history.",
      },
    ],
  },
  {
    slug: "nextrition-form",
    title: "Nextrition Form",
    category: "Commerce",
    tagline: "A pet nutrition quiz that recommends a subscription.",
    summary:
      "A guided questionnaire that collects a pet's activity level, allergies and profile, then recommends a product subscription — flagging which products suit the animal and which to avoid. An admin dashboard exposes submissions and their results.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    contributions: [
      "Multi-step quiz flow with conditional questions",
      "Recommendation engine surfacing suitable and unsuitable products",
      "Admin dashboard over submissions and outcomes",
    ],
    cover: NEXTRITIONFORM_BANNER_IMG,
    featured: false,
    gallery: [
      {
        img: NEXTRITIONFORM_ACTIVITY_IMG,
        title: "Activity level",
        desc: "Owners set how active their pet is.",
      },
      {
        img: NEXTRITIONFORM_ALLERGIES_IMG,
        title: "Allergies",
        desc: "Known allergies are captured and fed into the recommendation.",
      },
      {
        img: NEXTRITIONFORM_RESULT_IMG,
        title: "Results",
        desc: "The recommendation, showing which products suit the pet and which are ruled out.",
      },
      {
        img: NEXTRITIONFORM_ADMIN_DASHBOARD_IMG,
        title: "Admin dashboard",
        desc: "Submitted profiles and their computed results.",
      },
    ],
  },
  {
    slug: "mcqs-learning",
    title: "MCQs Learning",
    category: "Product",
    tagline: "A responsive multiple-choice test platform.",
    summary:
      "A Next.js test platform where learners pick a subject and work through multiple-choice assessments. Built mobile-first and laid out for phone, tablet and desktop.",
    stack: ["React", "Next.js", "Node.js", "Express", "PostgreSQL"],
    contributions: [
      "Subject selection and assessment flow",
      "Mobile-first responsive layouts across three breakpoints",
    ],
    cover: MCQS_BANNER_IMG,
    featured: false,
    gallery: [
      {
        img: MCQS_DASHBOARD_IMG,
        title: "Subject selection",
        desc: "Learners choose the subject they want to be tested on.",
      },
      {
        img: MCQS_DESKTOPVIEW_IMG,
        title: "Test — desktop",
        desc: "The assessment view at desktop width.",
      },
      {
        img: MCQS_TABLETVIEW_IMG,
        title: "Test — tablet",
        desc: "The same view at tablet width.",
      },
      {
        img: MCQS_MOBILEVIEW_IMG,
        title: "Test — mobile",
        desc: "And at phone width.",
      },
    ],
  },
  {
    slug: "technicron",
    title: "Technicron",
    category: "Frontend",
    tagline: "A responsive marketing template in Tailwind.",
    summary:
      "A marketing site template built with Tailwind CSS, designed mobile-first and carried through to desktop.",
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    contributions: [
      "Mobile-first responsive template across home and contact pages",
    ],
    cover: TECHNICRON_BANNER_IMG,
    featured: false,
    gallery: [
      {
        img: TECHNICRON_DESKTOP_HOME_IMG,
        title: "Home — desktop",
        desc: "The landing page at desktop width.",
      },
      {
        img: TECHNICRON_MOBILE_HOME_IMG,
        title: "Home — mobile",
        desc: "The same landing page on a phone.",
      },
      {
        img: TECHNICRON_CONSTACTUS_DESKTOP_IMG,
        title: "Contact — desktop",
        desc: "Contact details at desktop width.",
      },
      {
        img: TECHNICRON_CONTACT_MOBILE_IMG,
        title: "Contact — mobile",
        desc: "Contact details on a phone.",
      },
    ],
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug) {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? PROJECTS[index - 1] : PROJECTS[PROJECTS.length - 1],
    next: index < PROJECTS.length - 1 ? PROJECTS[index + 1] : PROJECTS[0],
  };
}
