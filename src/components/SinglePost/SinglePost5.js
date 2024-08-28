import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./SinglePost5.css";

export default function SinglePost5() {
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
          src="https://image.blockchain.news/features/D8E08E86F8EDBDDCD68414CF49BDD8B1401B11A69515DFF98E6B2B03EE9CF9D7.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
        NVIDIA Unveils Mistral-NeMo-Minitron 8B
        </h1>
        <h6 className="singlePostWriter">
            By Terrill Dicki <br/> Published on: 22/08/2024, Blockchain News
        </h6>
        <br/>
        <p className="singlePostDesc">
        Developers of generative AI typically face a tradeoff between model size and accuracy. However, a new language model released by NVIDIA delivers the best of both worlds, providing state-of-the-art accuracy in a compact form factor.
        Mistral-NeMo-Minitron 8B — a miniaturized version of the open Mistral NeMo 12B model released by Mistral AI and NVIDIA last month — is small enough to run on an NVIDIA RTX-powered workstation while still excelling across multiple benchmarks for AI-powered chatbots, virtual assistants, content generators, and educational tools. Minitron models are distilled by NVIDIA using NVIDIA NeMo, an end-to-end platform for developing custom generative AI.
        “We combined two different AI optimization methods — pruning to shrink Mistral NeMo’s 12 billion parameters into 8 billion, and distillation to improve accuracy,” said Bryan Catanzaro, vice president of applied deep learning research at NVIDIA. “By doing so, Mistral-NeMo-Minitron 8B delivers comparable accuracy to the original model at lower computational cost.”
        Unlike their larger counterparts, small language models can run in real-time on workstations and laptops. This makes it easier for organizations with limited resources to deploy generative AI capabilities across their infrastructure while optimizing for cost, operational efficiency, and energy use. Running language models locally on edge devices also delivers security benefits, since data doesn’t need to be passed to a server from an edge device.
        Developers can get started with Mistral-NeMo-Minitron 8B packaged as an NVIDIA NIM microservice with a standard application programming interface (API) — or they can download the model from Hugging Face. A downloadable NVIDIA NIM, which can be deployed on any GPU-accelerated system in minutes, will be available soon.
          <br />
          <br />
          For a model of its size, Mistral-NeMo-Minitron 8B leads on nine popular benchmarks for language models. These benchmarks cover a variety of tasks including language understanding, common sense reasoning, mathematical reasoning, summarization, coding, and the ability to generate truthful answers.
        Packaged as an NVIDIA NIM microservice, the model is optimized for low latency, which means faster responses for users, and high throughput, which corresponds to higher computational efficiency in production.
        In some cases, developers may want an even smaller version of the model to run on a smartphone or an embedded device like a robot. To do so, they can download the 8-billion-parameter model and, using NVIDIA AI Foundry, prune and distill it into a smaller, optimized neural network customized for enterprise-specific applications.
        The AI Foundry platform and service offers developers a full-stack solution for creating a customized foundation model packaged as a NIM microservice. It includes popular foundation models, the NVIDIA NeMo platform, and dedicated capacity on NVIDIA DGX Cloud. Developers using NVIDIA AI Foundry can also access NVIDIA AI Enterprise, a software platform that provides security, stability, and support for production deployments.
        Since the original Mistral-NeMo-Minitron 8B model starts with a baseline of state-of-the-art accuracy, versions downsized using AI Foundry would still offer users high accuracy with a fraction of the training data and compute infrastructure.
        <br />
          <br />
          To achieve high accuracy with a smaller model, the team used a process that combines pruning and distillation. Pruning downsizes a neural network by removing model weights that contribute the least to accuracy. During distillation, the team retrained this pruned model on a small dataset to significantly boost accuracy, which had decreased through the pruning process.
        The end result is a smaller, more efficient model with the predictive accuracy of its larger counterpart.
        This technique means that a fraction of the original dataset is required to train each additional model within a family of related models, saving up to 40x the compute cost when pruning and distilling a larger model compared to training a smaller model from scratch.
        NVIDIA also announced this week Nemotron-Mini-4B-Instruct, another small language model optimized for low memory usage and faster response times on NVIDIA GeForce RTX AI PCs and laptops. The model is available as an NVIDIA NIM microservice for cloud and on-device deployment and is part of NVIDIA ACE, a suite of digital human technologies that provide speech, intelligence, and animation powered by generative AI.
        </p>
      </div>
    </div>
  );
}