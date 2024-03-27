import React, { useState, useEffect, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
  faVolumeMute,
  faVolumeHigh
} from "@fortawesome/free-solid-svg-icons";

import useMusicPlayer from "../hooks/useMusicPlayer.js";

function PlayerControls() {
  const music = useMusicPlayer();
  const audioElement = useRef(); // Referencia al elemento de audio

  useEffect(() => {
    if(music.currentUrl === '') return;
    if (music.isPlaying) {
      audioElement.current.play(); // Reproducir el audio. Función definida en el context.
    } else {
      audioElement.current.pause();
      music.isPlaying = false;  // Pausar el audio. Función definida en el context.
    }
  }, [music.currentUrl])

  useEffect(() => {
    audioElement.current.muted = music.muteStatus;
  }, [music.muteStatus])

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
            {/* <button
              className="button has-text-light has-background-grey-dark"
              onClick={music.togglePlay}
            >
              {music.isPlaying ? (
                <FontAwesomeIcon icon={faPause} />
              ) : (
                <FontAwesomeIcon icon={faPlay} />
              )}

            </button> */}
            {music.isPlaying ? (
              <span>
                <button onClick={() => music.toggleMute(true)} ><FontAwesomeIcon icon={faVolumeMute} /></button>
                <button onClick={() => music.toggleMute(false)}><FontAwesomeIcon icon={faVolumeHigh} /></button>
              </span>

            ) : (
              <span></span>
            )}
            <button className="button has-text-light has-background-grey-dark">
              <FontAwesomeIcon
                icon={faStepForward}
                onClick={music.playNextTrack}
              />
            </button>

          </div>

        ) : (<span>selecione una cancion</span>)}

          <audio
            id="audio-player"
            name="audio-player"
            src={music.currentUrl}
            ref={audioElement}
            controls
          ></audio>
      </div>
    </>
  );
}

export default PlayerControls;
