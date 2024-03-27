import { useContext } from "react";
import { MusicPlayerContext } from "../context/MusicPlayerContext";
const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext);

  function playTrack(index, track) {
    state.currentUrl = `${process.env.REACT_APP_DOMAIN}/${track.url}`;
    setState({ ...state, currentTrackIndex: index, isPlaying: true });
  }

  function playTrackCustomControls(index, track) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.currentUrl = `${process.env.REACT_APP_DOMAIN}/${track.url}`;

      state.audioPlayer = new Audio();
      state.audioPlayer.pause();
      state.audioPlayer.play()
      state.audioPlayer.src = `${process.env.REACT_APP_DOMAIN}/${track.url}`;
      state.currentUrl = `${process.env.REACT_APP_DOMAIN}/${track.url}`;
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
    playTrack(newIndex, state.tracks[newIndex]);
  }

  function playNextTrack() {
    let newIndex = null;
    state.currentTrackIndex === state.tracks.length - 1
      ? (newIndex = 0)
      : (newIndex = state.currentTrackIndex + 1);
    playTrack(newIndex, state.tracks[newIndex]);
  }
  function toggleMute(muteStatus) {
    debugger;
    state.muteStatus = muteStatus;
    setState({ ...state, muteStatus: muteStatus });
  }
  return {
    playTrack,
    togglePlay,
    toggleMute: toggleMute,
    muteStatus: state.muteStatus,
    audioPlayer: state.audioPlayer,
    currentTrackIndex: state.currentTrackIndex,
    currentUrl: state.currentUrl ? state.currentUrl : '',
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
