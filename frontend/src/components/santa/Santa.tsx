import React, { useContext, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { SantaContext } from "../../contexts/SantaContext";

const OtherChild = () => {
  const { toggleSantaView, setToggleSantaView } = useContext(SantaContext);

  useEffect(() => {
    console.log(toggleSantaView);
  }, [toggleSantaView]);

  const handleClick = () => {
    setToggleSantaView((prev: any) => !prev);
  };

  return (
    <button type="button" onClick={handleClick}>
      Click me
    </button>
  );
};

const Santa: React.FC = () => {
  const { toggleSantaView, setToggleSantaView } = useContext(SantaContext);

  useEffect(() => {
    console.log(toggleSantaView);
  }, [toggleSantaView]);

  const handleClick = () => {
    setToggleSantaView((prev: any) => !prev);
  };
  return (
    <>
      <OtherChild />
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      )
    </>
  );
};

export default Santa;
