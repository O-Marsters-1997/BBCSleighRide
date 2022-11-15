// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage("hello", { loading: false }),
    // createChatBotMessage(
    //   "What is your name?",
    //   {
    //     widget: "airportSelector",
    //     delay: 500,
    //   }
    // ),
  ],
  botName: "Santa",
};

export default config;
