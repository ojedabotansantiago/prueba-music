import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward
} from "@fortawesome/free-solid-svg-icons";

import UseMusicPlayer from "../hooks/UseMusicPlayer.js";

function PlayerControls() {
  const music = UseMusicPlayer();
  debugger;
  return (
    <>
      <div className="box controls has-background-grey-dark">
        <div className="current-track has-text-light">
          <p>{music.currentTrackName}</p>
        </div>

        {music.currentUrl ? (
          <div>
            <button className="button has-text-light has-background-grey-dark">
              <FontAwesomeIcon
                icon={faStepBackward}
                onClick={music.playPreviousTrack}
              />
            </button>
            <button
              className="button has-text-light has-background-grey-dark"
              onClick={music.togglePlay}
            >
              {music.isPlaying ? (
                <FontAwesomeIcon icon={faPause} />
              ) : (
                <FontAwesomeIcon icon={faPlay} />
              )}
            </button>



            <button className="button has-text-light has-background-grey-dark">
              <FontAwesomeIcon
                icon={faStepForward}
                onClick={music.playNextTrack}
              />
            </button>
          </div>
        ) : (<span>selecione una cancion</span>)}


      </div>
    </>
  );
}

export default PlayerControls;
