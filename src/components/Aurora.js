/**
 * Three blurred colour fields drifting on independent loops behind the
 * whole site. Fixed and pointer-transparent, so it costs one compositor
 * layer and nothing else.
 */
export default function Aurora() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <div
        className="aurora-blob animate-drift-a"
        style={{
          top: "-18vh",
          left: "-10vw",
          width: "58vw",
          height: "58vw",
          background:
            "radial-gradient(circle at 50% 50%, var(--color-violet), transparent 68%)",
        }}
      />
      <div
        className="aurora-blob animate-drift-b"
        style={{
          top: "22vh",
          right: "-18vw",
          width: "52vw",
          height: "52vw",
          background:
            "radial-gradient(circle at 50% 50%, var(--color-cyan), transparent 68%)",
        }}
      />
      <div
        className="aurora-blob animate-drift-c"
        style={{
          bottom: "-24vh",
          left: "24vw",
          width: "46vw",
          height: "46vw",
          opacity: "calc(var(--aurora-opacity) * 0.6)",
          background:
            "radial-gradient(circle at 50% 50%, var(--color-magenta), transparent 70%)",
        }}
      />
      {/* Vignette — keeps text contrast predictable wherever a blob drifts. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 20%, var(--canvas) 92%)",
        }}
      />
    </div>
  );
}
