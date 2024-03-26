import useMusicPlayer from "../hooks/UseMusicPlayer.js";

const ProgressBar = () => {
  const music = useMusicPlayer();
  debugger
  return (
    <div className="progress">
      <span className="time current">{Math.floor(music.audioPlayer.currentTime / 60)}</span>
      <input type="range" />
      <span className="time">{Math.floor(music.audioPlayer.duration / 60)}</span>
    </div>
  );
};

export default ProgressBar;