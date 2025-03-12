import React, { useEffect, useRef } from 'react';
import { Bot } from 'lucide-react';

export default function ChatBot() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Ensure iframe loads properly
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
        className="bg-orange-600 text-white p-4 rounded-t-lg flex items-center self-end cursor-pointer hover:bg-orange-700 transition-colors"
      >
        <Bot className="w-6 h-6 mr-2" />
        <span className="font-semibold">Chat-à-la-Carte Assistant</span>
      </button>
      
      {isOpen && (
        <div className="bg-white rounded-b-lg shadow-xl">
          <iframe
            ref={iframeRef}
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/6b155a74-1d8f-46c3-a655-50dea19cc6e6"
            className="border-0 w-full rounded-b-lg"
          />
        </div>
      )}
    </div>
  );
}