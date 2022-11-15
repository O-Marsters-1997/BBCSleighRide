import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const Santa: React.FC = () => (
  <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}
  />
);

export default Santa;
