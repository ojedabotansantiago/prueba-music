import { createContext, useState } from "react";

// Creando el context
export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
   //@description: set initial status
  const [isActive, setIsActive] = useState(false);
  //@description: play song function  
  const play = () => {
    setIsActive(true);
  };
  // @description: pause player function
  const pause = () => {
    setIsActive(false);
  };

  // Proporcionando el estado y las funciones a los componentes "hijos"
  return (
    <MusicPlayerContext.Provider value={{ isActive, play, pause }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};