import { Inspector } from "@/components/ui/Inspector";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Wrap } from "@/components/layout/Wrap";
import { aboutStats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-frame">
      <Wrap>
        <Eyebrow>Frame 02 / About</Eyebrow>
        <div className="grid items-start gap-[50px] max-lg:max-w-none md:grid-cols-[0.9fr_1.1fr] md:gap-[70px]">
          <Reveal>
            <Inspector
              label="Portrait.svg"
              className="flex aspect-[4/5] max-w-[360px] flex-col justify-between p-[22px]"
            >
              <div className="portrait-placeholder flex flex-1 items-center justify-center border border-line p-5 text-center font-mono text-[12px] text-ink-faint">
                PHOTO
                <br />
                PLACEHOLDER
                <br />
                800×1000
              </div>
              <div className="mt-3.5 flex justify-between font-mono text-[11px] text-ink-faint uppercase">
                <span>Iris Calder</span>
                <span>Lisbon, PT</span>
              </div>
            </Inspector>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="mb-7 font-display text-[clamp(30px,4vw,44px)] leading-[1.25] font-normal text-ink">
                Eight years of turning ambiguous problems into products people can
                actually navigate.
              </h2>
            </Reveal>
            <Reveal>
              <p className="mb-[18px] max-w-[540px] text-base leading-[1.5] text-ink-dim">
                I started as a front-end developer, which is the reason I can&apos;t design
                a screen without thinking about the states around it — empty, loading,
                error, and everything in between. That habit turned into a specialty:
                design systems that hold up once a product has forty screens instead of
                four.
              </p>
            </Reveal>
            <Reveal>
              <p className="mb-[18px] max-w-[540px] text-base leading-[1.5] text-ink-dim">
                Most recently I led design systems at Verse and shipped 0→1 product work
                for Loop Health and Fieldnote. I care less about a single beautiful
                screen and more about whether the 200th screen still feels like it
                belongs.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-5 border-t border-line pt-[30px] md:grid-cols-3">
              {aboutStats.map((stat) => (
                <Reveal key={stat.label}>
                  <div className="font-display text-[34px] text-accent">{stat.num}</div>
                  <div className="mt-1.5 font-mono text-[11px] text-ink-faint uppercase">
                    {stat.label}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
