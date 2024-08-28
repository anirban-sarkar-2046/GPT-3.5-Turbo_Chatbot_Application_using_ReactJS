import { Link } from "react-router-dom";
import "./Post5.css";

export default function Post5({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to="/blog/singlepost6" className="link">
          Large Language Model Tools for Journalists
          </Link>
        </span>
        <span className="postDate">Rowan Philip | GIJN | May 7, 2024</span>
      </div>
      <p className="postDesc">
      Generative AI tools offer both opportunities and challenges for journalists, with potential biases and ethical issues in their outputs. Experts suggest using AI tools wisely at the start of investigative projects to enhance efficiency, while remaining cautious of limitations and potential impact on human labor.
      </p>
    </div>
  );
}