export function GridField() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-50"
      style={{
        backgroundImage: `
          linear-gradient(var(--line) 1px, transparent 1px),
          linear-gradient(90deg, var(--line) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 75%)",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 75%)",
      }}
      aria-hidden
    />
  );
}
