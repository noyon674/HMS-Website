import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

function Hero_Section() {
  return (
    <div className="bg-bgprimary h-[60vh] sm:h-[100vh]">
      <div className="container m-auto h-full flex flex-col lg:flex-row items-center justify-around">
        <div className="h-full flex flex-col justify-center">
          <p className="text-textprimary uppercase tracking-widest text-lg text-center md:text-left">
            we tack care of your health
          </p>
          <h1 className="capitalize hidden sm:block text-6xl font-semibold text-textsecondary mt-2 mb-10">
            We ar providing <br />
            best & affordable
            <br />
            health care.
          </h1>
          <h1 className="capitalize text-center text-3xl font-semibold my-5 w-[300px] md:hidden mx-auto text-textsecondary">
            We ar providing best & affordable health care.
          </h1>
          <p className="text-gray-400 text-base font-semibold w-[350px] mx-auto text-center md:text-left md:w-[500px]">
            Our is to deliver the highest quality healthcare services. We
            believe that everyone deserves access to excellent medical care
            without compromising on quality.
          </p>
          <div className="mt-10 flex gap-x-5 items-center justify-center md:justify-start">
            <Link className="capitalize text-textsecondary text-xl font-semibold border border-s-textsecondary px-5 py-2 rounded-3xl hover:bg-textprimary">
              Read more
            </Link>
            <Link
              to="https://youtu.be/dCLhUialKPQ?si=8EWtIm273XwbtkEP"
              target="_blank"
              className="capitaliz text-textprimary text-xl font-semibold flex items-center gap-x-2 hover:text-textsecondary"
            >
              <span>
                <FontAwesomeIcon icon={faCirclePlay} />
              </span>
              <span>Watch Video</span>
            </Link>
          </div>
        </div>
        <div className="bg-[url(/img/white-dots-img.png)] hidden sm:flex bg-no-repeat gap-x-10 bg-contain mb-20 lg:mb-0 ">
          <img
            src="./img/hero-img-1.jpg"
            alt=""
            className="rounded-full -ml-10 mt-20"
          />
          <img
            src="./img/hero-img-2.jpg"
            alt=""
            className="rounded-full mb-20"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero_Section;
