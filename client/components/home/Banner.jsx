import React from "react";

function Banner() {
  return (
    <div className="bg-bgprimary h-[100vh]">
      <div className="container m-auto h-full flex items-center justify-around">
        <div className="">
          <p className="text-textprimary uppercase tracking-widest text-lg">
            we tack care of your health
          </p>
          <h1 className="capitalize text-6xl font-semibold text-textsecondary mt-2 mb-10">
            We ar providing <br />
            best & affordable
            <br />
            health care.
          </h1>
          <p className="text-gray-400 text-base font-semibold">
            Our is to deliver the highest quality healthcare services. <br />
            We believe that everyone deserves access to excellent <br />
            medical care without compromising on quality.
          </p>
        </div>
        <div className="">right</div>
      </div>
    </div>
  );
}

export default Banner;
