import React from "react";
// import { Link } from "react-router-dom";
// import teamLogo from "./team.png";
import "./contact.css";
export default function ContactUs(props) {
  return (
    <>
      <div
        className="main"
        style={{
          backgroundColor: props.mode === "dark" ? "#395b64" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div>
          <h1 className="heading">Contact Us</h1>
        </div>
        <div className="body">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd"
              />
            </svg>
            <h2>By Phone</h2>
            <div>Phone: 99917-88188,88728-77282</div>
            <div>Toll Free No: 1700-999-2542</div>
            <div>Fax: 0181-5667272</div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <h2>By Mail</h2>
            <div>Email: nishtha@gmail.com</div>
            <div>Email: editorn@gmail.com</div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                clip-rule="evenodd"
              />
            </svg>
            <h2>By chat</h2>
            <p>
              Chat with a member of our in-house team.
              <div>
                Facebook:{" "}
                <a
                  className="link"
                  href="https://www.facebook.com/profile.php?id=100016526383868"
                  style={{
                    backgroundColor:
                      props.mode === "dark" ? "#395b64" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                >
                  fb@profile
                </a>
              </div>
              <div>Whatsapp: 87123-54678</div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
