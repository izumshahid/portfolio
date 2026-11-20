import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Aurora from "@/components/Aurora";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TechBackdrop from "@/components/tech/TechBackdrop";
import TechNav from "@/components/tech/TechNav";
import TechFooter from "@/components/tech/TechFooter";
import { SITE, TECH_ACCESS } from "@/data/site";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata = {
  metadataBase: new URL("https://irzumshahid.com"),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.intro,
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.intro,
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08080c" },
    { media: "(prefers-color-scheme: light)", color: "#fbfbfd" },
  ],
};

// Applied before paint so the chosen theme never flashes.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored || "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

// Decides the view before paint. ?access=<value> turns the tech view on for
// the rest of the browser session; any other value of the param turns it off.
const modeScript = `
(function () {
  var A = ${JSON.stringify(TECH_ACCESS)};
  var mode = "normal";
  try {
    var q = new URLSearchParams(window.location.search).get(A.param);
    if (q !== null) {
      mode = q === A.value ? "tech" : "normal";
      sessionStorage.setItem(A.storageKey, mode);
    } else {
      mode = sessionStorage.getItem(A.storageKey) === "tech" ? "tech" : "normal";
    }
  } catch (e) {}
  document.documentElement.setAttribute("data-mode", mode);
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </head>
      <body className="grain">
        <div className="only-normal">
          <Aurora />
          <Nav />
        </div>
        <div className="only-tech">
          <TechBackdrop />
          <TechNav />
        </div>
        <main className="relative z-10">{children}</main>
        <div className="only-normal">
          <Footer />
        </div>
        <div className="only-tech">
          <TechFooter />
        </div>
      </body>
    </html>
  );
}
