import React, { useContext } from "react";
import styled, { css } from "styled-components";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import View from "../View";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { SantaContext } from "../../contexts/SantaContext";
import santa from "../../assets/images/santa_happy.svg";

const StyledView = styled(View)`
  display: flex;
  justify-content: flex-end;
  margin-right: 0.5em;
  position: absolute;
  width: 100%;
  height: 100%;

  /* Overides for Chatbot */
  ${({ theme }) => {
    const { palette } = theme;
    return css`
      .react-chatbot-kit-chat-container {
        margin-right: 1em;
        z-index: 1000;
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
  const { state } = useContext(SantaContext);

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
      {state.isOpen && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          messageHistory={loadMessages()}
          saveMessages={saveMessages}
        />
      )}
    </StyledView>
  );
};

export default Santa;
