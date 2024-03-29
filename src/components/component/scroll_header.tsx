'use client'
// Add this type definition at the top of your file or in a shared types file
type Position = "static" | "relative" | "absolute" | "sticky" | "fixed" | "initial" | "inherit";

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

  const stickyStyles: React.CSSProperties = {
    position: isFixed ? "absolute" : isSticky ? "fixed" : "absolute",
    top: isFixed ? "2530px" : isSticky ? "450px" : "300px",
    left: "42px",
    transition: "all 0s ease-in-out",
  };

  return (
    <main>
      <section className="hidden lg:block">
        <div className="sticky_parent bg-white relative h-screen flex flex-col items-center justify-center overflow-hidden z-[-2]">
          <div
            className={`transition-all duration-100 ${titlePosition}`}
            style={{
              backgroundColor: fixed ? "white" : "transparent",
              height: fixed ? "10rem" : "220vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: `${titleSize}px`,
            }}
          >
            <div style={stickyStyles}>Arquitectos Lab.</div>
          </div>

          <div className="grid grid-cols-2 items-center justify-center mt-96">
            <p className="text-5xl text-left pl-10 text-gray-400 max-w-fit ">
              Como líder en nuestro despacho de arquitectura,
              creamos visiones audaces que fusionan innovación y belleza.
              Transformamos sueños en estructuras icónicas, trascendiendo
              límites para inspirar el mundo.
            </p>
            <div>
              <table>{/* Add your table content here */}</table>
            </div>
          </div>
        </div>
      </section>

      <section className="block lg:hidden">
        <div className=" bg-white relative h-screen flex flex-col items-center md:items-start justify-center overflow-hidden z-[-2]">
          <div className="max-w-[350px] md:max-w-[550px]">
            <div className="text-5xl md:text-7xl font-mono px-6 py-2"> JMO Arquitectos</div>
              
                <p className="text-4xl pl-10 text-gray-400">
                  Como líder en nuestro despacho de arquitectura,
                  creamos visiones audaces que fusionan innovación y belleza.
                  Transformamos sueños en estructuras icónicas, trascendiendo
                  límites para inspirar el mundo.
                </p>
      
              <div>
                <table>{/* Add your table content here */}</table>
              </div>
          </div>
        </div>
      </section>
    </main>

  );
};

// "use client";
// import React, { useEffect, useState } from "react";

// export const ScrollHeader = () => {
//   const [isFixed, setIsFixed] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [scrollY, setScrollY] = useState(0.001);
//   const [fixed, setFixed] = useState(false);
//   const [titleSize, setTitleSize] = useState(288);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const stickyThreshold = 2000;
//       const fixedThreshold = 4290;

//       setIsSticky(scrollPosition > stickyThreshold);
//       setIsFixed(scrollPosition > fixedThreshold);

//       // Actualizamos el tamaño del título utilizando requestAnimationFrame
//       requestAnimationFrame(() => {
//         setTitleSize(Math.max(280 - (scrollPosition * 2) / 40, 1));
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const titlePosition = fixed ? "fixed top-0 left-0 right-0" : "";
//   const stickyStyles = {
//     position: isFixed ? "absolute" : isSticky ? "fixed" : "absolute",
//     top: isFixed ? "2530px" : isSticky ? "450px" : "300px",
//     left: "43px",
//     transition: "all 0s ease-in-out",
//   };

//   return (
//     <div className="sticky_parent bg-white relative h-screen flex flex-col items-center justify-center overflow-hidden z-[-2]">
//       <div
//         className={`transition-all duration-100 ${titlePosition}`}
//         style={{
//           backgroundColor: fixed ? "white" : "transparent",
//           height: fixed ? "10rem" : "217vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: `${titleSize}px`,
//         }}
//       >
//         <div className="" style={stickyStyles}>Arquitectos Lab.</div>
//       </div>

//       <div className="grid grid-cols-2 items-center justify-center mt-96">
//         <p className="text-5xl text-left pl-10 text-gray-400 max-w-fit ">
//         Como líder en nuestro despacho de arquitectura, 
//         creamos visiones audaces que fusionan innovación y belleza. 
//         Transformamos sueños en estructuras icónicas, trascendiendo 
//         límites para inspirar el mundo. 
//         </p>
//         <div>
//           <table>

//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };