import { Link } from "react-router-dom";
import "./Post7.css";

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
          <Link to="/blog/singlepost7" className="link">
          Nigeria launches first multilingual large language model in Africa
          </Link>
        </span>
        <span className="postDate">Amaka Nwaokocha | CoinTelegraph | April 20, 2024</span>
      </div>
      <p className="postDesc">
      Nigeria has launched its first multilingual large language model (LLM), aiming to lead AI development in Africa, supported by a collaboration involving local and global tech companies, government agencies, and over 7,000 fellows from the 3MTT Nigeria program. The initiative, part of a broader National AI Strategy, has received $3.5 million in seed funding to enhance national AI development.
      </p>
    </div>
  );
}