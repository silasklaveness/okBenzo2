"use client";
import React, { useEffect } from "react";

const Calender = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      style={{ height: "825px", width: "100%" }}
      data-url={url}
    ></div>
  );
};

export default Calender;
