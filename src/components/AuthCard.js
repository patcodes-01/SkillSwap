import React, { useState } from 'react';
import './AuthCard.css';

export default function AuthCard({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-card">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <input placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={onLogin}>{isLogin ? 'Login' : 'Sign Up'}</button>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? <b>Don't have an account? Sign Up</b> : <b>Already have an account? Login</b>}
      </p>
    </div>
  );
}

// import React, { useState } from 'react';
// import './AuthCard.css';

// export default function AuthCard({ onLogin }) {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="auth-wrapper">
//       <div className={`auth-flip-card ${isLogin ? '' : 'flipped'}`}>
//         {/* Front Side: Login */}
//         <div className="auth-face auth-front">
//           <h2><center>Login</center></h2>
//           <input placeholder="Username" />
//           <input type="password" placeholder="Password" />
//           <button onClick={onLogin}>Login</button>
//           <p onClick={() => setIsLogin(false)}>
//             <b><center>Don't have an account? Sign Up</center></b>
//           </p>
//         </div>

//         {/* Back Side: Signup */}
//         <div className="auth-face auth-back">
//           <h2><center>Sign Up</center></h2>
//           <input placeholder="Username" />
//           <input type="password" placeholder="Password" />
//           <button onClick={onLogin}>Sign Up</button>
//           <p onClick={() => setIsLogin(true)}>
//             <b>Already have an account? Login</b>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
