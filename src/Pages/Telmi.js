import React from "react";
import "./telmi.css";

const Telmi = () => {
  const chats = [
    {
      type: "sent-message",
      content: "hie how are you",
    },
    {
      type: "received-message",
      content: "hie how are you",
    },
  ];
  return (
    <div className="chatbox bg-warning vh-100 overflow-hidden">
      <div className="row">
        <div className="col-md-6 mx-auto h-100">
          <div className="d-flex align-items-center justify-content-center bg-primary">
            <div className="messagebox bg3" style={{ height: 500, width: 300 }}>
              {/* <div className="received-message">hie</div>
              <div className="sent-message bg-success float-end">hie</div> */}
              <div className="the-chat mt-5 d-flexs bg-primary w-100">
                {[1, 2, 3, 4, 5].map((message, idx) => (
                  <div
                    className={
                      message % 2 === 0 ? "float-left bg-danger" : "float-right"
                    }
                    id={idx}
                  >
                    {message}
                  </div>
                ))}
                {/* {chats.map((message, idx) => (
                  <div
                    className={
                      message.type === "sent-message"
                        ? "float-start  bg-warning received-message"
                        : "float-end bg-info sent-message"
                    }
                    id={idx}
                  >
                    {message.content}
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telmi;
