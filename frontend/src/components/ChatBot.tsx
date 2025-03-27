import React, { useEffect, useRef } from 'react';
import { Bot } from 'lucide-react';

export default function ChatBot() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.onload = () => {
        console.log('Dialogflow iframe loaded successfully');
      };
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 w-[350px] flex flex-col">
      <button
        onClick={toggleChat}
        className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 rounded-t-lg flex items-center self-end cursor-pointer hover:from-orange-700 hover:to-orange-600 transition-all shadow-lg"
      >
        <Bot className="w-6 h-6 mr-2" />
        <span className="font-semibold">Chat-à-la-Carte</span>
      </button>
      
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 flex flex-col items-center">
        <iframe
          ref={iframeRef}
          allow="microphone;"
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/6b155a74-1d8f-46c3-a655-50dea19cc6e6"
          className="border-0 w-full max-w-sm rounded-lg"
          loading="lazy"
          onError={(e) => console.error("Chatbot failed to load", e)}
        />
        <p className="mt-2 text-gray-600 text-sm">
          If the chatbot doesn’t load, please refresh or check your internet connection.
        </p>
      </div>
      
      )}
    </div>
  );
}