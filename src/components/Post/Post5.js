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
          <Link to="/blog/singlepost5" className="link">
          NVIDIA Unveils Mistral-NeMo-Minitron 8B
          </Link>
        </span>
        <span className="postDate">Terrill Dicki | Blockchain News | August 22, 2024</span>
      </div>
      <p className="postDesc">
      NVIDIA has launched the Mistral-NeMo-Minitron 8B, a compact language model offering high accuracy with fewer parameters. This model supports efficient real-time AI applications on workstations and edge devices while also enabling easier deployment and cost savings for developers.
      </p>
    </div>
  );
}