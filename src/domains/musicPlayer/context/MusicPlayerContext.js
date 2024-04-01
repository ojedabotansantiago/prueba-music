import { createContext, useState } from "react";
import PropTypes from 'prop-types';

// Creando el context
export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
   //@description: set initial status
  const [isActive, setIsActive, loading, error] = useState(false);
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
    <MusicPlayerContext.Provider value={{ isActive, play, pause, loading , error }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};
MusicPlayerProvider.propTypes ={
  isActive: Boolean,
  loading: Boolean,
  error: String
}