import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./SinglePost8.css";

export default function SinglePost2() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
  
    return (
    <div className="singlePost">
      <div className="backicon">
        <Link to='/blog'><IoMdArrowRoundBack  className="customIconStyle" /></Link>
      </div>
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://scx1.b-cdn.net/csz/news/800a/2022/chatbot-1.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
        ChatGPT shows promise in answering patients' questions to urologists
        </h1>
        <h6 className="singlePostWriter">
            By Wolters Kluwer <br/> Published on: 22/08/2024, Medical Express
        </h6>
        <br/>
        <p className="singlePostDesc">
        The ChatGPT chatbot shows potential as a time-saving tool for responding to patient questions sent to the urologist's office, suggests a study in the Urology Practice journal.
        The artificial intelligence (AI) tool generated "acceptable" responses to nearly one-half of a sample of real-life patient questions, according to the new research by Michael Scott, MD, a urologist at Stanford University School of Medicine.
        "Generative AI technologies may play a valuable role in providing prompt, accurate responses to routine patient questions—potentially alleviating patients' concerns while freeing up clinic time and resources to address other complex tasks," Dr. Scott comments.
          <br />
          <br />
          <br />
          <br />
          <span style={{ fontWeight: 'bold' }}>Can ChatGPT accurately answer questions from urology patients?</span>
          <br />
          <br />
          ChatGPT is an innovative large language model (LLM) that has sparked interest across a wide range of settings, including health and medicine. In some recent studies, ChatGPT has performed well in responding to various types of medical questions, although its performance in urology is less well-established.
        Modern electronic health record (EHR) systems enable patients to send medical questions directly to their doctors. "This shift has been associated with an increased time burden of EHR use for physicians with a large portion of this attributed to patient in-basket messages," the researchers write. One study estimates that each message in a physician's inbox adds more than two minutes spent on the EHR.
        Dr. Scott and colleagues collected 100 electronic patient messages requesting medical advice from a urologist at a men's health clinic. The messages were categorized by type of content and difficulty, then entered into ChatGPT. Five experienced urologists graded each AI-generated response in terms of accuracy, completeness, helpfulness, and intelligibility. Raters also indicated whether they would send each response to a patient.
            <br />
          <br />
          <br />
          <br />
          <span style={{ fontWeight: 'bold' }}>Findings support 'generative AI technology to improve clinical efficiency'</span>
          <br />
          <br />
          The ChatGPT-generated responses were judged to be accurate, with an average score of 4.0 on a five-point scale; and intelligible, average score 4.7. Ratings of completeness and helpfulness were lower, but with little or no potential for harm. Scores were comparable for different types of question content (symptoms, postoperative concerns, etc.).
        "Overall, 47% of responses were deemed acceptable to send to patients," the researchers write. Questions rated as "easy" had a higher rate of acceptable responses: 56%, compared to 34% for "difficult" questions.
        "These results show promise for the utilization of generative AI technology to help improve clinical efficiency," Dr. Scott and co-authors write. The findings "suggest the feasibility of integrating this new technology into clinical care to improve efficiency while maintaining quality of patient communication."
        The researchers note some potential drawbacks of ChatGPT-generated responses to patient questions, "ChatGPT's model is trained on information from the Internet in general, as opposed to validated medical sources," with a "risk of generating inaccurate or misleading responses." The authors also highlight the need for safeguards to ensure patient privacy.
          <br />
          <br />
          "While our study provides an interesting starting point, more research will be needed to validate the use of LLMs to respond to patient questions, in urology as well as other specialties," Dr. Scott comments. "This will be a potentially valuable health care application, particularly with continued advances in AI technology."
        </p>
      </div>
    </div>
  );
}