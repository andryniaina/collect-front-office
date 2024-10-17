// LoginPopup.tsx
import React, { useEffect, useRef } from 'react';
import './LoginPopup.css';

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: any;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ setIsOpen,isOpen, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const onLogin = () => {
    setIsOpen(false) ;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content" ref={popupRef}>
        <h2>Enter your Collect credentials</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />

          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember on this computer</label>
          </div>

          <button type="submit" onClick={onLogin} className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
