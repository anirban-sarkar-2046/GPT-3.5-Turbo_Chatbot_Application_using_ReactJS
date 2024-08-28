import { Link } from "react-router-dom";
import "./Post3.css";

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
          <Link to="/blog/singlepost3" className="link">
          From ChatGPT to Gemini: AI's Evolution
          </Link>
        </span>
        <span className="postDate">Umar Shakir | The Verge | August 24, 2024</span>
      </div>
      <p className="postDesc">
      The rapid pace of technological advancement continuously reshapes our world. Innovations that once seemed like science fiction are now everyday realities, influencing how we live, work, and interact. Staying informed about the latest trends helps us navigate this ever-evolving landscape.
      </p>
    </div>
  );
}