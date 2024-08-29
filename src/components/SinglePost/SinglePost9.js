import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./SinglePost9.css";

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
          src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/0246/live/998bc770-13f3-11ef-b724-23df41d012a6.jpg.webp"
          alt=""
        />
        <h1 className="singlePostTitle">
        Reddit-OpenAI deal: ChatGPT gets access to social media platform
        </h1>
        <h6 className="singlePostWriter">
            By João da Silva <br/> Published on: 17/05/2024, BBC
        </h6>
        <br/>
        <p className="singlePostDesc">
        Shares in Reddit have jumped more than 10% after the firm said it had struck a partnership deal with artificial intelligence (AI) start-up OpenAI.
        Under the agreement, the company behind the ChatGPT chatbot will get access to Reddit content, while it will also bring AI-powered features to the social media platform.
        The announcement highlights Reddit's efforts to broaden its income sources away from advertising.
        The deal also comes as a growing number of copyright owners mount legal challenges over the use of their material by AI firms.
        On Thursday Sony - which is the largest music publisher in the world - sent letters to Google, Microsoft and OpenAI demanding to know if they had used its songs to develop AI systems.
        The BBC has approached Google, Microsoft and OpenAI for comment.
        In recent months OpenAI has also agreed deals with several publishers, including the Associated Press and the Financial Times.
          <br />
          <br />
          Meanwhile, Google announced a partnership in February which allows the technology giant to access Reddit data to train its AI models.
        Both in the European Union and US, there are questions around whether it is copyright infringement to train AI tools on such content, or whether it falls under fair use and "temporary copying" exceptions.
        The issue is being tested in court in the US, in several legal cases separately representing people like Game of Thrones author George RR Martin, comedian Sarah Silverman, and the New York Times.
        This week, OpenAI unveiled the latest version of the technology which underpins ChatGPT.
        The firm said GPT-4o will be rolled out to all users of ChatGPT, including non-subscribers.
        It is faster than earlier models and has been programmed to sound conversational in its responses to prompts.
        The new version can read and discuss images, translate languages, and identify emotions from visual expressions. There is also memory so it can recall previous prompts.
        </p>
      </div>
    </div>
  );
}