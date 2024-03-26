import React, { createContext, useState } from "react";
 import MusicPlayerView from "./views/MusicPlayerView.js";


function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Lost Chameleon - Genesis",
        file: 'LostChameleon'
      },
      {
        name: "The Hipsta - Shaken Soda",
        file: 'Rock'
      },
      {
        name: "Tobu - Such Fun",
        file: 'Tobu'
      }
    ],
    currentTrackIndex: null,
    isPlaying: false
  });

  return (
    <MusicPlayerView />
  );
}

export default App;
