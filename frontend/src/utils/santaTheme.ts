import { createGlobalStyle } from "styled-components";

export const SantaStyle = createGlobalStyle`

.react-chatbot-kit-chat-container {
}

.react-chatbot-kit-chat-bot-avatar-container {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 1.2rem;
  margin-right: 12.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/images/santa_happy.svg") no-repeat;
}

.react-chatbot-kit-chat-bot-message {
  background-color: red;
}
`;
