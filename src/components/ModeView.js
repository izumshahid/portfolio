/**
 * Renders both views and lets CSS pick one from <html data-mode>. The mode is
 * set by an inline script before first paint, so there is no flash and no
 * hydration mismatch — the server never needs to know which view is active.
 */
export default function ModeView({ normal, tech }) {
  return (
    <>
      <div className="only-normal">{normal}</div>
      <div className="only-tech">{tech}</div>
    </>
  );
}
