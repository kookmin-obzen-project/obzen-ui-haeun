import React, { useState, useEffect, useRef } from 'react';

type ChatModalProps = {
  onClose: () => void;
};

const ChatModal: React.FC<ChatModalProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{ text: string; isMine: boolean }[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesContainerRef = useRef<HTMLDivElement>(null);

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
    // 이 함수를 원하는 대로 구현하여 추가 메시지를 가져오는 동작을 처리하세요.
    // 예시에서는 가짜 데이터를 사용하여 간단히 구현하였습니다.
    const moreFakeMessages = [
      { text: 'More messages!', isMine: true },
      { text: 'Even more messages!', isMine: false },
    ];
    setMessages((prevMessages) => [...prevMessages, ...moreFakeMessages]);
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


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8">
        <h2 className="text-2xl font-semibold mb-4">Chat Room</h2>
        <div
          ref={messagesContainerRef}
          className="border rounded-lg h-40 overflow-y-scroll mb-4"
          style={{ maxHeight: '200px' }}
        >
          {messages.map((message, index) => (
            <div key={index} className={`p-2 border-b ${message.isMine ? 'text-right' : 'text-left'}`}>
              <div
                className={`relative inline-block rounded-lg p-2 ${
                  message.isMine ? 'bg-indigo-900 text-white' : 'bg-gray-300'
                }`}
                style={{
                  borderRadius: message.isMine ? '20px 20px 0 20px' : '20px 20px 20px 0',
                }}
              >
                {message.text}
                <button className="absolute right-1 bottom-1 text-xs text-gray-500 hover:text-gray-700" onClick={handleShowMore}>
                  더보기
                </button>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 w-full"
          />
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
    </div>
  );
};

export default ChatModal;