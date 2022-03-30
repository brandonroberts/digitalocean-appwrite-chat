import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <span className="do-title">DigitalOcean Tech Talk</span>
        <span className="appwrite-chat">Appwrite Chat</span>

        <LoginForm />
      </div>
    </div>
  );
}

export default App;
