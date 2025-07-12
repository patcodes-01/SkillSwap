import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ProfileCard from '../components/ProfileCard';
import mockProfiles from '../data/profiles';

export default function Home() {
  return (
    <div style={{ color: '#2c2c2c' }} className="home">
      <Header />
      <SearchBar />
      <section className="intro">
        <h2>Welcome to Skill Swap!</h2>
        <p>
          <h3>
            Discover, learn, and grow by exchanging skills with people around
            you. Offer what you know, learn what you need — and build meaningful
            connections through shared knowledge.
          </h3>
        </p>
      </section>

      <section className="explore-section">
        <h2>Explore Skills</h2>
        <div className="skill-grid">
          {[
            "Graphic Design",
            "Excel",
            "Public Speaking",
            "Cooking",
            "Photography",
            "Marketing",
            "UI/UX",
            "Python",
            "Music",
            "Resume Help",
            "SEO",
            "Social Media",
            "Video Editing",
            "Budgeting",
            "Coding Interviews",
            "DSA",
            "HTML/CSS",
            "Figma",
            "Canva",
            "Blogging",
            "Mandala Art",
            "Voice Modulation",
            "Creative Writing",
            "Copywriting",
            "Proofreading",
            "And more...",
          ].map((skill, i) => (
            <div className="skill-card" key={i}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <h2>Sponsored Profiles</h2>
      <div className="profile-scroll-wrapper">
        <div className="profile-grid auto-scroll">
  {[...mockProfiles, ...mockProfiles].map((profile, index) => (
    <ProfileCard key={index} profile={profile} />
  ))}
</div>
      </div>
    </div>
  );
}
