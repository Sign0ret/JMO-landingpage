import React from 'react';

interface VideoBackgroundProps{
    videoSource: string;
}
export const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSource }) => {
    return (
        <main key="1" className="flex flex-col  relative">
            <div className="h-screen">
                <div className='z-[-10]'>
                    <video autoPlay muted loop id="background-video" className="object-cover w-full h-full absolute inset-0">
                    <source src={videoSource} type="video/mp4" />
                    
                    </video>
                </div>
            </div>
        </main>
    );
  };