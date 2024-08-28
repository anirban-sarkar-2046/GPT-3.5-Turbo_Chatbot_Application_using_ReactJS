import React from "react";
import './FAQ.css';
import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
import { IoMdArrowRoundBack } from "react-icons/io";

const FAQ = () => {
    return (
        <div className="wrapper2">
                <div className="backicon">
                    <Link to='/about'>
                    <IoMdArrowRoundBack className="customIconStyle" />
                    </Link>
                </div>
                <h3>Frequently Asked Questions</h3>
                <hr/>
                <div className="body2">
                    <Accordion className="accordion2">
                        <Accordion.Item eventKey="0" className="item2">
                            <Accordion.Header>What is GPT-3.5 Turbo?</Accordion.Header>
                            <Accordion.Body>
                            GPT-3.5 Turbo is a state-of-the-art language model developed by OpenAI. It excels in understanding and generating human-like text based on the input it receives. This model enhances chatbot applications with its advanced conversational abilities, providing responses that are contextually relevant and coherent.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="item2">
                            <Accordion.Header>What technologies are used to build the Chatbot?</Accordion.Header>
                            <Accordion.Body>
                            Our chatbot is built using React.js, a widely-used JavaScript library for creating user interfaces. For generating responses, it leverages the GPT-3.5 Turbo model, which delivers high-quality, natural language interactions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="item2">
                            <Accordion.Header>How does the Chatbot with GPT-3.5 Turbo work?</Accordion.Header>
                            <Accordion.Body>
                            The chatbot integrates GPT-3.5 Turbo into a web-based chat interface developed with React.js. Users input their messages or queries, which are then processed by GPT-3.5 Turbo to generate accurate and contextually appropriate responses.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="item2">
                            <Accordion.Header>Is the Chatbot secure to use on Windows devices?</Accordion.Header>
                            <Accordion.Body>
                            The security of our chatbot on Windows devices depends on several factors, including the implementation, deployment, and configuration practices. We adhere to best practices in web application security to ensure that sensitive data is managed safely and securely.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="item2">
                            <Accordion.Header>What are the system requirements for running the Chatbot?</Accordion.Header>
                            <Accordion.Body>
                            The chatbot runs on standard web technologies, so the main requirements are a modern web browser and internet connectivity. Server-side requirements depend on the specific implementation and hosting environment.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className="item2">
                            <Accordion.Header>What kind of training data is used to develop the Chatbot?</Accordion.Header>
                            <Accordion.Body>
                            The chatbot is trained on diverse datasets that include various types of conversational interactions. The training data is selected to provide a broad understanding of language and context to enhance the chatbot's response capabilities.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
    );
};

export default FAQ;
