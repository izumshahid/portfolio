// Projects that only appear in the tech view (opened with the access
// query param — see TECH_ACCESS in site.js). Add new ones here; they are
// merged into the timeline automatically and never listed in the public view.
import LIGHTS_LANDING from "@/assets/lights/landing.png";
import LIGHTS_MEGA_MENU from "@/assets/lights/megaMenu.png";
import LIGHTS_PDP_CASEPACK from "@/assets/lights/pdpCasePack.png";
import LIGHTS_NS_METAFIELDS from "@/assets/lights/netsuiteMetafields.png";
import LIGHTS_PDP_GUEST from "@/assets/lights/pdpGuest.png";
import LIGHTS_RTS from "@/assets/lights/rtsCollection.png";
import LIGHTS_CART_VALIDATION from "@/assets/lights/cartValidation.png";
import LIGHTS_REQUIRED_FIELDS from "@/assets/lights/requiredFields.png";
import LIGHTS_FLOW from "@/assets/lights/flowAirtable.png";

import BO_LANDING from "@/assets/byteorchard/landing.png";
import BO_CAROUSEL from "@/assets/byteorchard/categoryCarousel.png";
import BO_COLLECTION from "@/assets/byteorchard/collection.png";
import BO_CONFIGURATOR from "@/assets/byteorchard/configurator.png";
import BO_REVIEWS from "@/assets/byteorchard/reviews.png";

import UVB_LANDING from "@/assets/uvbsol/landing.png";
import UVB_PDP from "@/assets/uvbsol/pdpMembership.png";
import UVB_CART from "@/assets/uvbsol/ajaxCart.png";

import MEATS_LANDING from "@/assets/meats/landing.png";

import GLASSES_LANDING from "@/assets/glasses/landing.png";
import GLASSES_PDP from "@/assets/glasses/pdpAbTest.png";
import GLASSES_CART from "@/assets/glasses/ajaxCart.png";

import AURA_LANDING from "@/assets/aura/landing.png";
import AURA_DEALS from "@/assets/aura/deals.png";
import AURA_AUTO from "@/assets/aura/automaticDiscount.png";
import AURA_LINK from "@/assets/aura/linkDiscounts.png";
import AURA_DEALS_PAGE from "@/assets/aura/dealsPage.png";
import AURA_BUILDER from "@/assets/aura/pageBuilder.png";

import PADDOCK_LANDING from "@/assets/paddock/landing.png";

import TACKROOM_LANDING from "@/assets/tackroom/landing.png";

import ENAMEL_LANDING from "@/assets/enamel/landing.png";

