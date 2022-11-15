import React from "react";

const MessageParser = ({
  children,
}: //   actions,
{
  children: any;
  //   actions: any;
}) => {
  const parse = (message: any) => {
    console.log(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          parse,
          actions: {},
        }),
      )}
    </div>
  );
};

export default MessageParser;
