import { type ReactNode } from "react";

type InspectorProps = {
  children: ReactNode;
  className?: string;
  label?: string;
};

export function Inspector({ children, className = "", label }: InspectorProps) {
  return (
    <div className={`inspector ${className}`}>
      <span className="inspector-corners" aria-hidden />
      {label && (
        <span className="absolute top-[-11px] left-4 bg-bg px-2 font-mono text-[11px] tracking-[0.06em] text-accent uppercase">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
