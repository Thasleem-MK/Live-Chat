// const MessageOthers = () => {
//   let props1 = { name: "Random User", Message: "This is a sample message.This is the sample message.This is the sample message.This is the sample message.This is the sample message.This is the sample message.This is the sample message."};
//   return (
//     <div className="Other-messge-container">
//       <div className="conversation-container">
//         <p className="con-icon">{props1.name[0]}</p>
//         <div className="other-text-content">
//           <p className="con-title">{props1.name}</p>
//           <p className="con-lastMessage">{props1.Message}</p>
//           <p className="self-timestamp">12.00am</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MessageOthers;



const MessageOthers = () => {
  let props1 = {
    name: "Random User",
    message:
      "This is a sample message. This is the sample message. This is the sample message. This is the sample message. This is the sample message. This is the sample message. This is the sample message.",
  };

  return (
    <div className="flex justify-start w-[60%]">
      <div className="grid grid-cols-[32px_auto] gap-x-2 p-2 m-1 rounded-lg bg-gray-200">
        <p className="flex justify-center items-center bg-gray-400 text-white text-2xl font-bold h-8 w-8 rounded-full">
          {props1.name[0]}
        </p>
        <div className="flex flex-col">
          <p className="font-bold text-gray-800">{props1.name}</p>
          <p className="text-gray-600">{props1.message}</p>
          <p className="self-end text-sm text-gray-500">12.00am</p>
        </div>
      </div>
    </div>
  );
};

export default MessageOthers;