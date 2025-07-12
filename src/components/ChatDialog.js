import React, { useState } from 'react';
import './ChatDialog.css';

export default function ChatDialog({ name, onClose }) {
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    setSent(true);
    setTimeout(() => {
      onClose(); 
    }, 3000); 
  };

  if (sent) {
    return (
      <div className="chat-dialog">
        <div className="chat-box">
          <h4>✅ Message Sent</h4>
          <p>Your message has been sent to {name}.</p>
          <button onClick={onClose} style={{ marginTop: '10px' }}>Close</button>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-dialog">
      <div className="chat-box">
        <h4>Chat with {name}</h4>
        <textarea placeholder="Type a message..."></textarea>
        <div className="chat-actions">
          <button onClick={onClose}>Close</button>
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}
