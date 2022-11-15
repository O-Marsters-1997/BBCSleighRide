import React from "react";
// import { IMessageOptions } from "react-chatbot-kit/src/interfaces/IMessages";

const ActionProvider = ({
  //   createChatBotMessage,
  //   setState,
  children,
}: {
  //   createChatBotMessage: (message: string, options: IMessageOptions) => any;
  //   setState: any;
  children: any;
}) => (
  <div>
    {React.Children.map(children, (child) =>
      React.cloneElement(child, {
        actions: {},
      }),
    )}
  </div>
);

export default ActionProvider;
