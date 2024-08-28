import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./SinglePost4.css";

export default function SinglePost4() {
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
          src="https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2024/08/smallaimodels-ideogram.jpeg"
          alt=""
        />
        <h1 className="singlePostTitle">
        Beyond OpenAI: The rise of language models
        </h1>
        <h6 className="singlePostWriter">
            By Robert Hof <br/> Published on: 23/08/2024, Silicon Angle
        </h6>
        <br/>
        <p className="singlePostDesc">
        A flurry of new artificial intelligence models this week illustrated what’s coming next in AI: smaller language models targeted at vertical industries and functions.
        Both Nvidia and Microsoft debuted smaller large language models too. Also supporting the notion of more customized models — call them VLMs — OpenAI made its GPT-4o fine-tuning generally available. As much as LLMs have captured much of the attention, these smaller, more controlled models look appealing to enterprises concerned about data governance and privacy, not to mention efficiency.
        Indeed, Chinese startups are heading in the same direction, partly to save energy and partly to avoid the need for the most advanced Nvidia graphics processing units to which they don’t have access under export controls. That said, it looks like many Chinese companies are getting access to that high-end computing power through cloud providers such as Amazon Web Services.
          <br />
          <br />
          Advanced Micro Devices CEO Lisa Su doubled down this week on her quest to slice off a chunk of Nvidia’s lucrative GPU market, as it acquired AI infrastructure provider ZT Systems.
        Infrastructure observability firms are having a moment. Not too long after Cisco Systems closed its acquisition of Splunk, others continue to reap the rewards, including Datadog turning in an upside quarter earlier this month. This past week, Grafana Labs raised a boatload at a $6 billion valuation.
        Snowflake shares dropped almost 15% Thursday after a disappointing revenue outlook as well as concerns about profitability. But everyone else had pretty positive earnings reports, including Palo Alto Networks, Workday, Synopsys, Zoom and Zuora.
        <br />
        <br />
        Autonomy founder Mike Lynch sadly died at sea off Sicily with several others, celebrating just a couple months after winning his long-running HP court case. Oddly, co-defendant Stephen Chamberlain was hit by a car and died earlier this week.
        Next week SiliconANGLE, theCUBE and theCUBE Research analysts will be at VMware Explore Monday through Wednesday to suss out what’s happening with the virtualization and cloud pioneer under new owner Broadcom. Also next week: earnings reports from more bellwethers such as Nvidia, Salesforce, CrowdStrike, Dell, NetApp, Pure Storage, HP, MongoDB, HashiCorp and more.
        SiliconANGLE and theCUBE Research analysts John Furrier and Dave Vellante discuss this and other news in more detail on this week’s theCUBE Pod, out now on YouTube. And don’t miss Vellante’s weekly deep dive, Breaking Analysis, this weekend.
        </p>
      </div>
    </div>
  );
}