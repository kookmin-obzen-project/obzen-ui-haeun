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

  // Define the width constants for different states
  const expandedWidth = 800; // Set the width when the chat room is expanded
  const collapsedWidth = 400; // Set the width when the chat room is collapsed

  // Determine the current width based on isExpanded state
  const chatRoomWidth = isExpanded ? expandedWidth : collapsedWidth;

  // Determine the width of the chat message container based on isExpanded state
  const chatMessageContainerWidth = isExpanded ? 'w-1/2' : 'w-full';

  // Determine the width of the chart container based on isExpanded state
  const chartContainerWidth = isExpanded ? 'w-1/2' : 'w-0';


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8" style={{ width: `${chatRoomWidth}px`, maxWidth: '90%' }}>
        <h2 className="text-2xl font-semibold mb-4">Chat Room</h2>
        <div className="flex mb-4">
          {/* Left Half - Chat Container */}
          <div className={chatMessageContainerWidth + ' pr-2'}>
            {/* Chat Messages Container */}
            <div
              className={`${
                showChart ? 'border-t border-gray-400' : '' // Add border at the top if the chart is visible
              }`}
            >
              {/* Chat Messages Container */}
              <div
                ref={messagesContainerRef}
                className="border rounded-lg h-40 overflow-y-scroll"
                style={{ maxHeight: '200px' }}
              >
                {/* Render chat messages */}
                {messages.map((message, index) => (
                  <div key={index} className={`p-2 border-b ${message.isMine ? 'text-right' : 'text-left'}`}>
                    <div className={`message-container ${message.isMine ? 'self-end' : 'self-start'}`}>
                      <div
                        className={`relative inline-block rounded-lg p-2 ${
                          message.isMine ? 'bg-indigo-900 text-white' : 'bg-gray-300'
                        }`}
                        style={{
                          borderRadius: message.isMine ? '20px 20px 0 20px' : '20px 20px 20px 0',
                        }}
                      >
                        {message.text}
                      </div>
                    </div>
                    {/* "더보기" 버튼 말풍선 아래에 배치 */}
                    <div className={`${message.isMine ? 'text-right' : 'text-left'}`}>
                      <button
                        className={`mt-1 text-xs text-gray-500 hover:text-gray-700`}
                        onClick={handleShowMore}
                      >
                        더보기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              {/* Chat Input */}
              <div className="flex items-center border rounded px-2 py-1">
                <input
                  type="text"
                  value={inputText}
                  onChange={handleInputChange}
                  className="flex-1 focus:outline-none"
                />
                {/* Send Button (Icon) */}
                <button
                  type="submit"
                  className={`ml-2 text-indigo-900 hover:text-indigo-700 focus:outline-none`}
                  disabled={inputText.trim() === ''}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.293 2.293a1 1 0 011.414 0l.5.5a1 1 0 010 1.414L3.414 19.95a1 1 0 01-.758.318H2.5a1 1 0 01-1-1V18a1 1 0 01.319-.758L16.207 1.293a1 1 0 011.414 0zM6.732 14.268a1 1 0 010 1.414L5.415 17l-.001.001a.998.998 0 01-1.413-.001.997.997 0 010-1.414L4.587 15l1.147-1.147a.999.999 0 111.414 1.414zm5.816-.5a1 1 0 01.001 1.414L9.002 17l1.146 1.146a.999.999 0 11-1.414 1.414L7.589 18 6.443 16.854a1 1 0 011.414-1.414l1.147 1.146 1.146-1.146a1 1 0 111.414 1.414L11.43 17l1.146 1.146a1 1 0 01-1.414 1.414L10.002 18l-1.146-1.146a1 1 0 010-1.414l1.146-1.146zm4.732-9.518l-13.42 13.42-.907 3.207 3.206-.907 13.42-13.42-2.999-2.999zm-8.214 11.63l-2.001-2.001 2.999-2.999 2.001 2.001-2.999 2.999z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </form>
            {/* Close Button */}
            <button
              className="mt-4 px-4 py-2 bg-indigo-900 text-white rounded-md"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          {/* Right Half - Chart Container */}
          {isExpanded && (
            <div className="w-1/2 pl-2">
              <div className="border rounded-lg h-full overflow-y-scroll" style={{ maxHeight: '200px' }}>
                {/* Insert your chart component here */}
                {/* Example: <ChartComponent data={chartData} /> */}
                {showChart && <ChartComponent data={chartData} />} {/* Render the chart based on showChart state */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
