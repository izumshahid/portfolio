// Storefront tips shown beside the landing banner on projects that only have a
// single screenshot. Each project gets its own focus, not the same list.
export const PROJECT_TIPS = {
  meats: [
    {
      title: "Size images for the screen",
      body: "Export hero images at the width they display and serve WebP. A banner exported at twice the needed size slows the first paint for no visible gain.",
    },
    {
      title: "Never lazy load the first banner",
      body: "The hero is usually the largest paint on the page. Load it eagerly, and lazy load only what sits below the fold.",
    },
  ],
  paddock: [
    {
      title: "Check the banner on a phone first",
      body: "Most shoppers arrive on mobile. Keep headline text away from the edges and make sure the button sits above the fold.",
    },
    {
      title: "Use a contrast overlay",
      body: "Photos with a rider and horse change from crop to crop. A soft gradient behind the text keeps it readable on every screen size.",
    },
  ],
  tackroom: [
    {
      title: "Keep Shopify sections editable",
      body: "Expose the banner image, heading and link as theme settings, so the team can swap a promotion without a developer.",
    },
    {
      title: "Use presets for repeat campaigns",
      body: "Save seasonal banner layouts as section presets. Merchandisers can then rebuild a sale hero in a minute.",
    },
  ],
  enamel: [
    {
      title: "Write real alt text and one H1",
      body: "Describe what the banner shows in the alt text and keep a single H1 on the page. Search engines and screen readers both rely on it.",
    },
    {
      title: "Link the banner to where the offer lives",
      body: "Point the button at the collection or product, not the home page. Shoppers land where they can buy, and search engines get a clearer path.",
    },
  ],
};

export const tipsFor = (slug) => PROJECT_TIPS[slug] ?? [];
