
import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';

import config from "./components/config";
import MessageParser from "./components/MessageParser";
import ActionProvider from "./components/ActionProvider";

function App() {
  return (
    <div className="bg-slate-900 h-screen flex items-center justify-center">
      <div>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
    
        />
      </div>
    </div>
  );
}

export default App;