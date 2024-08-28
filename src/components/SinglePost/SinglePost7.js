import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./SinglePost7.css";

export default function SinglePost2() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
  
    return (
    <div className="singlePost">
      <div className="backicon">
        <Link to='/blog'><IoMdArrowRoundBack  className="customIconStyle" /></Link>
      </div>
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=747/https://s3.cointelegraph.com/uploads/2024-04/68f62de5-2146-4b81-baac-5155832daa25.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
        Nigeria launches first multilingual large language model in Africa
        </h1>
        <h6 className="singlePostWriter">
            By Amaka Nwaokocha <br/> Published on: 20/04/2024, CoinTelegraph
        </h6>
        <br/>
        <p className="singlePostDesc">
        Through the Ministry of Communications, Innovation, and Digital Economy, the Nigerian government has launched Nigeria’s first multilingual large language model (LLM) as the country pushes forward to take a leadership position in artificial intelligence (AI) development in Africa. 
        Nigeria’s Communications Minister, Dr. Bosun Tijani, announced on Friday, April 19, that the LLM launch stemmed from a four-day AI workshop held earlier that week in the country’s capital, Abuja.
        According to Tijani, the launch of the AI tool was facilitated by a collaboration involving Nigerian AI firm Awarritech, global tech company DataDotOrg, the National Information Technology Development Agency (NITDA), and the National Centre for AI and Robotics (NCAIR). The Minister stated,
        “The LLM will be trained in five low-resource languages and accented English to ensure stronger language representation in existing data sets for the development of artificial intelligence solutions. The project will also be supported by over 7,000 fellows from the 3MTT Nigeria program,”
        Tijani added that following four days of collaborative work involving over 120 artificial intelligence experts, Nigeria produced an initial draft of its National AI Strategy and unveiled notable advancements and collaborations aimed at propelling the country’s AI development forward.
          <br />
          <br />
          He mentioned that among the announcements was a collaboration between 21st Century Technologies, Galaxy Backbone, and NCAIR Nigeria to expedite the progress of artificial intelligence projects crucial to the nation.
        21st Century Technology will be funding the purchase of GPUs to enhance national computing capacity. These resources will aid local researchers, startups, and government entities in AI projects housed at the GBB Data Centre in the FCT.
        During the workshop, the Minister announced the relaunch of NCAIR, a dedicated entity created to promote research and development in AI, robotics, UAV, and Internet of Things (IoT) and their practical applications in Nigeria’s key sectors. He stated that the enhanced capacity at NCAIR would enable it to more effectively carry out its role as a digital innovation and research center.
        Tijani revealed that the National AI Strategy has received $3.5 million in seed funding from interested partners. Foreign and local partners support the funding, including UNDP, UNESCO, Meta, Google, Microsoft, Luminate, Lagos Business School, Data Science Nigeria, NITDA, and other agencies under the Federal Ministry of Communications, Innovation, and Digital Economy.
        It includes $1.5 million in direct funding and an additional $2 million invested by 21st Century Technologies into the pilot program.
        </p>
      </div>
    </div>
  );
}