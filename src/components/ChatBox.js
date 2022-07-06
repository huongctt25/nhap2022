import classes from "./chat.module.css";
import { AiOutlineSend } from "react-icons/ai";
import { useEffect, useState, useRef } from "react";
import { getCookie } from "../constant/request";
import { io } from "socket.io-client";
import axios from "axios";
const ChatBox = ({ socket, ...props }) => {
  const userid = getCookie("userid");
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const message = useRef();

  useEffect(() => {
    if (socket.current) {
      socket.current.on("message", (data) => {
        if (
          data.from === parseInt(userid) ||
          data.from === parseInt(props.chatuserid)
        ) {
          setArrivalMessage({ message: data.message, from: data.from });
        }
      });
      socket.current.emit("connection", {
        userid: userid,
      });
    }
    async function getData() {
      const url = process.env.REACT_APP_BACK_END + "/chats/messages";
      const response = await axios.post(url, {
        users: [parseInt(userid), parseInt(props.chatuserid)],
      });
      setMessages(response.data);
    }
    if (userid && props.chatuserid) {
      getData();
    } else {
      setMessages([]);
    }
  }, [props.chatuserid, props.chatUserEmail, userid]);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_BACK_END + "/chats";

    await axios.post(url, {
      from: parseInt(userid),
      to: parseInt(props.chatuserid),
      message: message.current.value,
    });

    socket.current.emit("sendmessage", {
      message: message.current.value,
      from: parseInt(userid),
      to: parseInt(props.chatuserid),
    });
    message.current.value = "";
  };

  return (
    <>
      <div className="container">
        <div
          className={classes["central-meta"]}
          style={{ backgroundColor: "rgba(215, 194, 255,0.2)" }}
        >
          <div className={classes["messages"]}>
            <div className={classes["message-box"]}>
              <div className={classes["peoples-mesg-box"]}>
                <div className={classes["conversation-head"]}>
                  <span>
                    <a>To: {props.chatUserEmail} </a>
                    <a>From: {props.currentUser?.email}</a>
                  </span>
                </div>
                <ul className={classes["chatting-area"]} id="message-template">
                  {messages.map((msg) => {
                    if (msg.from === parseInt(userid)) {
                      return (
                        <li className={classes["me"]}>
                          <p style={{ padding: "10px" }}>{msg.message}</p>
                        </li>
                      );
                    } else {
                      return (
                        <li className={classes["you"]}>
                          <p style={{ padding: "10px" }}>{msg.message}</p>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
            <form onSubmit={submitHandler}>
              <div className="row">
                <input
                  style={{
                    width: "90%",
                    height: "50px",
                    borderRadius: "10px",
                  }}
                  ref={message}
                />
                <button
                  title="send"
                  type="submit"
                  style={{
                    borderRadius: "100%",
                    marginLeft: "10px",
                    backgroundColor: "#7D9BF6",
                  }}
                >
                  <AiOutlineSend style={{ color: "white" }} size={35} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
