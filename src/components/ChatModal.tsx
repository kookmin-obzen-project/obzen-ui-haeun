import React, { useState, useEffect, useRef } from 'react';
import ChartComponent from './ChartComponent'; // Import the newly created ChartComponent

type ChatModalProps = {
  onClose: () => void;
};

const chartData = {
  categories: ['Category 1', 'Category 2', 'Category 3'], // An array of category labels for the x-axis
  series: [
    {
      name: 'Series 1',
      data: [30, 40, 25], // An array of numerical values for the y-axis corresponding to each category
    },
    {
      name: 'Series 2',
      data: [15, 20, 35],
    },
  ],
};

const ChatModal: React.FC<ChatModalProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{ text: string; isMine: boolean }[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false); // Track whether the chat room is expanded or not
  const [showChart, setShowChart] = useState(false); // Track whether the chart is visible or not

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, { text: inputText, isMine: true }]);
      setInputText('');
    }
  };

  const handleShowMore = () => {
    setIsExpanded((prevExpanded) => !prevExpanded); // Toggle the expanded state
    setShowChart((prevShowChart) => !prevShowChart); // Toggle the chart visibility
  };

  // 초기 메시지 로드
  useEffect(() => {
    const fakeMessages = [
      { text: 'Hello!', isMine: false },
      { text: 'Hi there!', isMine: false },
      { text: 'How are you?', isMine: false },
    ];
    setMessages(fakeMessages);
  }, []);


  useEffect(() => {
    // Scroll the chat messages container to the bottom whenever messages or chart visibility changes
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, showChart]);

  const chatRoomWidth =  800; // Set the width based on the expanded state

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8" style={{ width: `${chatRoomWidth}px`, maxWidth: '90%' }}>
        <h2 className="text-2xl font-semibold mb-4">Chat Room</h2>
        <div className="flex mb-4">
          {/* Left Half - Chat Container */}
          <div className="w-1/2 pr-2">
            {/* Chat Messages Container */}
            <div
              ref={messagesContainerRef}
              className="border rounded-lg h-40 overflow-y-scroll"
              style={{ maxHeight: '200px' }}
            >
              {/* Render chat messages */}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-2 border-b ${message.isMine ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`relative inline-block rounded-lg p-2 ${
                      message.isMine ? 'bg-indigo-900 text-white' : 'bg-gray-300'
                    }`}
                    style={{
                      borderRadius: message.isMine ? '20px 20px 0 20px' : '20px 20px 20px 0',
                    }}
                  >
                    {message.text}
                    <button
                      className="absolute right-1 bottom-1 text-xs text-gray-500 hover:text-gray-700"
                      onClick={handleShowMore}
                    >
                      더보기
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              {/* Chat Input */}
              <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 w-full"
              />
              {/* Send Button */}
              <button
                type="submit"
                className={`mt-2 px-4 py-2 rounded-md ${
                  messages.length > 0 ? 'bg-indigo-900 text-white' : 'bg-gray-300 text-gray-600'
                }`}
                disabled={inputText.trim() === ''}
              >
                Send
              </button>
            </form>
            <button className="mt-4 px-4 py-2 bg-indigo-900 text-white rounded-md" onClick={onClose}>
              Close
            </button>
          </div>
        {/* Right Half - Chart Container */}
        {isExpanded && (
          <div className="w-1/2 pl-2">
            <div className="border rounded-lg h-40 overflow-y-scroll" style={{ maxHeight: '200px' }}>
              {/* Insert your chart component here */}
              <ChartComponent data={chartData} /> {/* Render the ChartComponent with chartData */}
            </div>
          </div>
        )}     
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
