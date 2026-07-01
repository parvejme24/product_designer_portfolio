import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/lib/projects";
import { WorkVisual } from "./WorkVisual";

type WorkItemProps = {
  item: Project;
  index: number;
};

export function WorkItem({ item, index }: WorkItemProps) {
  const isEven = index % 2 === 1;

  return (
    <Reveal
      className={`grid items-center gap-[30px] border-t border-line py-[60px] max-md:[direction:ltr] md:grid-cols-[1fr_1.15fr] md:gap-[60px] ${
        isEven ? "md:[direction:rtl]" : ""
      }`}
    >
      <div className={isEven ? "md:[direction:ltr]" : ""}>
        <WorkVisual fileLabel={item.fileLabel} elements={item.visual} />
      </div>
      <div className={isEven ? "md:[direction:ltr]" : ""}>
        <span className="mb-4 block font-mono text-[13px] text-ink-faint">
          {item.frame} · {item.year}
        </span>
        <h3 className="mb-4 font-display text-[clamp(26px,3.4vw,38px)] font-normal text-ink">
          {item.title}
        </h3>
        <p className="mb-[22px] max-w-[440px] leading-[1.5] text-ink-dim">{item.excerpt}</p>
        <div className="mb-6 flex flex-wrap gap-[10px]">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="border border-line px-2.5 py-[5px] font-mono text-[11px] text-ink-dim uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/work/${item.slug}`}
          className="group inline-flex cursor-pointer items-center gap-2 border-b border-line-strong pb-1 font-mono text-[13px] text-ink transition-[border-color,gap,color] duration-[250ms] hover:gap-3 hover:border-accent hover:text-accent"
        >
          View case study →
        </Link>
      </div>
    </Reveal>
  );
}
