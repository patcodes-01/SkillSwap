import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    skillsOffered: '',
    skillsWanted: '',
    availability: '',
  });

  // Load saved profile from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('myProfile');
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  // Save profile to localStorage on change
  useEffect(() => {
    localStorage.setItem('myProfile', JSON.stringify(profile));
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', color: '#2c2c2c'  }}>
      <h2>My Profile</h2>
      <label>
        <strong>Name:</strong>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px',height: '30px' }}
        />
      </label>
      <label>
        <strong>Skills Offered:</strong>
        <input
          type="text"
          name="skillsOffered"
          value={profile.skillsOffered}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px',height: '30px' }}
        />
      </label>
      <label>
        <strong>Skills Wanted:</strong>
        <input
          type="text"
          name="skillsWanted"
          value={profile.skillsWanted}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px',height: '30px' }}
        />
      </label>
      <label>
        <strong>Availability:</strong>
        <input
          type="text"
          name="availability"
          value={profile.availability}
          onChange={handleChange}
          style={{ width: '100%',height: '30px' }}
        />
      </label>
      <p style={{ marginTop: '20px', color: 'green' }}>
        ✅ Changes saved automatically.
      </p>
    </div>
  );
}
