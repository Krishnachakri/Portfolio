"use client";

import CinematicLanding from '../components/CinematicLanding';
import StoryTimeline from '../components/StoryTimeline';
import ProjectUniverse from '../components/ProjectUniverse';
import SkillsMatrix from '../components/SkillsMatrix';
import AchievementVault from '../components/AchievementVault';
import Roadmap from '../components/Roadmap';
import WhyHireMe from '../components/WhyHireMe';
import ContactTerminal from '../components/ContactTerminal';

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
