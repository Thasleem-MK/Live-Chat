// export interface Props {
//   name: string;
//   lastMessage: string;
//   time: string;
// }
// const ConversationItem = ({ props }: { props: Props }) => {
//   return (
//     <div className="conversation-container">
//       <p className="con-icon">{props.name[0]}</p>
//       <p className="con-title">{props.name}</p>
//       <p className="con-lastMessage">{props.lastMessage}</p>
//       <p className="con-timestamp">{props.time}</p>
//     </div>
//   );
// };

// export default ConversationItem;

export interface Props {
  name: string;
  lastMessage: string;
  time: string;
}

const ConversationItem = ({ props }: { props: Props }) => {
  return (
    <div className="grid grid-cols-[32px_auto_auto] grid-rows-2 gap-x-2 p-2 m-1 rounded-lg hover:bg-gray-200">
      <p className="flex justify-center items-center bg-gray-400 text-white text-2xl font-bold h-8 w-8 rounded-full">
        {props.name[0]}
      </p>
      <p className="font-bold text-gray-800">{props.name}</p>
      <p className="text-sm text-gray-500 justify-self-end">{props.time}</p>
      <p className="col-span-2 text-sm text-gray-600 justify-self-center">
        {props.lastMessage}
      </p>
    </div>
  );
};

export default ConversationItem;
