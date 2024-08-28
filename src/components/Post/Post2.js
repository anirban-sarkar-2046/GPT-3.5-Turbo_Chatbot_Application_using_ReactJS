import { Link } from "react-router-dom";
import "./Post2.css";

export default function Post2({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to="/blog/singlepost2" className="link">
          AI-generated exam papers can go undetected
          </Link>
        </span>
        <span className="postDate">Oceane Duboust | EuroNews | July 2, 2024</span>
      </div>
      <p className="postDesc">
      A University of Reading study found that 94% of AI-generated exam papers went undetected and often received higher grades than student-written ones. The results highlight challenges in enforcing AI bans and suggest integrating AI into education as a solution.
      </p>
    </div>
  );
}