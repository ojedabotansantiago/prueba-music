import React, { createContext, useState, useEffect } from "react";
import { MusicPlayerContext } from "../context/MusicPlayerContext.js";

import TracksFetchHttpAdapter from "../adapters/TracksFetchHttpAdapter.js";
import TrackList from "../components/TrackList.js";
import PlayerControls from "../components/PlayerControl.js"
import ProgressBar from "../components/ProgressBar.js";

function MusicPlayerView() {
  const trackService = new TracksFetchHttpAdapter();

  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [],
    currentTrackIndex: null,
    isPlaying: false
  });

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(process.env);
        const url2 = process.env.REACT_API_All_SONGS;
        debugger;
        const musicList = await trackService.get(
          `${process.env.REACT_APP_BASE_URL}${process.env.REACT_API_All_SONGS}`
        );
        setState((prevState) => ({
          ...prevState,
          tracks: musicList,
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
        <ProgressBar />
      </div>
    </MusicPlayerContext.Provider>
  );
  

}

export default MusicPlayerView;
