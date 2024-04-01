import React, { createContext, useState, useEffect, useRef } from "react";
import { MusicPlayerContext } from "../context/MusicPlayerContext.js";

import TracksFetchHttpAdapter from "../adapters/TracksFetchHttpAdapter.js";
import TrackList from "../components/TrackList.js";
import PlayerControls from "../components/PlayerControl.js"

function MusicPlayerView() {
  const trackService = new TracksFetchHttpAdapter();
  const audioPlayer = useRef(new Audio());
  const [state, setState] = useState({
    tracks: [],
    currentTrackIndex: null,
    isPlaying: false
  });

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(process.env);
        const musicList = await trackService.get(
          `${process.env.REACT_APP_ALL}`
        );
        setState((prevState) => ({
          ...prevState,
          audioPlayer: audioPlayer,
          tracks: musicList.sound,
          loading: false,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error: error.message,
          loading: false,
        }));
      }
    }

    fetchData();
  }, []);
  
  if (state.loading) {
    return (<div>...loading</div>);
  }

  if (state.error) {
    return (<div>Error: {state.error}</div>);
  }

  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      <div className="container">
        <TrackList />
        <PlayerControls />
      </div>
    </MusicPlayerContext.Provider>
  );
}

export default MusicPlayerView;
