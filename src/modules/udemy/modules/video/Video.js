import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "../header_sidebar/icon";
import "./Video.css";

import {
  Play,
  Pause,
  Leftarrow,
  Rightarrow,
  Notes,
  Volume,
  Caption,
  Transcript,
  FullScreen,
  ExitFull,
  Settings,
  Mute,
} from "./icon";

import Settingsfun from "./settings";

export default function Video() {
  const [state, setState] = useState({});

  const video = useRef(null);

  function playPause() {
      console.log(video.current.paused)
    if (video.current.paused) video.current.play();
    else video.current.pause();

    document
      .querySelector(".videocontainer2")
      .setAttribute("data-play", !video.current.paused);
  }
  function setVolume(volume, e) {
    video.current.volume = volume;
    document.querySelector("[data-volume]").setAttribute("data-volume", volume);

    const volumecontainer = document.querySelector(".volume_container");

    volumecontainer.style.setProperty("--percent", volume);
  }

  const skip = (time) => {
    video.current.currentTime += time;
  };

  function playbackRate(speedrate, e) {
    video.current.playbackRate = speedrate;

    document
      .querySelector("[data-show-purple]")
      .removeAttribute("data-show-purple");
    e.currentTarget.dataset.showPurple = true;
    document.querySelector(".speed_box").innerText = speedrate + "x";
  }

  function clickwayProgress(e) {
    const property = e.target.getBoundingClientRect();
    let subrated_value = e.nativeEvent.x - property.x;

    e.target.style.setProperty("--video-progress-level", subrated_value + "px");

    let ratio = property.width / video.current.duration;
    let update_value = subrated_value / ratio;
    video.current.currentTime = update_value;
    document.querySelector(".timings").innerText = `${fancyTimeFormat(
      video.current.currentTime
    )} / ${fancyTimeFormat(video.current.duration)}`;
  }

  function animator() {
    if (
      +window.getComputedStyle(document.querySelector(".big_button")).scale ===
      1
    ) {
      document.querySelector(".big_button").style.scale = 0;
    }
    document.querySelector(".big_button").classList.add("animator");
    setTimeout(() => {
      document.querySelector(".big_button").classList.remove("animator");
    }, 250);
  }

  useEffect(() => {
    if (!video.current) return;
    video.current.addEventListener("click", () => {

      playPause();
      animator();
    });

    const volume_slider = document.querySelector(".volume_slider");
    volume_slider.addEventListener("click", (e) => {
      const slider_property = volume_slider.getBoundingClientRect();
      const grey_slider = document.querySelector(".grey_volume");
      const volumecontainer = document.querySelector(".volume_container");
      const grey_property = grey_slider.getBoundingClientRect();

      const grey_start = grey_property.y;
      const grey_end = grey_start + grey_property.height;

      const slider_start = slider_property.y;
      const slider_end = slider_start + slider_property.height;

      if (e.y >= grey_end) {
        setVolume(0);
        volumecontainer.style.setProperty("--percent", 0);
      } else if (e.y <= grey_start) {
        setVolume(1);
        volumecontainer.style.setProperty("--percent", 1);
      } else if (e.y < grey_end && e.y > grey_start) {
        const total_length = grey_property.height;
        let a = grey_end - e.y;
        let final_percent = a / total_length;
        setVolume(final_percent);
        volumecontainer.style.setProperty("--percent", final_percent);
      }
    });

    const progress_container = document.querySelector(".progress_conatiner");
    const progress_property = progress_container.getBoundingClientRect();

    video.current.addEventListener("timeupdate", () => {
      let ratio = progress_property.width / video.current.duration;
      let update_value = ratio * video.current.currentTime;
      progress_container.style.setProperty(
        "--video-progress-level",
        update_value + "px"
      );
      document.querySelector(".timings").innerText = `${fancyTimeFormat(
        video.current.currentTime
      )} / ${fancyTimeFormat(video.current.duration)}`;
    });

    document.querySelector(".timings").innerText = `${fancyTimeFormat(
      video.current.currentTime
    )} / ${fancyTimeFormat(video.current.duration)}`;

    var mouseStartedMoving = false;
    var mouseMoved = false;
    const MINIMUM_MOUSE_MOVE_TIME = 1000;
    let timer;

    document
      .querySelector(".videocontainer2")
      .addEventListener("mouseenter", () => {
        timer = setInterval(() => {
          if (!mouseMoved && mouseStartedMoving) {
            //Mouse stopped moving
            //Do CSS change
            document.querySelector(".controller").classList.add("notshow");
            document.querySelector(".controller").classList.remove("show_c");

            mouseStartedMoving = false;
          }
          mouseMoved = false;
        }, MINIMUM_MOUSE_MOVE_TIME);
      });

    document
      .querySelector(".videocontainer2")
      .addEventListener("mouseleave", () => {
        clearTimeout(timer);
        document.querySelector(".controller").classList.add("notshow");
        document.querySelector(".controller").classList.remove("show_c");
      });

    document.querySelector(".videocontainer2").onmousemove = function (ev) {
      mouseStartedMoving = true;
      mouseMoved = true;
      document.querySelector(".controller").classList.remove("notshow");
      document.querySelector(".controller").classList.add("show_c");
    };
  }, [video]);

useEffect(()=>{
        const handleKeyDown = (event) => {
            if (event.key === ' ') {
                playPause()
                animator();
                
            }
        }
          window.addEventListener('keydown', handleKeyDown);
      
          return () => {
            window.removeEventListener('keydown', handleKeyDown);}
},[])
  

  function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
  }

  return (
    <div className="videocontainer1">
      <div className="videocontainer2" data-play="false">
        <video ref={video}
       allow="autoplay"
  loop  onError={(e) => console.log('Autoplay error:', e)}>
          <source src="sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="controller">
          <div className="progress_conatiner" onClick={clickwayProgress} />

          <div className="control_container flex_ai_sb">
            <div className="left_controls flex_ai_jc gap_1">
              <span
                onClick={() => {
                  playPause();
                  animator();
                }}
              >
                <Play className="play" />
                <Pause className="pause" />
              </span>
              <Leftarrow onClick={skip.bind(null, -5)} />
              <div className="speed_movie">
                <span
                  className="speed_box"
                  onClick={(e) => {
                    e.currentTarget.classList.toggle("show");
                  }}
                >
                  1x
                </span>
                <ul className="speedrate_container">
                  <li>
                    <button onClick={playbackRate.bind(null, 0.5)}>0.5x</button>
                  </li>
                  <li>
                    <button onClick={playbackRate.bind(null, 0.75)}>
                      0.75x
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={playbackRate.bind(null, 1)}
                      data-show-purple
                    >
                      1x
                    </button>
                  </li>
                  <li>
                    <button onClick={playbackRate.bind(null, 1.25)}>
                      1.25x
                    </button>
                  </li>
                  <li>
                    <button onClick={playbackRate.bind(null, 1.5)}>1.5x</button>
                  </li>
                  <li>
                    <button onClick={playbackRate.bind(null, 1.75)}>
                      1.75x
                    </button>
                  </li>
                  <li>
                    <button onClick={playbackRate.bind(null, 2)}>2x</button>
                  </li>
                </ul>
              </div>
              <Rightarrow onClick={skip.bind(null, 5)} />
              <span className="timings"></span>
              <Notes />
            </div>
            <div className="right_controls flex_ai_jc gap_1">
              <span className="volume_container" data-volume="1">
                <Volume onClick={setVolume.bind(null, 0)} className="volume" />
                <Mute onClick={setVolume.bind(null, 1)} className="mute" />

                <div className="volume_slider">
                  <span className="grey_volume"></span>
                  <span className="violet_volume"></span>
                </div>
              </span>
              <Transcript />
              <Caption />
              <div className="settings_conatiner">
                <Settings
                  onClick={() => {
                    document
                      .querySelector(".settings_conatiner")
                      .classList.toggle("show_settings");
                  }}
                />

                <Settingsfun />
              </div>

              <FullScreen
                className="Fullscreen"
                onClick={() => {
                  document
                    .querySelector(".videocontainer2")
                    .requestFullscreen();
                  document.querySelector(".Fullscreen").style.display = "none";
                  document.querySelector(".exitscreen").style.display =
                    "inline";
                  document.querySelector(".half_full_screen").style.display =
                    "none";
                }}
              />
              <ExitFull
                className="exitscreen"
                onClick={() => {
                  document.exitFullscreen();
                  document.querySelector(".exitscreen").style.display = "none";
                  document.querySelector(".Fullscreen").style.display =
                    "inline";
                  document.querySelector(".half_full_screen").style.display =
                    "inline";
                }}
              />
              <FullScreen
                className="half_full_screen rotate_45"
                onClick={() => {
                  document.querySelector(".videocontainer1").style.width =
                    "100%";
                  document.querySelector(".sidebar1").style.width = "0";
                  document.querySelector(".half_full_screen").style.display =
                    "none";
                  document.querySelector(".half_exit_screen").style.display =
                    "inline";
                }}
              />
              <ExitFull
                className="half_exit_screen rotate_45"
                onClick={() => {
                  document.querySelector(".videocontainer1").style.width =
                    "calc(100% - 20rem)";
                  document.querySelector(".sidebar1").style.width = "20rem";

                  document.querySelector(".half_full_screen").style.display =
                    "inline";
                  document.querySelector(".half_exit_screen").style.display =
                    "none";
                }}
              />
            </div>
          </div>
        </div>

        <button
          className="big_button"
          onClick={() => {
            playPause();
            animator();
          }}
        >
          <Play className="big_play" />
          <Pause className="big_pause" />
        </button>
      </div>
    </div>
  );
}
