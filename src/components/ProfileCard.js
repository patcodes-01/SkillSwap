import React, { useState } from 'react';
import ChatDialog from './ChatDialog';
import './ProfileCard.css';

export default function ProfileCard({ profile }) {
  const [openChat, setOpenChat] = useState(false);
  const [openSwap, setOpenSwap] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [requestSent, setRequestSent] = useState(false);

  const handleSendRequest = () => {
    setRequestSent(true);
    setTimeout(() => {
      setOpenSwap(false);
      setRequestSent(false);
      setSelectedSkill('');
    }, 1500);
  };

  return (
    <div className="profile-card">
      <img src={profile.image || '/user-icon.png'} alt="User" />
      <h4>{profile.name}</h4>
      <p>Skills: {profile.skills.join(', ')}</p>
      <p>Rating: {profile.rating}★</p>

      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <button onClick={() => setOpenChat(true)}>Chat</button>
        <button
          style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '6px 12px', cursor: 'pointer', borderRadius: '4px' }}
          onClick={() => setOpenSwap(true)}
        >
          Swap
        </button>
      </div>

      {openChat && (
        <ChatDialog name={profile.name} onClose={() => setOpenChat(false)} />
      )}

      {openSwap && (
        <div className="chat-dialog">
          <div className="chat-box">
            <h4>Request a Skill from {profile.name}</h4>
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            >
              <option value="">Select a skill</option>
              {profile.skills.map((skill, index) => (
                <option key={index} value={skill}>{skill}</option>
              ))}
            </select>
            <div className="chat-actions">
              <button onClick={() => setOpenSwap(false)}>Cancel</button>
              <button onClick={handleSendRequest} disabled={!selectedSkill}>Send Request</button>
            </div>
            {requestSent && (
              <p style={{ marginTop: '10px', color: 'green' }}>
                ✅ Request sent successfully!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
