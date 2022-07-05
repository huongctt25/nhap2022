import classes from "./chat.module.css";
import { AiOutlineSend } from "react-icons/ai";
const ChatBox = (props) => {
  return (
    <>
      {" "}
      <div className="container">
        <div className={classes["central-meta"]}>
          <div className={classes["messages"]}>
            <div className={classes["message-box"]}>
              <div className={classes["peoples-mesg-box"]}>
                <div className={classes["conversation-head"]}>
                  <span>
                    <a>Huong xinh</a>
                  </span>
                </div>
                <ul className={classes["chatting-area"]} id="message-template">
                  <li className={classes["you"]}>
                    <p style={{ padding: "10px" }}>Hello 1234</p>
                  </li>
                  <li className={classes["me"]}>
                    <p style={{ padding: "10px" }}>How are you</p>
                  </li>
                  <li className={classes["you"]}>
                    <p style={{ padding: "10px" }}>I'm fine thank you </p>
                  </li>
                  <li className={classes["you"]}>
                    <p style={{ padding: "10px" }}>Hello 1234</p>
                  </li>
                  <li className={classes["me"]}>
                    <p style={{ padding: "10px" }}>How are you</p>
                  </li>
                  <li className={classes["you"]}>
                    <p style={{ padding: "10px" }}>I'm fine thank you </p>
                  </li>
                  <li className={classes["you"]}>
                    <p style={{ padding: "10px" }}>Hello 1234</p>
                  </li>
                  <li className={classes["me"]}>
                    <p style={{ padding: "10px" }}>How are you</p>
                  </li>
                  <li className={classes["you"]}>
                    <p style={{ padding: "10px" }}>I'm fine thank you </p>
                  </li>
                  <li className={classes["you"]}>
                    <p style={{ padding: "10px" }}>Hello 1234</p>
                  </li>
                  <li className={classes["me"]}>
                    <p style={{ padding: "10px" }}>How are you</p>
                  </li>
                  <li className={classes["you"]}>
                    <p style={{ padding: "10px" }}>
                      One of the most diverse and unique cuisines in Asia and
                      the world with its colorful flavors of sweet sour spicy
                      and the crunchy texture of fresh herbs that dial down the
                      strong flavors, creating a culinary harmony in your mouth.
                      Here are the top 10 dishes you MUST try as a tourist in
                      Hanoi, Vietnam.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <form>
              <div className="row">
                <textarea
                  style={{ width: "90%", borderRadius: "10px" }}
                ></textarea>
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
