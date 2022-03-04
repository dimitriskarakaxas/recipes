import React from "react";
import { useLocation, Link } from "react-router-dom";

const AppWrapper = (props) => {
  const location = useLocation();

  const link = {
    path: location.pathname === "/" ? "/cart" : "/",
    content: location.pathname === "/" ? "Cart" : "Home",
  };

  const triangleStyles = `border-t-[5px] border-b-[5px] self-center border-transparent transition ${
    location.pathname === "/"
      ? "border-l-8 border-l-white ml-2 md:group-hover:translate-x-2"
      : "border-r-8 border-r-white order-first mr-2 md:group-hover:-translate-x-2"
  }`;

  return (
    // <div className="w-screen min-h-screen flex justify-center items-center">
    <div className="w-screen flex justify-center items-center">
      <div className="w-10/12 max-w-7xl mt-8">
        <Link
          to={link.path}
          className={`text-white text-right bg-purple-700 px-6 py-2 mb-5 w-fit flex ml-auto group ${
            location.pathname === "/cart" ? "ml-0" : ""
          } `}
        >
          {link.content}
          <div className={triangleStyles}></div>
        </Link>

        {props.children}
      </div>
    </div>
  );
};

export default AppWrapper;
