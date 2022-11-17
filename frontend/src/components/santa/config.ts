// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage("Ho ho Ho Merry Christmas!", { loading: false }),
  ],
  botName: "Santa",
};

export default config;
