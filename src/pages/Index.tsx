import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";

const Index = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "你好!我是聊天机器人,很高兴见到你!", isBot: true }
  ]);

  const handleSend = (message: string) => {
    setMessages(prev => [...prev, { text: message, isBot: false }]);
    // 模拟机器人回复
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "收到你的消息了!", isBot: true }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-1 overflow-y-auto space-y-4 p-4 max-w-3xl mx-auto w-full">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.text}
            isBot={msg.isBot}
          />
        ))}
      </div>
      <div className="border-t bg-white">
        <div className="max-w-3xl mx-auto p-4">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
};

export default Index;