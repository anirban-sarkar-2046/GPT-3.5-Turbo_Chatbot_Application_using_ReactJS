import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Subscription from "./components/Subscription/Subscription";
import Profile from "./components/Profile/Profile";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import CreditCard from "./components/CreditCard/CreditCard";
import FAQ from "./components/FAQ/FAQ";
import userIcon from './user-icon.jpg';
import gptImgLogo from './chatgptLogo.jpg';
import sendBtn from './send.svg';
import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png'
import { sendMsgToOpenAI } from './openai';
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from "react-router-dom";
import SinglePost1 from "./components/SinglePost/SinglePost1";
import SinglePost2 from "./components/SinglePost/SinglePost2";
import SinglePost3 from "./components/SinglePost/SinglePost3";
import SinglePost4 from "./components/SinglePost/SinglePost4";
import SinglePost5 from "./components/SinglePost/SinglePost5";
import SinglePost6 from "./components/SinglePost/SinglePost6";
import SinglePost7 from "./components/SinglePost/SinglePost7";
import SinglePost8 from "./components/SinglePost/SinglePost8";
import SinglePost9 from "./components/SinglePost/SinglePost9";
import ModalAlertApp from './ModalAlertApp';

function App() {  
  return (
    <>
    <Navbar />
    <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chathistory" element={<ChatHistory />} />
          <Route path="/subscription/creditcard" element={<CreditCard />} />
          <Route path="/about/faq" element={<FAQ />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog/singlepost1" element={<SinglePost1 />} />
          <Route path="/blog/singlepost2" element={<SinglePost2 />} />
          <Route path="/blog/singlepost3" element={<SinglePost3 />} />
          <Route path="/blog/singlepost4" element={<SinglePost4 />} />
          <Route path="/blog/singlepost5" element={<SinglePost5 />} />
          <Route path="/blog/singlepost6" element={<SinglePost6 />} />
          <Route path="/blog/singlepost7" element={<SinglePost7 />} />
          <Route path="/blog/singlepost8" element={<SinglePost8 />} />
          <Route path="/blog/singlepost9" element={<SinglePost9 />} />
      </Routes>
    </>
  );
}

function Home() {
  const msgEnd = useRef(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const messageIndex = query.get('message');

  const [input, setInput] = useState(() => sessionStorage.getItem('input') || "");
  const [messages, setMessages] = useState(() => {
    const savedMessages = sessionStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : [{ text: "Hello! How can I assist you today?", isBot: true }];
  });

  useEffect(() => {
    if (messageIndex !== null) {
      const targetMessage = document.getElementById(`message-${messageIndex}`);
      if (targetMessage) {
        targetMessage.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      msgEnd.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageIndex, messages]);

  const handleSend = async () => {
    const userMessage = input;
    setInput('');

    const updatedMessages = [
      ...messages,
      { text: userMessage, isBot: false }
    ];
    setMessages(updatedMessages);
    sessionStorage.setItem('messages', JSON.stringify(updatedMessages));
    sessionStorage.setItem('input', '');

    try {
      const botResponse = await sendMsgToOpenAI(userMessage);

      const newMessages = [
        ...updatedMessages,
        { text: botResponse, isBot: true }
      ];
      setMessages(newMessages);
      sessionStorage.setItem('messages', JSON.stringify(newMessages));
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
      const errorMessages = [
        ...updatedMessages,
        { text: "Sorry, something went wrong.", isBot: true }
      ];
      setMessages(errorMessages);
      sessionStorage.setItem('messages', JSON.stringify(errorMessages));
    }
  };

  const handleEnter = async (e) => {
    if (e.key === 'Enter') await handleSend();
  };

  useEffect(() => {
    sessionStorage.setItem('input', input);
  }, [input]);

  return (
    <div className="App">
      <div className="main">
        <div className="chats">
          {messages.map((message, i) => (
            <div key={i} id={`message-${i}`} className={message.isBot ? "chatMessages bot" : "chatMessages"}>
              <img className='chatimg' src={message.isBot ? gptImgLogo : userIcon} alt="" />
              <p className="txt"> {message.text} </p>
            </div>
          ))}
          <div ref={msgEnd} />
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder='Send a message'
              value={input}
              onKeyDown={handleEnter}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registeredUsername, setRegisteredUsername] = useState('');
  const [registeredPassword, setRegisteredPassword] = useState('');
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleShowAlert = (title, message) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setShowAlert(true);
  }

  const handleCloseAlert = () => setShowAlert(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      handleShowAlert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!isValidPassword(password)) {
      handleShowAlert("Invalid Password Format", "Password must be at least 6 characters long and contain at least one letter and one number.");
      return;
    }

    if (username.trim() === "") {
      handleShowAlert("Empty Username", "Username cannot be empty.");
      return;
    }

    if (username.trim().length < 6) {
      handleShowAlert("Short Username", "Username must be at least 6 characters long.");
      return;
    }

    setRegisteredUsername(username);
    setRegisteredPassword(password);
    setRegisteredEmail(email);
    setIsRegistered(true);

    handleShowAlert("Registration Successful", "Your account has been created.");

    setUsername('');
    setPassword('');
    setEmail('');
    setIsLoginPage(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === registeredUsername && password === registeredPassword) {
      onLogin();
    } else {
      handleShowAlert("Invalid credentials");
      return;
    }
  };

  const showRegisterPage = (e) => {
    e.preventDefault();
    setIsLoginPage(false);
    setUsername('');
    setPassword('');
    setEmail('');
  };

  const showLoginPage = (e) => {
    e.preventDefault();
    setIsLoginPage(true);
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className='containerapp'>
      {isLoginPage && (
        <form onSubmit={handleSubmit}>
          <div className="headerapp">
            <div className="textapp">Login</div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <i
                className={`fas fa-eye${showPassword ? '' : '-slash'}`}
                style={{
                  marginLeft: '8px',
                  cursor: 'pointer',
                  color: 'grey'
                }}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
          <button className="sub-button" type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href onClick={showRegisterPage}>Register</a></p>
          </div>
        </form>
      )}
      
      {!isLoginPage && !isLoggedIn && (
        <form onSubmit={handleRegister}>
          <div className="headerapp">
            <div className="textapp">Register</div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                type="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <i
                className={`fas fa-eye${showPassword ? '' : '-slash'}`}
                style={{
                  marginLeft: '8px',
                  cursor: 'pointer',
                  color: 'grey'
                }}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
          <button className="sub-button" type="submit">Register</button>
          <div className="register-link">
            <p>Already have an account? <a href onClick={showLoginPage}>Login</a></p>
          </div>
        </form>
      )}
      <ModalAlertApp 
          show={showAlert} 
          handleClose={handleCloseAlert} 
          title={alertTitle} 
          message={alertMessage} 
        />
    </div>
  );
}

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return isLoggedIn ? <App /> : <LoginPage onLogin={handleLogin} />;
}


export default Main;
