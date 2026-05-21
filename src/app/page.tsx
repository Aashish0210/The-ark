import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  TheStoryPart1,
  TheStoryPart2,
  TheStoryPart3,
  TheStoryPart4,
} from "@/components/TheStory";
import CardGallery from "@/components/CardGallery";
import ProgressTracker from "@/components/ProgressTracker";
import Stats from "@/components/Stats";
import { prisma } from "@/lib/prisma";

export const revalidate = 0; // Disable static rendering to always show fresh data

export default async function Home() {
  const [rawSettings, stats] = await Promise.all([
    prisma.siteSettings.findFirst(),
    prisma.stat.findMany({ orderBy: { order: "asc" } }),
  ]);

  const settings = rawSettings || {
    raised: 0,
    goal: 100000000,
    heroTitle: "ASHA JAHAJ ARK OF HOPE",
    heroSubtitle: "A STORY OF FAITH IN KENTUCKY",
    heroText:
      "Every great journey begins with a single plank. Once gifted for the Ark, see the work, and please be ready—one donation at a time.",
  };

  return (
    <main>
      <Navbar />
      <Hero
        subtitle={settings.heroSubtitle}
        title={settings.heroTitle}
        text={settings.heroText}
      />
      <TheStoryPart1 />
      <CardGallery />
      <TheStoryPart2 />
      <ProgressTracker raised={settings.raised} goal={settings.goal} />
      <TheStoryPart3 />
      <Stats stats={stats} />
      <TheStoryPart4 />
    </main>
  );
}
