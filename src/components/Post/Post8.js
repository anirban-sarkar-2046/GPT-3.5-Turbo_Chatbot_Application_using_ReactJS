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
          <Link to="/blog/singlepost8" className="link">
          ChatGPT shows promise in answering patients' questions to urologists
          </Link>
        </span>
        <span className="postDate"> Wolters Kluwer | Medical Express | August 22, 2024</span>
      </div>
      <p className="postDesc">
      A study published in *Urology Practice* suggests that the ChatGPT chatbot could be a valuable tool for responding to patient questions in a urologist's office, with nearly half of its AI-generated responses deemed acceptable by experienced urologists. While the technology shows promise for improving clinical efficiency, further research is needed to address concerns about accuracy, completeness, and patient privacy.
      </p>
    </div>
  );
}