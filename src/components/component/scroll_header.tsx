"use client";
import React, { useEffect, useState } from "react";

export const ScrollHeader = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0.001);
  const [fixed, setFixed] = useState(false);
  const [titleSize, setTitleSize] = useState(288);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const stickyThreshold = 2000;
      const fixedThreshold = 4290;

      setIsSticky(scrollPosition > stickyThreshold);
      setIsFixed(scrollPosition > fixedThreshold);

      // Actualizamos el tamaño del título utilizando requestAnimationFrame
      requestAnimationFrame(() => {
        setTitleSize(Math.max(280 - (scrollPosition * 2) / 40, 1));
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titlePosition = fixed ? "fixed top-0 left-0 right-0" : "";
  const stickyStyles = {
    position: isFixed ? "absolute" : isSticky ? "fixed" : "absolute",
    top: isFixed ? "2530px" : isSticky ? "450px" : "300px",
    left: "43px",
    transition: "all 0s ease-in-out",
  };

  return (
    <div className="sticky_parent bg-white relative h-screen flex flex-col items-center justify-center overflow-hidden z-[-2]">
      <div
        className={`transition-all duration-100 ${titlePosition}`}
        style={{
          backgroundColor: fixed ? "white" : "transparent",
          height: fixed ? "10rem" : "217vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: `${titleSize}px`,
        }}
      >
        <div className="" style={stickyStyles}>Arquitectos Lab.</div>
      </div>

      <div className="grid grid-cols-2 items-center justify-center mt-96">
        <p className="text-5xl text-left pl-10 text-gray-400 max-w-fit ">
        Como líder en nuestro despacho de arquitectura, 
        creamos visiones audaces que fusionan innovación y belleza. 
        Transformamos sueños en estructuras icónicas, trascendiendo 
        límites para inspirar el mundo. 
        </p>
        <div>
          <table>

          </table>
        </div>
      </div>
    </div>
  );
};