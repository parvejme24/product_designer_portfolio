import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GridField } from "@/components/layout/GridField";
import { Grain } from "@/components/layout/Grain";
import { CoordinateReadout } from "@/components/layout/CoordinateReadout";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { getProject, projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Iris Calder`,
    description: project.excerpt,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <GridField />
      <Grain />
      <CoordinateReadout />
      <Header />

      <main>
        <CaseStudy project={project} />
      </main>

      <Footer />
    </>
  );
}
