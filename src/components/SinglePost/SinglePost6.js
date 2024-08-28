import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./SinglePost6.css";

export default function SinglePost6() {
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
          src="https://gijn.org/wp-content/uploads/2024/05/shutterstock_2328020525.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
        Large Language Model Tools for Journalists
        </h1>
        <h6 className="singlePostWriter">
            By Rowan Philip <br/> Published on: 07/05/2024, GIJN
        </h6>
        <br/>
        <p className="singlePostDesc">
        In several sessions on AI tools at the 2024 NICAR data journalism conference, data experts grappled with the broader question: “Why should journalists use AI?”
        During the week of the summit, Bloomberg published an investigation by two NICAR attendees that illustrates some of the problems with LLMs, showing that ChatGPT assigned lower rankings to identical work resumes featuring applicant names typically associated with minority groups.
        Jon Keegan, an investigative data reporter at The Markup, said reporters and editors need to be systematic in their approach to AI to benefit from its efficiencies and avoid its many accuracy, bias, and ethics pitfalls, including several basic steps.
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. First, learn how LLMs learn and operate. Start by reading this piece by the Financial Times, which, Keegan said, “is the absolute best visual explainer of how LLMs work.”
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;2. Adopt and communicate a newsroom AI use policy. GIJN has joined with other leading news organizations in the Paris Charter on AI and Journalism to create a set of best practices for investigative newsrooms. For editors who have not yet defined their own guardrails, Keegan suggested they read the Guardian’s policy, which states that it will use it “only where it contributes to the creation and distribution of original journalism” — or the frank and detailed policy offered by Wired magazine.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;3. Cut through the confusion about the many new AI tools released each week by checking regularly with technical expert sources. He recommended following the Simon Willison Weblog — that offers explainers, how-tos, and warnings — “and find a human source to keep up with some of the new developments because they’re happening so fast.” Reporters can also follow the What’s New blog at Journalist’s Toolbox AI, which lists recent releases of journalism-relevant AI tools and resources.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;4. Be mindful that generative AI tools can take work away from real people you might have otherwise hired. “If you’re in a position to outsource art to an illustrator, and you decide to just jump into Midjourney to create some art, you are costing someone work,” Keegan warned. “And remember that these programs have exploited many creative works without compensation.”
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;5. Use AI tools at the front end of investigations, rather than at the publication stage — and verify everything they produce.
            <br />
            <br />
            “These tools are not a stand-in for journalism, but they really can make your projects faster or more ambitious,” Keegan explained. “But there are some shocking ethical failures in some of these models. These are very weird tools — one moment they’re amazing; the next, they come up with something shockingly stupid, or just make things up.”
            In a separate session on AI-Driven Tools, Tips, and Tricks to Empower Your Data Journalism, four experts discussed the pros and cons of this technology for journalists and shared a short list of tools that they felt comfortable recommending.
            Speakers included Darla Cameron, managing editor for visual journalism at The Texas Tribune; Jeff Hargarten, a data journalist at the Minneapolis Star Tribune; June Kim, a journalism fellow at MIT Technology Review, and data journalism lecturer Mike Reilley, founder of Journalist’s Toolbox.AI
            <br />
            <br />
            There was consensus among NICAR speakers about what AI use cases journalists should generally avoid:
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;1. Image generation or published illustrations.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;2. Tool uploads with sensitive and personally identifying source information.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;3. Any wording used in published content.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;4. Materials that exploit copyrighted work.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;5. Tasks that existing journalism tools already do well — such as using AI chart-making tools if you already have Flourish or Datawrapper.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;6. Any AI use without public disclosure.
            <br />
            <br />
            Reilley said one way to reduce the risk of biased results was to demand diversity and authoritative sources in prompts to AI chatbots. “Ask an image generator to generate images of prison inmates, and it tends to give you people of color; ask an LLM to write a love story, and it will write a heterosexual love story,” he warned. “We have to be specific and demand diversity and accuracy in our prompts. Over-explain everything.”
            <br />
            <br />
            However, speakers also listed numerous examples of how LLM chatbots and niche AI tools had helped their investigations — especially with code and the retrieval of scattered data sources.
            “In 10 years of data journalism, I would say easily 60% of my time has been spent troubleshooting and trying to figure out coding solutions and data analysis solutions that some of these tools can do for you in seconds,” said Hargarten. “I can focus more on journalism craft and less on tech.”
            <br />
            <br />
            Here are some of the AI tools the panelists recommended.
            <br />
            <br />
            <br />
            <br />
            Rolli Information Tracer and Rolliapp:
            <br />
            <br />
            Created for journalists, by journalists, Rolli tools use AI technology to solve key reporting challenges while keeping project data secure.
            The new Rolli Information Tracer — built in collaboration with the International Center for Journalists’ LEAP Innovation Lab — uses algorithms to track disinformation campaigns on social media. The site describes its approach to detecting coordination this way: “We develop an ensemble of technical signals to identify inauthentic behaviors behind online campaigns. We work with research institutions and humanitarian agencies to monitor misinformation narratives across the globe.”
            “I’m really excited about Rolli,” said Reilley. “Information Tracer tracks all kinds of disinformation spreaders, which is really important right now in a big election year. It’s also adding some tech which will break the analysis right down to the account level, where you’ll be able to see if it’s a bot and which country it originates from. Very cool.”
            He added: “Sign up for the ‘press pass’ free plan for a year. If it asks you for a code, enter ‘JOURNOAI.’”
            Reilley said an allied tool, Rolliapp, provides a useful expert-search database and helps connect reporters to expert sources on deadline.
            <br />
            <br />
            <br />
            <br />
            GPT Excel:
            <br />
            <br />
            “This tool is there to help you write Excel formulas,” Hargarten explained. “It spits out some of the most complex formulas that I’ve ever used, that would take me hours to write if I tried to do it myself. I like it because it’s simple, and doesn’t require as much prompting. It’s got settings for Airtable and Google Sheets as well.” He added: “It bypasses a lot of the extremely irritating troubleshooting that would otherwise slow down an in-depth enterprise investigation.”
            <br />
            <br />
            <br />
            <br />
            ChatGPT or Claude — or whichever LLM proves better for the input task:
            <br />
            <br />
            “Whenever I use LLMs with my data students, I’ll have them use three and pit them against each other to see which one is the best for that task,” Reilley explained.
            “There is an art form to prompting ChatGPT, and it’s definitely a big broad tool – some things it’s good at, others not,” said Hargarten. “But ultimately it can do some version of almost anything, as long as it’s language-based. I use it to generate perfect public document requests in the right format, citing the correct legislation and everything. Sometimes it will even sign my name and enter my contacts. That’s also terrifying, of course.”
            <br />
            <br />
            <br />
            <br />
            Perplexity:
            <br />
            <br />
            This new chat interface impressed several experienced investigative journalists at NICAR 2024 as an excellent briefing tool for complicated or unfamiliar subjects. While not a direct source of verified data, it provides concise and mostly reliable responses to complex investigative questions, as well as curated lists of authoritative sources and useful suggested follow-up questions. In contrast to some other AI tools, it tends to take you where you want to go, rather than where it wants to take you, according to its early users.
            “Perplexity gives you the ability to understand complex questions, with citations and relevant onward questions,” said Jeremy Caplan, director of teaching and learning at  CUNY’s Craig Newmark Graduate School of Journalism. “It’s beautifully rendered — it gives very specific examples, and it’s a very useful tool for quickly getting up to speed.”
            Caplan added: “What I really like is that it offers a series of questions to follow up on. You gradually gain a richer and richer understanding of a subject, while retaining the ability to verify at any stage.”
            <br />
            <br />
            <br />
            <br />
            Llamafile — a ‘Local AI’ for Your Laptop:
            <br />
            <br />
            One major concern about commercial LLM chatbots is uncertainty about the security of source data with these cloud-based services, and another is the lack of personal control.
            A true technological marvel, the Mozilla Innovation Project has developed an open source solution that allows an LLM — remarkably — to be stored entirely offline, on a single computer or USB stick, under your direct control.
            In his blog review, tools expert Simon Willison said Llamafile was essentially like “your own local copy of ChatGPT.
            “This is a single binary file which you can download and then use, forever, on (almost) any computer,” he wrote. “You don’t need a network connection. Stick that file on a USB stick and stash it in a drawer as insurance against a future apocalypse. You’ll never be without a language model ever again.”
            Said Keegan: “This tool is built on other people’s work, but it allows you to have a single executable file on your computer that is a self-contained LLM with a chat interface. It does not require any internet connectivity at all.”
            Keegan confessed that he initially found it hard to believe that a 4-gigabyte thumb drive could hold LLM-scale computing power, but said it is enabled by complex processes such as “vectorization,” and that it works well.  “You can use this to feel safer about information out there.”
            <br />
            <br />
            <br />
            <br />
            The Commons Project (US-only) — an Example of Journalist-Made AI Tools:
            <br />
            <br />
            While limited to the US, the new Commons Project tool shows how data journalists in most countries can use AI chat interfaces to build their own data tools to parse large government websites. In this case, journalists built an AI tool to dig into the vast US archive of what citizens have stated about government regulations. It was built in a collaboration between the Columbia University Graduate School of Journalism and Stanford’s School of Engineering.
            “It’s a tool powered by GPT that helps journalists parse through public comments about federal regulations posted on regulations.gov,” explained Kim. “If you’re a beat reporter, you want to know what people are saying about new regulations. The data is there, but it’s difficult to sift through 200,000 comments. This tool helps you answer questions like: ‘Which organizations are commenting the most on the EPA’s new emissions regulation?’”
            Kim — who maintains the tool — said she had no previous personal experience as a tools developer. She said the process of building the system revealed both the power and surprising limits of LLM helpers — as well as the need to communicate directly with human developers of commercial AI tools.
            Adds Cameron: “Ultimately, for these things to be reliable for journalists — and to feel comfortable that the material is not copyrighted — we as journalists will likely need to create our own AI spaces.”
        </p>
      </div>
    </div>
  );
}