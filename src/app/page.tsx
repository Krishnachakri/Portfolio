"use client";

import dynamic from 'next/dynamic';

const CinematicLanding = dynamic(() => import('../components/CinematicLanding'), { ssr: false });
const StoryTimeline = dynamic(() => import('../components/StoryTimeline'), { ssr: false });
const ProjectUniverse = dynamic(() => import('../components/ProjectUniverse'), { ssr: false });
const SkillsMatrix = dynamic(() => import('../components/SkillsMatrix'), { ssr: false });
const AchievementVault = dynamic(() => import('../components/AchievementVault'), { ssr: false });
const Roadmap = dynamic(() => import('../components/Roadmap'), { ssr: false });
const WhyHireMe = dynamic(() => import('../components/WhyHireMe'), { ssr: false });
const ContactTerminal = dynamic(() => import('../components/ContactTerminal'), { ssr: false });

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
