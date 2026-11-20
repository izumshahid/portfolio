import Link from "next/link";
import ModeView from "@/components/ModeView";
import ExploreMap from "@/components/tech/ExploreMap";
import { ALL_PROJECTS } from "@/data/projects";

export const metadata = {
  title: "Map",
  robots: { index: false, follow: false },
};

function Unavailable() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-44 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-primary">Page not found</h1>
      <p className="mt-4 text-muted">This page is not available.</p>
      <Link href="/" className="mt-8 inline-block text-sm text-primary underline">
        Back home
      </Link>
    </section>
  );
}

export default function MapPage() {
  return <ModeView normal={<Unavailable />} tech={<ExploreMap projects={ALL_PROJECTS} page />} />;
}
