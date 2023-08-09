import React,{useContext,useCallback, useEffect} from "react";
import "./header.css";

import {Share,Menu,Rating,Progress_box} from './header_'


import ContextProvider from '../../context'

export default () => {

  const {state,dispatch}=useContext(ContextProvider)

  useEffect(()=>{
    
    document.addEventListener('click',(e)=>{

    var ele1=document.querySelector('.share_box_1')
    var ele2=document.querySelector('.header .menubox')
    var ele3=document.querySelector('.header .goal_progress')
    var ele4=document.querySelector('.header .star')
    let a=[ele1,ele2,ele3,ele4]


    let map_obj={
      goal_progress:"progressopen",
      star:"ratingopen",
      share_box_1:"shareopen",
      menubox:"menuopen"

    }

let b
let bool=false
    for(const item of a){
      for (const key in map_obj){
          if (item.contains(e.target)){
                if ([...item.classList].includes(key)){
                  b=Object.keys(map_obj).filter(item=>item!==key)
                  bool=true
                  break;
                }
          }
    }if (bool)break}
  
if (bool){
    for (const item of b){
      dispatch({type:"falser",value:map_obj[item]})
    }
  }else{
    dispatch({type:"all"})
  }

    
  })},[])
  



  return (
    <header className="header ud-text-md flex_ai_jc gap_1">
      <a href="#"> &lt; </a>
      <a href="#">Home </a>
      <div className="staright_line"></div>
      <a href="#" className="flex_1 title">
        Modern React with Redux [2023 Update]
      </a>



      <button onClick={()=>dispatch({type:"popup",button_name:"ratingopen"})}  className="star flex_ai_jc gap_0_5">
        <svg
          width="1000px"
          height="1000px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>star</title>
          <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>
        </svg>
        <span>Leave a Rating</span>
      </button>
      {state.ratingopen && <Rating dispatch={dispatch}/>}



      <div className="goal_progress flex_ai_jc gap_0_5">
          <span className="goal_box flex_ai_jc">


          <svg version="1.1" className="double_circle" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 131.45 131.451"  >  
  		
      <circle transform="rotate(-90 70 70)" cx="70" cy="70" r="55" fill="none" stroke="#3e4143"
	   stroke-width="7" stroke-dasharray="0" stroke-dashoffset="0" >
	</circle>

  <circle  transform="rotate(-90 70 70)"  cx="70" cy="70" r="55" fill="none" stroke="#cec0fc"
	   stroke-width="7"  stroke-dasharray="360" stroke-dashoffset={state.progresslevel}>



     </circle>
</svg>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="cup"
                className="goal_svg"
                >
                <path d="M21,4H18V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V4H3A1,1,0,0,0,2,5V8a4,4,0,0,0,4,4H7.54A6,6,0,0,0,11,13.91V16H10a3,3,0,0,0-3,3v2a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V19a3,3,0,0,0-3-3H13V13.91A6,6,0,0,0,16.46,12H18a4,4,0,0,0,4-4V5A1,1,0,0,0,21,4ZM6,10A2,2,0,0,1,4,8V6H6V8a6,6,0,0,0,.35,2Zm8,8a1,1,0,0,1,1,1v1H9V19a1,1,0,0,1,1-1ZM16,8A4,4,0,0,1,8,8V4h8Zm4,0a2,2,0,0,1-2,2h-.35A6,6,0,0,0,18,8V6h2Z"></path>
                </svg>

          </span>
          <button className="progress_box flex_ai_jc gap_0_25" onClick={()=>dispatch({type:"popup",button_name:"progressopen"})}> 
                <span>Your Progress </span>
                <span className="flex_ai_jc">
                      <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                          fill="white"
                        />
                      </svg>{" "}
                </span>    
         </button>
         {state.progressopen && <Progress_box />}
      </div>

     

      <div className="share_menu flex_ai_jc gap_0_5">
            <button  className="share_box_1 box ud-heading-sm flex_ai_jc gap_0_5" onClick={()=>dispatch({type:"popup",button_name:"shareopen"})}>
                Share
                <span className="flex_ai_jc">
                  <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                      fill="white"
                      />
                  </svg>
                </span>
            </button>

            <button className="menubox box flex_ai_jc" onClick={()=>dispatch({type:"popup",button_name:"menuopen"})}>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="29.957px"
                    height="122.88px"
                    viewBox="0 0 29.957 122.88"
                    enable-background="new 0 0 29.957 122.88"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.978,0c8.27,0,14.979,6.708,14.979,14.979c0,8.27-6.709,14.976-14.979,14.976 C6.708,29.954,0,23.249,0,14.979C0,6.708,6.708,0,14.978,0L14.978,0z M14.978,92.926c8.27,0,14.979,6.708,14.979,14.979 s-6.709,14.976-14.979,14.976C6.708,122.88,0,116.175,0,107.904S6.708,92.926,14.978,92.926L14.978,92.926z M14.978,46.463 c8.27,0,14.979,6.708,14.979,14.979s-6.709,14.978-14.979,14.978C6.708,76.419,0,69.712,0,61.441S6.708,46.463,14.978,46.463 L14.978,46.463z"
                      />
                    </g>
                  </svg>
            </button>
          {state.shareopen &&   <Share /> }
           {state.menuopen &&  <Menu /> }
      </div>
    </header>
  );
};
