import { useState, useRef } from 'react';
import './AIChat.css';

export default function AIChat() {
  const [chatMessage, setChatMessage] = useState('');
  const chatTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSendClick = () => {
    // Obtenemos el valor del textarea utilizando la referencia
    const message = chatTextAreaRef.current?.value;

    // Actualizamos el estado con el contenido del textarea
    setChatMessage(message || '');

    if (chatTextAreaRef.current) {
      chatTextAreaRef.current.value = '';
    }
  };

  return (
    <>
      <div className="response-chat">
        <p>{chatMessage}</p>
      </div>
      <div className="request-chat d-flex">
        <textarea ref={chatTextAreaRef} className="request-chat-area" />
      </div>
      <button className="sendBtn btn btn-primary" onClick={handleSendClick}>send</button>
    </>
  );
}
