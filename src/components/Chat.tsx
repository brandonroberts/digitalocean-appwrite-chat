import { Models } from 'appwrite';
import { useEffect, useState } from 'react';
import { api } from '../api';
import './Chat.css';

export type ChatMessage = Models.Document & {
  name: string;
  message: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    api.database.listDocuments('chat').then(data => {
      setMessages(data.documents as ChatMessage[]);
    });
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="title">Let's Chat</div>
        <div className="leave">Leave Room</div>
      </div>

      <div className="chat-body">
        {
          messages.map(message => (
            <div className="message" key={message.$id}>
              {message.name}: {message.message}
            </div>
          ))
        }
      </div>

      <div className="chat-message">
        <input type="text" placeholder="Type a message..." />
        <button>Send Message</button>
      </div>
    </div>
  );
}
