import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-bgprimary pt-5 flex-wrap">
      <div className="container mx-auto flex w-full items-center justify-between px-5 sm:px-0">
        <div className="basis-1/4">
          <Link to="/">
            <img src="logo.svg" alt="" />
          </Link>
        </div>
        <div className="basis-2/4 menu hidden lg:flex justify-around text-xl text-textprimary">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/blog">Blogs</NavLink>
          <NavLink to="/team">Our Team</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="basis-1/4">
          <div className="hidden lg:flex justify-end">
            <Link
              to="/appoinment"
              className="text-textsecondary text-lg font-semibold flex gap-4 border
              border-s-textsecondary rounded-3xl px-5 py-2 hover:bg-textprimary hover:border-0"
            >
              <span>Book Appoinment</span>
              <span>
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
            </Link>
          </div>
          <div className="text-2xl text-textprimary lg:hidden flex w-full justify-end">
            {isOpen ? (
              <button onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            ) : (
              <button onClick={() => setIsOpen(true)}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="bg-textsecondary h-[1px] mt-5"></div>
      {isOpen && (
        <div className="mobilemenu flex flex-col justify-center gap-y-2 lg:hidden items-center text-xl bg-textsecondary basis-full py-5 text-textprimary">
          <NavLink onClick={() => setIsOpen(false)} to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/about">
            About Us
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/services">
            Services
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/blog">
            Blogs
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/team">
            Our Team
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/contact">
            Contact Us
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
