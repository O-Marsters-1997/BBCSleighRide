import React, { useContext } from "react";
import { IMessageOptions } from "react-chatbot-kit/src/interfaces/IMessages";
import View from "../View";
import { SantaContext } from "../../contexts/SantaContext";

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}: {
  createChatBotMessage: (message: string, options?: IMessageOptions) => any;
  setState: any;
  children: any;
}) => {
  const { dispatch, SantaActionType } = useContext(SantaContext);

  const incrementMessagesSent = (message: string) => {
    dispatch({ type: SantaActionType.INCREMENT_MESSAGES, payload: message });
  };

  const updateState = (message: string) => {
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  const greet = () => {
    const botMessage = createChatBotMessage(
      "Hello. Nice to Meet you. What is your name?",
    );
    updateState(botMessage);
    incrementMessagesSent(botMessage);
  };

  const nice = (name: string) => {
    const botMessage = createChatBotMessage(
      `Nice to meet you, ${name}, I see you are on the nice list. What do you want for Christmas?`,
    );
    updateState(botMessage);
    incrementMessagesSent(botMessage);
  };

  const goodChoice = () => {
    const botMessage = createChatBotMessage("Wow that is a great choice");
    updateState(botMessage);
    incrementMessagesSent(botMessage);
  };

  const goodbye1 = () => {
    const botMessage = createChatBotMessage(
      "Well it was nice meeting you and hope to see you soon.",
    );
    updateState(botMessage);
  };

  const goodbye2 = () => {
    const botMessage = createChatBotMessage(
      "Don't forget to leave me a mince pie and Rudolph a carrot when we come to give you your presents!",
    );
    updateState(botMessage);
  };

  const tooBusy = () => {
    const botMessage = createChatBotMessage(
      "Sorry name, I've got to go now to gives the elves your Christmas list",
    );
    updateState(botMessage);
    incrementMessagesSent(botMessage);
  };

  return (
    <View>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          actions: { greet, nice, goodChoice, goodbye1, goodbye2, tooBusy },
        }),
      )}
    </View>
  );
};

export default ActionProvider;
