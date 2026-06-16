"use client";
import dynamicImport from 'next/dynamic';

const CinematicLanding = dynamicImport(() => import('../components/CinematicLanding'), { ssr: false });
const StoryTimeline = dynamicImport(() => import('../components/StoryTimeline'), { ssr: false });
const ProjectUniverse = dynamicImport(() => import('../components/ProjectUniverse'), { ssr: false });
const SkillsMatrix = dynamicImport(() => import('../components/SkillsMatrix'), { ssr: false });
const AchievementVault = dynamicImport(() => import('../components/AchievementVault'), { ssr: false });
const Roadmap = dynamicImport(() => import('../components/Roadmap'), { ssr: false });
const WhyHireMe = dynamicImport(() => import('../components/WhyHireMe'), { ssr: false });
const ContactTerminal = dynamicImport(() => import('../components/ContactTerminal'), { ssr: false });

export default function Page() {
  return (
    <main>
      <CinematicLanding />
      <StoryTimeline />
      <ProjectUniverse />
      <SkillsMatrix />
      <AchievementVault />
      <Roadmap />
      <WhyHireMe />
      <ContactTerminal />
    </main>
  );
}

// Force dynamic rendering to avoid Next.js prerendering client-only content
export const dynamic = 'force-dynamic';
