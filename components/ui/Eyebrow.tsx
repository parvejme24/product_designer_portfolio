type EyebrowProps = {
  children: React.ReactNode;
};

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <div className="mb-5 flex items-center gap-[10px] font-mono text-[12px] tracking-[0.12em] text-ink-faint uppercase before:h-px before:w-[22px] before:bg-accent before:content-['']">
      {children}
    </div>
  );
}
