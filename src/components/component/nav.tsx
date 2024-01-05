export const Nav = () => {

  return (
    <main key="1" className="flex flex-col w-full min-h-screen p-4 md:p-8 bg-[rgb(20,20,20)] text-[rgb(255,255,255)]">
      <nav className="fixed left-80 right-80 mx-auto w-20% top-4 bg-[rgba(20,20,20,0.6)] z-10">
        <div className="flex justify-center p-4">
          <p className="mx-4 hover:pointer cursor-pointer">JMO arquitectos</p>
          <p className="mx-4 hover:pointer cursor-pointer">Nosotros</p>
          <p className="mx-4 hover:pointer cursor-pointer text-lg">Casas</p>
          <p className="mx-4 hover:pointer cursor-pointer text-lg">Contacto</p>
        </div>
      </nav>
      {/* Slide 1 */}
      <div id="slide1" className={`h-screen bg-red-500  inset-0 w-screen}`}>
        <img src="next.svg" alt="Slide 1"></img>
      </div>
      {/* Slide 2 */}
      {/* // Slide 2 */}
      <div id="slide2" className="relative h-screen w-screen overflow-x-hidden" >
        <img
          src="skeetch.jpg"
          alt="Slide 2"
          className="object-cover w-full h-full overflow-hidden"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <div className="bg-[rgba(255,255,255,0.2)] p-8 text-black">
            <h1 className="text-4xl font-bold">Your Text Here</h1>
            <p className="mt-4 text-lg">Additional description or content</p>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className={`h-screen bg-green-500  inset-0 w-screen}`}>
        Slide 3 Content
      </div>
    </main>
  );
};