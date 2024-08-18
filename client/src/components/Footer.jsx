import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-16">
      <div className="flex h-full w-full flex-col gap-10 px-20 lg:flex-row lg:justify-between">
        <div className=" lg:w-[450px]">
        <h2 className="relative mb-3 text-2xl font-black text-gray-500 before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-blue-900">
          About Us
        </h2>
          <p className="text-gray-400">
            Because your planning is not always perfect, you need to be able to
            study whenever, wherever. Just read your notes one last time on your
            tablet or phone while you're on the go.
          </p>
        </div>
        <div className="">
          <h2 className="relative mb-3 text-2xl font-black text-gray-500 before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-blue-900">
            Quick Links
          </h2>
          <ul className="text-gray-400">
            <li className="mb-1">
              <Link to="/about">About</Link>
            </li>
            <li className="mb-1">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="relative mb-3 text-2xl font-black text-gray-500 before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-blue-900">
            Contact Info
          </h2>
          <ul className="text-gray-400">
            <li className="mb-1">
              <Link to="/about">+91 9078902XXX</Link>
            </li>
            <li className="mb-1">
              <Link to="/faq">+91 6371101XXX</Link>
            </li>
            <li className="mb-1">
              <Link to="/faq">helpnotorite@gmail.com</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;