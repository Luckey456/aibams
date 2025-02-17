import { React } from "react";
import "../Styles/Hero.css";
import "../Styles/Button.css";
import "../Styles/cards.css";
import Buttonsign from "../components/button.jsx";
import gifPath from "../assets/ctrl-k-630 (1).gif"; // Import the GIF

function Hero() {
  return (
    <>
      <section className="content">
        <div>
          <div className="main-title  pt-50 font-bold tracking-widest ">
            <h1>
              AIBAMS <span className=" specialCase glow-text ">WebX</span>
            </h1>
          </div>

          <div className="tag-line  text-center pt-5 ">
            <p>
              We are thrilled to announce that WebX-Beta Version <br />
              is in its final stages of development.
            </p>
          </div>
        </div>

        <div className="items-center">
          <button className="buttonStart  ">join</button>
        </div>
      </section>

      <section className="product">
        <div className="product-title text-3xl text-center pt-50">
          <h1 className=" ">Our Product</h1>
        </div>
        <div className="pt-25 text-5xl text-center">
          <h2>
            Gain the insights, advice and <br />
            tools to achieve your priorities
          </h2>
        </div>

        <div className="cards flex flex-row space-x-30 pt-25 pl-30  " >

            {/* //First card... */}

        <div className="card hover:!bg-red-600">
          <div className="card-details">
            <p className="text-title">Product A</p>
            <p className="text-body">Card Details</p>
          </div>
          <a className="card-button" href="#link">
            Try
          </a>
        </div>

        {/* //Second card... */}

        <div className="card">
          <div className="card-details">
            <p className="text-title">Product B</p>
            <p className="text-body">Card Details</p>
          </div>
          <a className="card-button" href="#link">
            Try
          </a>
        </div>

        {/* //Third card... */}

        <div className="card">
          <div className="card-details">
            <p className="text-title">Product C</p>
            <p className="text-body">Card Details</p>
          </div>
          <a className="card-button" href="#link">
            Try
          </a>
        </div>

        {/* //Forth card... */}

        <div className="card hover:!bg-amber-800">
          <div className="card-details">
            <p className="text-title">Product D</p>
            <p className="text-body">Card Details</p>
          </div>
          <a className="card-button bg-amber-400" href="#link">
            Try
          </a>
        </div>

        {/* //Fifth card... */}

        <div className="card hover:!bg-amber-800">
          <div className="card-details">
            <p className="text-title">Product E</p>
            <p className="text-body">Card Details</p>
          </div>
          <a className="card-button bg-amber-400" href="#link">
            Try
          </a>
        </div>

        </div>

      </section>

    <section className="content-text pt-50">
      <div className="passage text-center">

        <p className="text-2xl tracking-wider pt-10 pb-10 ">Got something to improve? There is an app for that. <br />
          No complexity, no cost, just a one-click install.</p>

          
        <p className="text-2xl tracking-wider pt-10 pb-10 ">Each app simplifies a process and empowers more people. <br />
          Imagine the impact when everyone gets the right tool for the job, with perfect integration.</p>
        <p></p>
      </div>
    </section>

    <section className="work text-center pt-10">
      <h1>
        <span className=" text-color pr-5 " >
        Level up
        </span>
         your quality of work
      </h1>

      <div className="video flex items-center justify-center pt-30 pb-30  ">

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mi_XJ9fDJgI"
        title="YouTube video player"
        frameBorder="0"
        allow=" autostart; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      </div>

    </section>
    <section className="work text-center pt-10">
      <h1>
        <span className=" text-color pr-5 " >
        Optimized 
        </span>
        for productivity
      </h1>

      <div className="video flex items-center justify-center pt-30 pb-30  ">
        <img src={gifPath} alt="Productivity GIF" />
      </div>

    </section>
    <section className=" text-2xl text-center pt-10 tracking-wider">
      <h1>
      Unleash <br /> your
        <span className=" pl-10 text-color pr-5 " >
         growth potential
        </span>
        
      </h1>
      <div className="flex items-center justify-center pt-20 pb-20">
      <Buttonsign/>
      </div>
      

      

    </section>

      <section className="content-motto pt-5">
        <div className=" motto font-medium text-center   ">
          <h1>
            Transform Today, Empower Tomorrow:
            <br />
            AIBAMS - Revolutionizing Business with AI Mastery.
          </h1>
        </div>
      </section>
    </>
  );
}

export default Hero;
