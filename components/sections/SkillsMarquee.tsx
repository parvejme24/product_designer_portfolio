import { skills } from "@/lib/data";

function SkillItems({ prefix }: { prefix: string }) {
  return (
    <>
      {skills.map((skill) => (
        <span
          key={`${prefix}-${skill.label}`}
          className="flex items-center gap-11 font-display text-[clamp(24px,4vw,40px)] italic text-ink-faint after:ml-11 after:text-accent after:content-['/'] after:not-italic"
        >
          {skill.emphasized ? (
            <em className="font-medium text-ink not-italic">{skill.label}</em>
          ) : (
            skill.label
          )}
        </span>
      ))}
    </>
  );
}

export function SkillsMarquee() {
  return (
    <section className="section-frame overflow-hidden !py-[90px]">
      <div className="marquee flex whitespace-nowrap">
        <div className="marquee-track flex items-center gap-11 pr-11">
          <SkillItems prefix="a" />
          <SkillItems prefix="b" />
        </div>
      </div>
    </section>
  );
}
