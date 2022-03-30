import './LoginForm.css';

export default function LoginForm() {
  return (
    <div className="login-container">
      <span className="join-room">Join a room</span>

      <form className="login-form">
        <p className="login-name">
          <label htmlFor="name">Name</label>

          <input type="text" id="name" name="name" placeholder="Enter Name"/>
        </p>

        <p className="login-room">
          <label htmlFor="room">Room</label>
          <input type="text" id="room" name="room" placeholder="General"/>
        </p>

        <button>Start Chatting</button>
      </form>
    </div>
  );
}
