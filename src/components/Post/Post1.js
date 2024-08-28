import { Link } from "react-router-dom";
import "./Post1.css";

export default function Post1({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to="/blog/singlepost1" className="link">
          Large language models don’t behave like people
          </Link>
        </span>
        <span className="postDate">Adam Zewe | MIT News | July 23, 2024</span>
      </div>
      <p className="postDesc">
      A new study shows someone’s beliefs about an LLM play a significant role in the model’s performance and are important for how it is deployed. When an LLM is misaligned with a person’s beliefs, even an extremely capable model may fail unexpectedly when deployed in a real-world situation.
      </p>
    </div>
  );
}