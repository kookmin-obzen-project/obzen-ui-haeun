import React, { useState, useEffect, useRef } from 'react';

type ChatModalProps = {
  onClose: () => void;
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
    setShowChart(true); // Show the chart when "더보기" ("Show More") button is clicked
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

  // 스크롤 가능한 컨테이너 높이 조정
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const chatRoomWidth = isExpanded ? 800 : 400; // Set the width based on the expanded state

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8" style={{ width: `${chatRoomWidth}px`, maxWidth: '90%' }}>
        <h2 className="text-2xl font-semibold mb-4">Chat Room</h2>
        <div className="flex mb-4">
          {/* Chat Container */}
          <div className="w-1/2 pr-4">
          {/* Chat Messages Container */}
          <div
            ref={messagesContainerRef}
            className="border rounded-lg flex-1 h-40 overflow-y-scroll"
            style={{ maxHeight: '200px' }}
          >
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
            style={{ float: 'right' }}
            disabled={inputText.trim() === ''}
          >
            Send
          </button>
        </form>
        <button className="mt-4 px-4 py-2 bg-indigo-900 text-white rounded-md" onClick={onClose}>
          Close
        </button>
        </div>
        {/* Chart Container */}
          {showChart && (
            <div className="w-1/2 pl-4">
              <div className="border rounded-lg h-40 overflow-y-scroll" style={{ maxHeight: '200px' }}>
                {/* Insert your chart component here */}
                {/* Example: <ChartComponent data={chartData} /> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
