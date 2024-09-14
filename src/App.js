import './App.css';
import LoginPage from './LoginPage';
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
import { sendMsgToOpenAI } from './openai';
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  Link
} from "react-router-dom";
import { auth } from './firebase';
import SinglePost1 from "./components/SinglePost/SinglePost1";
import SinglePost2 from "./components/SinglePost/SinglePost2";
import SinglePost3 from "./components/SinglePost/SinglePost3";
import SinglePost4 from "./components/SinglePost/SinglePost4";
import SinglePost5 from "./components/SinglePost/SinglePost5";
import SinglePost6 from "./components/SinglePost/SinglePost6";
import SinglePost7 from "./components/SinglePost/SinglePost7";
import SinglePost8 from "./components/SinglePost/SinglePost8";
import SinglePost9 from "./components/SinglePost/SinglePost9";

function App() {  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const PrivateRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/GPT-3.5-Turbo_Chatbot_Application_using_ReactJS" />;
  };

  const showNavbar = isLoggedIn && location.pathname !== '/GPT-3.5-Turbo_Chatbot_Application_using_ReactJS';
  
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/GPT-3.5-Turbo_Chatbot_Application_using_ReactJS" element={<LoginPage />} />
        <Route path="/about" element={<PrivateRoute element={<About />} />} />
        <Route path="/blog" element={<PrivateRoute element={<Blog />} />} />
        <Route path="/subscription" element={<PrivateRoute element={<Subscription />} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="/chathistory" element={<PrivateRoute element={<ChatHistory />} />} />
        <Route path="/subscription/creditcard" element={<PrivateRoute element={<CreditCard />} />} />
        <Route path="/about/faq" element={<PrivateRoute element={<FAQ />} />} />
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/blog/singlepost1" element={<PrivateRoute element={<SinglePost1 />} />} />
        <Route path="/blog/singlepost2" element={<PrivateRoute element={<SinglePost2 />} />} />
        <Route path="/blog/singlepost3" element={<PrivateRoute element={<SinglePost3 />} />} />
        <Route path="/blog/singlepost4" element={<PrivateRoute element={<SinglePost4 />} />} />
        <Route path="/blog/singlepost5" element={<PrivateRoute element={<SinglePost5 />} />} />
        <Route path="/blog/singlepost6" element={<PrivateRoute element={<SinglePost6 />} />} />
        <Route path="/blog/singlepost7" element={<PrivateRoute element={<SinglePost7 />} />} />
        <Route path="/blog/singlepost8" element={<PrivateRoute element={<SinglePost8 />} />} />
        <Route path="/blog/singlepost9" element={<PrivateRoute element={<SinglePost9 />} />} />
        <Route path="*" element={<Navigate to="/GPT-3.5-Turbo_Chatbot_Application_using_ReactJS" />} />
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

export default App;