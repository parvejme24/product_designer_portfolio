import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Wrap } from "@/components/layout/Wrap";
import { projects } from "@/lib/projects";
import { WorkItem } from "./WorkItem";

export function Work() {
  return (
    <section id="work" className="section-frame">
      <Wrap>
        <div className="mb-[70px] flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow>Frame 03 / Selected work</Eyebrow>
            <Reveal>
              <h2 className="font-display text-[clamp(32px,5vw,54px)] font-normal text-ink">
                Case studies, not screenshots.
              </h2>
            </Reveal>
          </div>
        </div>

        {projects.map((item, index) => (
          <WorkItem key={item.slug} item={item} index={index} />
        ))}
      </Wrap>
    </section>
  );
}
