"use client";
import React from 'react';

export default function MobileExperience() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black text-center p-6">
      <div className="max-w-lg">
        <h1 className="text-2xl font-bold">KRISHNA CHAKRI</h1>
        <p className="mt-4 text-slate-300">Interactive experience optimized for mobile.
          Swipe to explore the story, tap planets to view projects.</p>
        <div className="mt-6 space-y-3">
          <div className="p-4 rounded-lg bg-glass">Story Timeline — Swipe</div>
          <div className="p-4 rounded-lg bg-glass">Project Universe — Tap</div>
          <div className="p-4 rounded-lg bg-glass">Contact — Quick actions</div>
        </div>
      </div>
    </div>
  );
}
