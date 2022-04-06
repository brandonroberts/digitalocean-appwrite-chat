import { Appwrite } from 'appwrite';

export const api = new Appwrite();
api.setEndpoint('https://do-chat.sideproject.live/v1')
api.setProject('chat');
