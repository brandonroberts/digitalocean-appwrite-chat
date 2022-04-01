import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

export default function LoginForm() {

  async function login(e: any) {
    e.preventDefault();
  }

  return (
    <div className="login-container">
      <span className="join-room">Join a room</span>

      <form className="login-form" onSubmit={login}>
        <p className="login-name">
          <label htmlFor="name">Name</label>

          <input type="text" id="name" name="name" placeholder="Enter Name" />
        </p>

        <p className="login-room">
          <label htmlFor="room">Room</label>
          <input type="text" id="room" name="room" placeholder="Room Name" />
        </p>

        <button type="submit">Start Chatting</button>
      </form>
    </div>
  );
}
