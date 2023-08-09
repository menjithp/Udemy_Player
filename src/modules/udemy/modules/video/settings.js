import React, { useState ,useEffect} from "react";
import "./settings.css";

import {Error} from './icon'

export default function Settings() {

    const [state,setState]=useState(true)



    const resolute_hider=(e)=>{

      document.querySelector(".show_resolute").classList.remove("show_resolute")
      e.currentTarget.classList.add("show_resolute")

    }

useEffect(()=>{

  document.addEventListener('click',(e)=>{
    const settings=document.querySelector(".settings_conatiner")
    const speed=document.querySelector(".speed_movie")


    if (settings.contains(e.target)){
      document.querySelector(".speed_box").classList.remove("show")
    }
    else if(speed.contains(e.target)){
      document.querySelector(".settings_conatiner").classList.remove("show_settings")
    }

    else{
      document.querySelector(".speed_box").classList.remove("show")
      document.querySelector(".settings_conatiner").classList.remove("show_settings")
    }
  })

},[])



  return (
    <div className="settings_box">
      <ul className="settings_ul">
        <li onClick={resolute_hider} className="settings_li">
          <button >1080p</button>
        </li>
        <li onClick={resolute_hider} className="settings_li">
          <button>720p</button>
        </li>
        <li onClick={resolute_hider} className="settings_li">
          <button>480p</button>
        </li>
        <li onClick={resolute_hider} className="show_resolute settings_li">
          <button>360p</button>
        </li>
        <li className="settings_li">
          <button>Auto</button>
        </li>
        <li className="seperator"><hr/></li>
        <li className="autoplay">
          <button className="flex_ai_sb">Autoplay
                <label className="switch">
                        <input className="togglebar" type="checkbox" checked={state} onChange={()=>setState((prev)=>!prev)}/>
                        <span className="slider round"></span>
                </label>
          </button>
        </li>
        <li className="errored">
          <button><Error className="error_icon" />Download lecture</button>
        </li>
        <li >
          <button>Keyboard Shortcuts</button>
        </li>
        <li >
          <button>Content information</button>
        </li>
      </ul>
    </div>
  );
}
