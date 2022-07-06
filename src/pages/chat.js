import { useEffect, useState, useRef } from "react";
import { getAsync, getCookie } from "../constant/request";
import classes from "../components/chat.module.css";
import { AiOutlineSend } from "react-icons/ai";
import { io } from "socket.io-client";
import ChatBox from "../components/ChatBox";
import { getAsyncWithToken } from "../constant/request";
const Chat = () => {
  const [chatuserid, setChatUserId] = useState(null);
  const [chatUserEmail, setChatUserEmail] = useState(null);
  const [users, setUsers] = useState([]);
  const [onlineIds, setOnlineIds] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const socket = useRef();
  useEffect(() => {
    socket.current = io(process.env.REACT_APP_BACK_END);
  }, []);

  useEffect(() => {
    async function getData() {
      const url = process.env.REACT_APP_BACK_END + "/users";
      const response = await getAsync(url);
      setUsers(response.data);
      const url2 = process.env.REACT_APP_BACK_END + "/auth/profile";
      const responseCurrentUser = await getAsyncWithToken(url2);
      setCurrentUser(responseCurrentUser.data);
    }
    getData();
    socket.current.on("online", (data) => {
      setOnlineIds(data.userIds);
    });
  }, []);
  return (
    <>
      <ul>
        {users.map((user) => {
          if (onlineIds.includes(user.id)) {
            return (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  setChatUserId(user.id);
                  setChatUserEmail(user.email);
                }}
              >
                {user.email} -- online
              </li>
            );
          } else {
            return (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  setChatUserId(user.id);
                  setChatUserEmail(user.email);
                }}
              >
                {user.email}
              </li>
            );
          }
        })}
      </ul>
      <ChatBox
        chatuserid={chatuserid}
        chatUserEmail={chatUserEmail}
        currentUser={currentUser}
        socket={socket}
      />
    </>
  );
  // const [messages, setMessages] = useState([]);
  // const [arrivalMessage, setArrivalMessage] = useState(null);
  // const socket = useRef();
  // const message = useRef();

  // useEffect(() => {
  //   socket.current = io(process.env.REACT_APP_BACK_END);
  // }, []);

  // useEffect(() => {
  //   if (socket.current) {
  //     socket.current.on("message", (data) => {
  //       console.log(chatuserid === data.from);
  //       if (data.from === userid || data.from === chatuserid) {
  //         setArrivalMessage({ message: data.message, from: data.from });
  //       }
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  // }, [arrivalMessage]);

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   socket.current.emit("sendmessage", {
  //     message: message.current.value,
  //     from: userid,
  //   });
  //   message.current.value = "";
  // };

  // return (
  //   <>
  //     <div className="container">
  //       <div className={classes["central-meta"]}>
  //         <div className={classes["messages"]}>
  //           <div className={classes["message-box"]}>
  //             <div className={classes["peoples-mesg-box"]}>
  //               <div className={classes["conversation-head"]}>
  //                 <span>
  //                   <a>Huong </a>
  //                 </span>
  //               </div>
  //               <ul className={classes["chatting-area"]} id="message-template">
  //                 {messages.map((msg) => {
  //                   if (msg.from === userid) {
  //                     return (
  //                       <li className={classes["me"]}>
  //                         <p style={{ padding: "10px" }}>{msg.message}</p>
  //                       </li>
  //                     );
  //                   } else {
  //                     return (
  //                       <li className={classes["you"]}>
  //                         <p style={{ padding: "10px" }}>{msg.message}</p>
  //                       </li>
  //                     );
  //                   }
  //                 })}
  //               </ul>
  //             </div>
  //           </div>
  //           <form onSubmit={submitHandler}>
  //             <div className="row">
  //               <input
  //                 style={{
  //                   width: "90%",
  //                   height: "50px",
  //                   borderRadius: "10px",
  //                 }}
  //                 ref={message}
  //               />
  //               <button
  //                 title="send"
  //                 type="submit"
  //                 style={{
  //                   borderRadius: "100%",
  //                   marginLeft: "10px",
  //                   backgroundColor: "#7D9BF6",
  //                 }}
  //               >
  //                 <AiOutlineSend style={{ color: "white" }} size={35} />
  //               </button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
};
export default Chat;
