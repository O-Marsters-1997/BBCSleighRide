import React, { useContext } from "react";
import View from "../View";
import { SantaContext } from "../../contexts/SantaContext";

const MessageParser = ({
  children,
  actions,
}: //
{
  children: any;
  actions: any;
}) => {
  const { state } = useContext(SantaContext);
  const parse = (message: string) => {
    const { messages } = state;
    switch (messages.length) {
      case 0:
        actions.greet();
        break;
      case 1:
        actions.nice(message);
        break;
      case 2:
        actions.goodChoice();
        setTimeout(() => {
          actions.goodbye1();
        }, 2000);
        setTimeout(() => {
          actions.goodbye2();
        }, 4000);
        break;
      case 5:
        break;
      default:
        actions.tooBusy();
    }
  };

  return (
    <View>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          parse,
          actions,
        }),
      )}
    </View>
  );
};

export default MessageParser;
