
/* import videoMOV from '../../../public/casa_tt.mov'; */

export const Videoback = () => {
    /* Aqui van todos los scripts */
  

    return (
        <div className="video-container relative h-screen">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover absolute top-0 left-0 z-0">
          {/* <source src={videoMP4} type="video/mp4" />
          <source src={videoWebM} type="video/webm" />
          <source src={videoOGV} type="video/ogg" />
          <source src={videoMOV} type="video/quicktime" /> */}
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="contenido relative z-10 flex items-center justify-center h-full text-white">
          {/* Tu contenido HTML va aquí */}
          <h1 className="text-4xl font-bold">Bienvenido a mi página</h1>
          <p className="text-lg">¡Aquí va el resto de tu contenido!</p>
        </div>
      </div>
    );
  };