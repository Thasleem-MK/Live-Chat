// const MessageSelf = () => {
//   let prop2 = {
//     name: "You",
//     message:
//       "This is a sample message.This is the sample message.This is the sample message.This is the sample message.This is the sample message.This is the sample message.This is the sample message.",
//   };
//   return (
//     <div className="self-message-controller">
//       <div className="messageBox">
//         <p>{prop2.message}</p>
//         <p className="self-timestamp">12.00am</p>
//       </div>
//     </div>
//   );
// };

// export default MessageSelf;



const MessageSelf = () => {
  let prop2 = {
    name: "You",
    message:
      "This is a sample message. This is the sample message. This is the sample message. This is the sample message. This is the sample message. This is the sample message. This is the sample message.",
  };

  return (
    <div className="flex w-full justify-end">
      <div className="flex flex-col p-2 m-1 rounded-lg bg-gray-200 w-[60%]">
        <p className="text-gray-800">{prop2.message}</p>
        <p className="self-end text-sm text-gray-500">12.00am</p>
      </div>
    </div>
  );
};

export default MessageSelf;