import { useContext } from "react";
import  {MusicPlayerContext} from "../context/MusicPlayerContext";
const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext);

  function playTrack(index,track) {

    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio()
      state.audioPlayer.src = `${process.env.REACT_APP_DOMAIN}/${track.url}`;
      state.audioPlayer.play();
      setState({ ...state, currentTrackIndex: index, isPlaying: true });
    }
  }

  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState({ ...state, isPlaying: !state.isPlaying });
  }

  function playPreviousTrack() {
    let newIndex = null;
    state.currentTrackIndex === 0
      ? (newIndex = state.tracks.length - 1)
      : (newIndex = state.currentTrackIndex - 1);
    playTrack(newIndex);
  }

  function playNextTrack() {
    let newIndex = null;
    state.currentTrackIndex === state.tracks.length - 1
      ? (newIndex = 0)
      : (newIndex = state.currentTrackIndex + 1);
    playTrack(newIndex);
  }

  return {
    playTrack,
    togglePlay,
    currentTrackIndex: state.currentTrackIndex,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack
  };
};

export default useMusicPlayer;
