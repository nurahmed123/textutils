import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const bp = { name: "TextUtils", link: "www.facebook.com/06nurahmed" }
function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    // setTimeout(() => {
    //   setAlert(null)
    // }, 1500);
  }

  const removeClass = ()=>{
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  }

  const toggleMode = (cls) => {
    removeClass();
    if (cls === "dark") {
      if (Mode === "light") {
        setMode("dark")
        showAlert("Dark mode has been enabled", "success");
        document.body.style.backgroundColor = "#1a1c1e";
      }
      else {
        setMode("light")
        showAlert("Light mode has been enabled", "success");
        document.body.style.backgroundColor = "#ffffff";
      }
    } else {
      document.body.classList.add("bg-"+cls);
    }
  }
  return (
    <>
      <Router>
        <NavBar title={bp} mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze bellow" mode={Mode} />} />
            <Route exact path="/about" element={<About mode={Mode}/>} />
            {/* <Route>
              <NoMatch/>
            </Route> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
