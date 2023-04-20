// import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css"; //import css stylesheet
import Textform from "./components/Textform";
import ContactUs from "./components/ContactUs";
import { useState } from "react";
// import Alert from "./components/Alert";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("dark");
  const [border, setBorder] = useState("black");
  // const [Comp, setComp] = useState(true);
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  // };
  const togglemode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#395b64";
      document.body.style.borderColor = "black";
      // showAlert = ("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.borderColor = "white";
      // showAlert = ("Light mode has been enabled", "success");
    }
  };
  // const handleComp = () => {
  //   if (Comp === true) {
  //     setComp(false);
  //     return <Textform heading="Enter The Text Here" mode={Mode} />;
  //   } else {
  //     setComp(true);
  //     return <About />;
  //   }
  // };
  return (
    <>
      <Navbar
        title="TextEditor"
        about="About"
        mode={Mode}
        togglemode={togglemode}
      />
      {/* <Alert alert={alert} /> */}
      <div className="container">
        <Routes>
          <Route
            path="/contact"
            element={<ContactUs mode={Mode} togglemode={togglemode} />}
          />
          <Route
            path="/"
            element={<Textform heading="Enter The Text Here" mode={Mode} />}
          />
        </Routes>
      </div>
    </>
  );
}
export default App;
