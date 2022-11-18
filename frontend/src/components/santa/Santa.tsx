import React from "react";
import styled, { css } from "styled-components";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import View from "../View";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { deviceMax } from "../../types/constants";
import santa from "../../assets/images/santa_happy.svg";

const StyledView = styled(View)`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0%;

  /* Overides for Chatbot */
  ${({ theme }) => {
    const { palette } = theme;
    return css`
      .react-chatbot-kit-chat-container {
        z-index: 1;
        margin-right: 1em;
        @media ${deviceMax.small} {
          margin-right: 0;
          width: 80%;
          margin-left: auto;
        }

        .react-chatbot-kit-chat-inner-container {
          border: 0.5px solid ${palette.grey.muted};
          box-shadow: 0px 2px 9px ${palette.grey.muted};
          .react-chatbot-kit-chat-bot-message {
            background-color: ${palette.primary.main};
            .react-chatbot-kit-chat-bot-message-arrow {
              border-right: 8px solid ${palette.primary.main};
            }
          }

          .react-chatbot-kit-chat-bot-avatar-container {
            background: url(${santa}) no-repeat;
            .react-chatbot-kit-chat-bot-avatar-letter {
              display: none;
            }
          }

          .react-chatbot-kit-chat-btn-send {
            background-color: ${palette.primary.main};
            svg {
              fill: #fff;
              width: 20px;
              transform: translateY(2px);
            }
          }
        }
      }
    `;
  }}
`;

const Santa: React.FC = () => {
  const saveMessages = (messages: string[]) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(
      localStorage.getItem("chat_messages") as string,
    );
    return messages;
  };

  return (
    <StyledView>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        messageHistory={loadMessages()}
        saveMessages={saveMessages}
      />
    </StyledView>
  );
};

export default Santa;
