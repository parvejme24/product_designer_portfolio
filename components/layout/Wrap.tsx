import { type ReactNode } from "react";

type WrapProps = {
  children: ReactNode;
  className?: string;
};

export function Wrap({ children, className = "" }: WrapProps) {
  return (
    <div className={`mx-auto max-w-[1240px] px-[22px] md:px-10 ${className}`}>
      {children}
    </div>
  );
}