export const EXCLUSIVE_PROJECTS = [
  {
    slug: "lights",
    title: "Lights",
    category: "B2B Commerce",
    exclusive: true,
    tagline: "A B2B-first Shopify store wired into NetSuite.",
    summary:
      "A wholesale-first Shopify store for a commercial lighting supplier. Pricing is gated behind a wholesale account, product data flows in from NetSuite, and custom apps enforce who can buy what and what B2B buyers must fill in at checkout. Retail customers are still served, but only through a curated ready-to-ship range.",
    stack: [
      "Shopify",
      "Shopify B2B",
      "Shopify Functions",
      "Shopify Flow",
      "NetSuite",
      "Airtable",
      "Metafields",
      "JavaScript",
    ],
    contributions: [
      "Cart transform so cart prices match exactly what NetSuite financing expects",
      "Script syncing product-specific data from NetSuite into variant metafields",
      "Custom app with cart validation: retail buyers restricted to ready-to-ship SKUs, B2B buyers must complete required fields",
      "Shopify Flow syncing B2B form submissions into Airtable for later import",
    ],
    cover: LIGHTS_LANDING,
    featured: false,
    gallery: [
      {
        img: LIGHTS_LANDING,
        title: "Landing page",
        desc: "The storefront entry point: a full-bleed hero and category tiles on a dark, high-contrast theme. Product photography carries the brand.",
      },
      {
        img: LIGHTS_MEGA_MENU,
        title: "Mega menu",
        desc: "Brands are grouped into series columns with featured product tiles alongside. Below it, content packages (Standard, Ready to Glow, Custom) route buyers to dynamic lighting content.",
      },
      {
        img: LIGHTS_PDP_CASEPACK,
        title: "PDP with case packs and tiered pricing",
        desc: "Product pages offer case-pack options and quantity-tier discounts. A cart transform makes the cart price match the exact figure NetSuite financing requires.",
      },
      {
        img: LIGHTS_NS_METAFIELDS,
        title: "NetSuite to variant metafields",
        desc: "A custom script syncs product-specific information from NetSuite onto Shopify variant metafields. This Product Information table renders straight from them, with no manual entry.",
      },
      {
        img: LIGHTS_PDP_GUEST,
        title: "PDP for guests",
        desc: "What a guest sees: the store is built mainly for B2B, so wholesale pricing sits behind login or registration while variants stay browsable.",
      },
      {
        img: LIGHTS_RTS,
        title: "Ready-to-ship collection",
        desc: "A special collection of ready-to-ship SKUs that retail customers can buy at retail prices, and retailers can too. A quick-shop modal handles colour, pack size and the volume discount.",
      },
      {
        img: LIGHTS_CART_VALIDATION,
        title: "Cart validation app",
        desc: "A custom app with a cart validation function. Merchants switch on checkout blocking for retail customers, who may only buy variants whose Is RTS metafield is true, and write the error messages buyers see.",
      },
      {
        img: LIGHTS_REQUIRED_FIELDS,
        title: "Required B2B checkout fields",
        desc: "The same app makes first name, last name and phone mandatory on a B2B buyer's shipping address. Messages are configurable, with enforcement and test-mode toggles.",
      },
      {
        img: LIGHTS_FLOW,
        title: "Flow to Airtable sync",
        desc: "A Shopify Flow syncs B2B form submissions into Airtable, fills in company addresses from customer metafields, tags customers and emails marketing. Airtable was later used to import the data downstream.",
      },
    ],
  },
  {
    slug: "byteorchard",
    title: "ByteOrchard",
    category: "Commerce",
    exclusive: true,
    tagline: "A device store with a configurator that builds itself at runtime.",
    summary:
      "A Shopify store selling iPhones, Macs, iPads, watches and accessories, with condition grades and options per device. The centrepiece is a product-page configurator generated at runtime from rules stored in product metafields, so merchants change the logic without a deploy.",
    stack: ["Shopify", "JavaScript", "Metafields", "Reviews app API", "Liquid"],
    contributions: [
      "Runtime configurator driven by product metafield conditions, with smart selection and automatic unselection of poor combinations",
      "Progress UX for long option lists: a side tracker and an add-to-cart button that says how many selections remain",
      "Collection pages that populate per-product details dynamically, with a configurable sort order",
      "Custom reviews section matched to the design, fed by the reviews app's data",
    ],
    cover: BO_LANDING,
    featured: false,
    gallery: [
      {
        img: BO_LANDING,
        title: "Landing page",
        desc: "A bold hero with a frosted offer card over product imagery, under a full-width mega nav covering every device category.",
      },
      {
        img: BO_CAROUSEL,
        title: "Category carousel",
        desc: "A carousel with one card per category (MacBooks, iPad, Watch, iPhone), each with hover animations and a glass call-to-action panel.",
      },
      {
        img: BO_COLLECTION,
        title: "Collection page",
        desc: "Each product card fills in its own details dynamically: starting price, case size, display, housing and features. The sort order is customizable.",
      },
      {
        img: BO_CONFIGURATOR,
        title: "Runtime configurator",
        desc: "The configurator is built at runtime from conditions held in product metafields, so the rules are editable without code. It selects options intelligently and unselects combinations that don't work together. A side slider shows which options are done on long pages, and the add-to-cart copy counts the selections still needed.",
      },
      {
        img: BO_REVIEWS,
        title: "Custom reviews",
        desc: "A reviews section built to match the storefront design, with rating breakdown, verified badges and a carousel, consuming the data from the reviews app.",
      },
    ],
  },
  {
    slug: "uvb-sol",
    title: "UVB Sol",
    category: "Subscriptions",
    exclusive: true,
    tagline: "Personalized UVB light therapy, sold as a device plus a membership.",
    summary:
      "A Shopify store for a personalized UVB light therapy device that reads your skin tone to deliver an optimal dose with 99% less UV risk. The device ships with a membership, so the product page sells both at once: a fully merchant-customizable membership widget, a founding-member offer that switches over automatically when its limit is reached, and Recharge subscriptions wired into the cart and post-order automations.",
    stack: ["Shopify", "Recharge", "Shopify Flow", "JavaScript", "AJAX Cart", "Metafields"],
    contributions: [
      "Membership widget on the PDP where every piece of copy, every colour and the progress bar are editable from a customizer",
      "Founding-member limit tracking, with automatic switch-over to standard membership once it fills",
      "AJAX cart with custom event listeners that show or hide the membership badge based on cart contents",
      "Recharge subscriptions with bundles using the refill-bundle approach, plus Recharge automations",
      "Shopify Flows that add the membership products once an order is created",
    ],
    cover: UVB_LANDING,
    featured: false,
    gallery: [
      {
        img: UVB_LANDING,
        title: "Landing banner",
        desc: "A full-bleed hero that leads with the promise: personalized sunlight from a device that analyzes your skin tone to deliver the right UVB dose with 99% less UV risk.",
      },
      {
        img: UVB_PDP,
        title: "Customizable membership widget",
        desc: "The PDP widget for the device and membership is fully customizable: every copy and colour, and the claimed-percentage bar, are set from the customizer. When the founding-member limit is reached the widget switches over automatically.",
      },
      {
        img: UVB_CART,
        title: "AJAX cart and membership badge",
        desc: "A custom event listener shows or hides the membership badge in the cart based on what is in it, and the badge itself is customizable. Shopify Flows add the products after the order is created, and Recharge subscriptions run on the refill-bundle approach with Recharge automations.",
      },
    ],
  },
  {
    slug: "meats",
    title: "Meats",
    category: "Commerce",
    exclusive: true,
    tagline: "A smoked-meats storefront with cart-aware discount logic.",
    summary:
      "A Shopify store for smoked meats, jerky and gift bundles. The standout piece is a custom Shopify discount function that applies special pricing to specific products once the cart meets a quantity rule, supporting seasonal duo promotions without manual discount codes.",
    stack: ["Shopify", "Shopify Functions", "Discount Function", "JavaScript"],
    contributions: [
      "Custom Shopify discount function with logic keyed to specific products and their quantities in the cart",
      "Special discount applied automatically to chosen products once the rule is fulfilled",
    ],
    cover: MEATS_LANDING,
    featured: false,
    gallery: [
      {
        img: MEATS_LANDING,
        title: "Landing banner",
        desc: "A full-bleed holiday hero promoting a paired offer. That offer runs on a custom discount function: when specific products are in the cart in the required quantities, the special discount applies to the products it targets.",
      },
    ],
  },
  {
    slug: "glasses",
    title: "Glasses",
    category: "Experimentation",
    exclusive: true,
    tagline: "A/B-tested prescription flow, stitched into a third-party app.",
    summary:
      "A Shopify store for protective eyewear. The work centred on getting more shoppers to buy prescription lenses: an A/B test on the product page, and a rule-driven prompt in the AJAX cart for returning customers that hands off to a prescription flow run by a third-party app. Making that flow behave meant keeping the cart and the third-party script in agreement.",
    stack: ["Shopify", "JavaScript", "A/B testing", "AJAX Cart", "Third-party app integration"],
    contributions: [
      "A/B test on the PDP for the prescription glasses option",
      "Cart rules that show returning customers a prescription call-to-action, linking to the third-party prescription PDP",
      "Quantity handling so the main product's quantity drops when the prescription version is added",
      "Logic that refreshes the third-party script's cache whenever my code changes the cart",
    ],
    cover: GLASSES_LANDING,
    featured: false,
    gallery: [
      {
        img: GLASSES_LANDING,
        title: "Landing banner",
        desc: "A bold hero inviting shoppers to build their own pair, with category tiles and trust messaging underneath.",
      },
      {
        img: GLASSES_PDP,
        title: "PDP and prescription A/B test",
        desc: "The product page carries an A/B test around the prescription option. The Buy in Prescription button sits alongside Add to Cart and Customize.",
      },
      {
        img: GLASSES_CART,
        title: "AJAX cart and prescription prompt",
        desc: "The test checks specific rules and, based on them, shows returning customers an Add Prescription call-to-action that leads to a PDP handled by a third-party app. When the prescription glasses are added, the main product's quantity decreases in the cart. The third-party script cached stale cart data, so my code refreshes its cache after every cart change it makes.",
      },
    ],
  },
  {
    slug: "aura",
    title: "Aura",
    category: "Shopify app",
    exclusive: true,
    tagline: "A deals engine: schedule discounts and their landing pages together.",
    summary:
      "A beauty, perfume and skincare store where I focused on deals and discounts. The centrepiece is a custom Shopify app, Deals Configurator, where a merchant creates a deal once and it drives everything on a single schedule: the Shopify discounts linked to it, an optional automatic discount the app runs at checkout, and a storefront page that goes live only while the deal is on. A test mode lets the team rehearse a deal in production before customers see it.",
    stack: ["Shopify App", "Shopify Functions", "Polaris", "Discounts API", "Drag and drop", "JavaScript"],
    contributions: [
      "Deals app for creating and scheduling deals, with a test mode limited to tagged customers",
      "Automatic discount function covering cart items, order subtotal and shipping, with per-customer-tag eligibility",
      "Linking of existing Shopify discounts to a deal, with live status and link state",
      "Scheduled deal pages with a drag-and-drop block builder in a native Shopify look and feel",
    ],
    cover: AURA_LANDING,
    featured: false,
    gallery: [
      {
        img: AURA_LANDING,
        title: "Landing page",
        desc: "A seasonal storefront for a fragrance and skincare brand, with a holiday hero, gifting messaging and category navigation. The deals engine behind it powers the sale and holiday pages.",
      },
      {
        img: AURA_DEALS,
        title: "Deals app and test mode",
        desc: "The home of the Deals Configurator app. Test mode hides deals from everyone except customers carrying a tester tag, who see the deal pages and automatic discounts. When the team is happy, one button takes the deals live for all customers.",
      },
      {
        img: AURA_AUTO,
        title: "Automatic discount",
        desc: "For logic Shopify's own discount types cannot express, the app runs its own discount at checkout on the deal's schedule. It can discount the highest-priced item (by line total or unit price), the order subtotal and shipping, each with its own percentage and optional customer-tag eligibility. A summary shows exactly what the deal will apply.",
      },
      {
        img: AURA_LINK,
        title: "Link existing discounts",
        desc: "A deal does not need a new discount. Merchants can search and filter existing Shopify discounts by name and status, see each one's current window and whether it is active or expired, and attach several at once so the deal schedules them.",
      },
      {
        img: AURA_DEALS_PAGE,
        title: "Deals pages",
        desc: "Each deal can own a storefront page. The table shows its schedule, block count, state and page status. Its content goes live during the deal's window, and a placeholder page fills the gaps in between.",
      },
      {
        img: AURA_BUILDER,
        title: "Drag-and-drop page builder",
        desc: "A block builder in a native Shopify look and feel. Blocks such as image-and-text and image are reordered by dragging in a page-order list or with up and down controls, and edited with a rich-text toolbar, alt text and image replacement.",
      },
    ],
  },
  {
    slug: "paddock",
    title: "Paddock",
    category: "Migration strategy",
    exclusive: true,
    tagline: "Mapping a legacy ERP storefront onto a commerce-first platform.",
    summary:
      "An established direct-to-consumer brand serving horses and their owners wanted off a legacy ERP-based storefront, where orders, subscriptions, tax, shipping, customer service and reporting were all tied into one system. The aim was a commerce-first setup with the ERP kept only for finance. With a large base of active subscribers and a recurring bundle builder that had to work on day one, the migration was complex, so my job was to turn it into a clear picture that leadership, engineering and the client could all work from.",
    stack: ["Systems architecture", "Integration mapping", "Subscriptions", "ERP integration", "Roadmapping"],
    contributions: [
      "Audited the existing ecosystem, tracing how checkout, payments, fulfillment, customer care, marketing data and finance connect",
      "Built an interactive current-state integration map grouping every system into six stages, with what it does today, what is confirmed versus unverified, and its migration risk",
      "Designed the matching future-state map: the new commerce hub, the tools replacing legacy systems, and one-way transaction flow into the ERP, each system tagged as launch scope, premium option, to be decided or out of scope",
      "Turned growth goals into platform requirements: recurring and build-your-own bundles, subscription add-ons, subscribe-and-save, post-purchase upsells and lifecycle journeys",
      "Gathered the open technical questions to settle before committing to a build: fee structure, address validation for live shipments, finance visibility into scheduled orders, and the effects of a one-way ERP sync",
      "Produced the base for a phased roadmap: a core launch timed to the busy season, then refinement and full go-live",
    ],
    cover: PADDOCK_LANDING,
    featured: false,
    gallery: [
      {
        img: PADDOCK_LANDING,
        title: "Landing page",
        desc: "The brand's landing page: a full-bleed hero with a rider and horse, a headline about smart solutions for every step of the equine journey, and entry points into fly control and roadside assistance.",
      },
    ],
  },
  {
    slug: "tackroom",
    title: "Tackroom",
    category: "Replatform",
    exclusive: true,
    tagline: "A multi-brand Shopify Plus replatform for an equestrian retailer.",
    summary:
      "I contributed to the replatform of a long-established equestrian and western tack retailer, moving its flagship store off a legacy platform after nearly three decades and relaunching two acquired brands under one unified Shopify Plus setup. NetSuite stays the system of record, so a core focus was a clean integration carrying orders, line-level discounts, personalization details and kit components accurately between Shopify and the ERP. The build is function-first: an approved Online Store 2.0 theme, refreshed with targeted customizations for fast product discovery across a catalog of 34,000+ SKUs.",
    stack: [
      "Shopify Plus",
      "Online Store 2.0",
      "NetSuite",
      "Shopify Markets",
      "Shopify Flow",
      "Shop Pay",
    ],
    contributions: [
      "Planned the Shopify to NetSuite integration for orders, line-level discounts, personalization details and kit components",
      "Handled embroidered and engraved products, and items exceeding Shopify's native option and variant limits",
      "A kit builder supporting around 3,000 combinations",
      "Modernized checkout with Shop Pay, Apple Pay and Google Pay, plus rebuilt shipping logic",
      "Shopify Markets for international orders, and Shopify Flow automations for promotions and fraud review",
      "SEO protection: full URL mapping, 301 redirects and carried-over metadata to preserve search rankings",
    ],
    cover: TACKROOM_LANDING,
    featured: false,
    gallery: [
      {
        img: TACKROOM_LANDING,
        title: "Landing page",
        desc: "The storefront landing page of the retailer: a promotional hero carousel, category navigation across western, English, blankets and more, and a newsletter sign-up. Discovery across the large catalog starts here.",
      },
    ],
  },
  {
    slug: "enamel",
    title: "Enamel",
    category: "Integration design",
    exclusive: true,
    tagline: "Pulling marketplace orders into Shopify, safely and exactly once.",
    summary:
      "A dental supply store sells through an online marketplace as well as its own Shopify store. I designed how marketplace orders get copied into Shopify automatically, and wrote it all up as a spec the engineers can build from. The main rule: every order must be created exactly once, even if something crashes, repeats or times out. I also compared two ready-made integration tools against building it ourselves, and recommended one.",
    stack: ["Shopify Admin GraphQL API", "Marketplace Orders API", "MongoDB", "Queues", "Idempotency", "Distributed lock"],
    contributions: [
      "Matched every marketplace order field to its Shopify field: customers, addresses, line items, shipping and the tax the marketplace collects",
      "Found customers by phone number (cleaned into one standard format), since orders arrive with no email, and handled several buyers at one practice sharing a phone",
      "Split the work into three parts: a poller that checks for orders, a queue that creates them in Shopify, and a twice-daily check that catches anything missed. A slow Shopify can't make us skip a poll",
      "Gave every order a unique key, safe status changes and a lock, so an order is never created twice, even after restarts or unclear timeouts",
      "Planned for failures: retries that wait longer each time, a breaker that pauses when Shopify is down, a holding area for orders that keep failing, and a re-check after any unclear result",
      "Kept professional licence data out of Shopify, logs and alerts completely",
      "Compared two integration platforms with a custom build on cost, support, risk and upkeep, then listed the decisions the business needs to make",
      "Wrote 20 test cases, including ones that break things on purpose, so correctness is proven and not assumed",
    ],
    cover: ENAMEL_LANDING,
    featured: false,
    gallery: [
      {
        img: ENAMEL_LANDING,
        title: "Landing page",
        desc: "The dental supply store's landing page: a clear hero about its disinfectant wipes, a Shop Now button, and simple navigation. This is the Shopify store that the marketplace orders flow into.",
      },
    ],
  },
];
