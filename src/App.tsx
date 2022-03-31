import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Routes>
      <Route path="chat" element={<Chat />} />
      <Route
        path="/"
        element={
          <div className="app-container">
            <div className="content">
              <span className="do-title">DigitalOcean Tech Talk</span>
              <span className="appwrite-chat">Appwrite Chat</span>
              <LoginForm />
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
