import React from "react";
import Post1 from "../Post/Post1";
import Post2 from "../Post/Post2";
import Post3 from "../Post/Post3";
import Post4 from "../Post/Post4";
import Post5 from "../Post/Post5";
import Post6 from "../Post/Post6";
import Post7 from "../Post/Post7";
import Post8 from "../Post/Post8";
import Post9 from "../Post/Post9";
import './Blog.css';


const Blog = () => {
    return (
        <div className="postscontainer">
        <div className="posts">
          <Post1 img="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202407/MIT-LLM-Expectations-01-press_0.jpg?itok=g7R5oIvA" />
          <Post2 img="https://static.euronews.com/articles/stories/08/54/52/78/1920x1080_cmsv2_d1e0287e-0052-54a1-87f8-5e54f7d10cea-8545278.jpg" />
          <Post3 img="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25461999/STK155_OPEN_AI_CVirginia_A.jpg"/>
          <Post4 img="https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2024/08/smallaimodels-ideogram.jpeg"/>
          <Post5 img="https://image.blockchain.news/features/D8E08E86F8EDBDDCD68414CF49BDD8B1401B11A69515DFF98E6B2B03EE9CF9D7.jpg"/>
          <Post6 img="https://gijn.org/wp-content/uploads/2024/05/shutterstock_2328020525.jpg"/>
          <Post7 img="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=747/https://s3.cointelegraph.com/uploads/2024-04/68f62de5-2146-4b81-baac-5155832daa25.jpg"/>
          <Post8 img="https://scx1.b-cdn.net/csz/news/800a/2022/chatbot-1.jpg"/>
          <Post9 img="https://ichef.bbci.co.uk/news/1024/cpsprodpb/0246/live/998bc770-13f3-11ef-b724-23df41d012a6.jpg.webp"/>
        </div>
        </div>
      );
};

export default Blog;