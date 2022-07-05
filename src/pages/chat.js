import { useState } from "react";
import { getCookie } from "../constant/request";
const Chat = () => {
  // const { email } = useAuth();
  const userid = getCookie("userid");
  const [messages, setMessages] = useState([]);
  return (
    <>
      <p>Chat</p>
    </>
  );
};
export default Chat;
