import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./SinglePost3.css";

export default function SinglePost3() {
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
          src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25461999/STK155_OPEN_AI_CVirginia_A.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
        From ChatGPT to Gemini: AI's Evolution
        </h1>
        <h6 className="singlePostWriter">
            By Umar Shakir <br/> Published on: 24/08/2024, The Verge
        </h6>
        <br/>
        <p className="singlePostDesc">
            Big players, including Microsoft, with Copilot, Google, with Gemini, and OpenAI, with GPT-4o, are making AI chatbot technology previously restricted to test labs more accessible to the general public.
          <br />
          <br />
          How do these large language model (LLM) programs work? OpenAI’s GPT-3 told us that AI uses “a series of autocomplete-like programs to learn language” and that these programs analyze “the statistical properties of the language” to “make educated guesses based on the words you’ve typed previously.” 
          <br />
          <br />
          Or, in the words of James Vincent, a human person: “These AI tools are vast autocomplete systems, trained to predict which word follows the next in any given sentence. As such, they have no hard-coded database of ‘facts’ to draw on — just the ability to write plausible-sounding statements. This means they have a tendency to present false information as truth since whether a given sentence sounds plausible does not guarantee its factuality.”
          <br />
          <br />
          But there are so many more pieces to the AI landscape that are coming into play (and so many name changes — remember when we were talking about Bing and Bard before those tools were rebranded?), but you can be sure to see it all unfold.
        </p>
        
      </div>
    </div>
  );
}