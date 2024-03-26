import React, { createContext, useState } from "react";
import { MusicPlayerContext } from "../context/MusicPlayerContext.js";

import TrackList  from "../components/TrackList.js";
 import PlayerControls from "../components/PlayerControl.js"
 import ProgressBar from "../components/ProgressBar.js";

 function MusicPlayerView() {
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
    <MusicPlayerContext.Provider value={[state, setState]}>
      <div className="container">
        <TrackList />
        <PlayerControls />
        <ProgressBar />
      </div>
    </MusicPlayerContext.Provider>
  );
}

export default MusicPlayerView;
