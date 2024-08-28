import React, { useRef } from "react";
import { Link, Navigate } from 'react-router-dom';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div>
            <div className="wrapper1">
                <div className="title1">
                    <h1>About Chatbot</h1>
                </div>
                <div className="about1">
                    <div className="image-section1">
                        <img className="image1" src="https://cdn.pixabay.com/photo/2023/02/04/17/28/chat-7767693_960_720.jpg" alt="About Chatbot" />
                    </div>
                    <article className="article1">
                        <h3>Unlocking Conversational Excellence: Introducing Our GPT-3.5 Turbo-Powered Chatbot</h3>
                        <p>
                        Welcome to our AI-powered chatbot, driven by the cutting-edge GPT-3.5 Turbo! Our chatbot is transforming the way you interact online, offering you an intuitive and engaging conversational experience. With its advanced natural language understanding and generation capabilities, it can comprehend your queries and respond with remarkable precision and fluidity.
                        </p>
                        <p>
                        Immerse yourself in the future of communication with our GPT-3.5 Turbo chatbot. Discover its advanced features, pose questions, and see how it can elevate your online interactions. Whether you need customer support, information, or simply a friendly conversation, our chatbot is always available to provide assistance and enhance your digital experience.
                        </p>
                        <div className="button1"> 
                            <Link className="button11" to='/about/faq'>Learn More</Link>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default About;
