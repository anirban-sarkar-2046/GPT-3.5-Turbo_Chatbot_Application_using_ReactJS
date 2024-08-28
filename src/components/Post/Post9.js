import { Link } from "react-router-dom";
import "./Post8.css";

export default function Post3({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to="/blog/singlepost9" className="link">
          Reddit-OpenAI deal: ChatGPT gets access to social media platform
          </Link>
        </span>
        <span className="postDate">João da Silva | BBC | May 17, 2024</span>
      </div>
      <p className="postDesc">
      Reddit shares surged over 10% following the announcement of a partnership with AI start-up OpenAI, allowing access to Reddit content and the integration of AI-powered features on the platform. This partnership comes amid increasing legal scrutiny over AI's use of copyrighted materials, with OpenAI and other tech giants facing inquiries and lawsuits over their content training practices.
      </p>
    </div>
  );
}