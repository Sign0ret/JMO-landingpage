export const Navbar = () => {
    /* Aqui van todos los scripts */
  

    return (
      
      <nav className="bg-black bg-opacity-15 p-4 fixed w-10% top-6 left-80 right-80 z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="architectural.png"
              alt="Logo"
              className="h-7 w-auto mr-3"  // Puedes ajustar la altura (h-8) según tus necesidades
            />
            <span className="text-white font-bold">ARQUITECTUM</span>
            <span id="labs" className="text-white font-bold size-5 text-xs ml-1">LAB&apos;s</span>
          </div>
          <ul className="flex space-x-8">
            <li className="text-white">JMO ARQUITECTOS</li>
            <li className="text-white">NOSOTROS</li>
            <li className="text-white">CASAS</li>
            <li className="text-white">CONTACTO</li>
          </ul>
        </div>
      </div>
    </nav>
    );
  };