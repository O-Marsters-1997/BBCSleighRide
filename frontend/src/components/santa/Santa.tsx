import React, { useContext } from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { SantaContext } from "../../contexts/SantaContext";

const Santa: React.FC = () => {
  const { toggleSantaView } = useContext(SantaContext);

  return (
    <>
      {toggleSantaView && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
    </>
  );
};

export default Santa;
