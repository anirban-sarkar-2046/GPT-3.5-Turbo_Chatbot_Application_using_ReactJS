import { Link } from "react-router-dom";
import "./Post4.css";

export default function Post4({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to="/blog/singlepost4" className="link">
          Beyond OpenAI: The rise of language models
          </Link>
        </span>
        <span className="postDate">Robert Hof | Silicon Angle | August 23, 2024</span>
      </div>
      <p className="postDesc">
      New AI models focus on industry-specific applications, with Nvidia, Microsoft, and OpenAI leading the way. Infrastructure firms saw significant activity, while Snowflake struggled with revenue issues and notable tech figures faced tragic events.
      </p>
    </div>
  );
}