import { Reveal } from "@/components/ui/Reveal";
import { Wrap } from "@/components/layout/Wrap";

export function Testimonial() {
  return (
    <section className="section-frame !py-[120px] text-center">
      <Wrap>
        <Reveal>
          <blockquote className="mx-auto mb-[30px] max-w-[820px] font-display text-[clamp(24px,3.6vw,40px)] leading-[1.4] font-normal text-ink italic">
            &ldquo;Iris is the rare designer who can sit in an engineering standup and a
            leadership review on the same day and be equally useful in both. Our design
            system finally feels like infrastructure, not decoration.&rdquo;
          </blockquote>
        </Reveal>
        <Reveal>
          <cite className="font-mono text-[12px] tracking-[0.06em] text-ink-faint uppercase not-italic">
            — Head of Product, Loop Health
          </cite>
        </Reveal>
      </Wrap>
    </section>
  );
}
