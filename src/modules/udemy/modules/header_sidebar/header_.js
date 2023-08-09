import React, { useEffect, useState } from "react";
import './header_.css'

function Progress_box() {
  return (
    <div className="progress_box1">
      <b>1 of 433 complete.</b>
      <br />
      <p>Finish course to get your certificate</p>
    </div>
  );
}



function Share(){

    return (
        <ul className="share_box2">
          <li>
              <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
                    Recommend
              </button>
          </li>
          <li>
              <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/></svg>
                    Share to MS Teams
                </button>
          </li>
        </ul>
      );

}

function Menu(){

    return(<div className="menubox_2">

    <ul>
        <li>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
                Add to learning path
            </button>
        </li>
        <li>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/></svg>
                Favourite this course
            </button>
        </li>
        <li>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/></svg>
                Archieve this course
            </button>
        </li>
    </ul>
  
    <hr/>
    <ul>
        <li>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/></svg>
                Edit your rating
            </button>
        </li>
        <li>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/></svg>
                New announcement emails
            </button>
        </li>
    </ul>
    <hr/>
    <ul>
        <li>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/></svg>
                Unenroll from course
            </button>
        </li>

  </ul>
  </div>)

}


function helper(current_x){

    const star_box=document.querySelector('.header .star_box')

    const feedback=["Awful ,not what I Expected",
    "Awful / Poor","Poor, pretty disappointed",
    "Poor /Average","Average,could be better",
    "Average / Good" ,"Good, what I Expected",
    "Good / Amazing","Amazing above Expectations!"
]
    const feedback_ele=document.querySelector('.header .rating_test_2')

    const star1=document.querySelector('.star_rating_tag_1')
    const star2=document.querySelector('.star_rating_tag_2')
    const star3=document.querySelector('.star_rating_tag_3')
    const star4=document.querySelector('.star_rating_tag_4')
    const star5=document.querySelector('.star_rating_tag_5')


            let rect = star_box.getBoundingClientRect();
            let starbox_start=rect.left
            let starbox_end=starbox_start+rect.width

            let divided_Area=(starbox_end-starbox_start)/5

            let star_1_end=starbox_start+divided_Area
            let star_2_end1=star_1_end+(divided_Area/2)
            let star_2_end2=star_2_end1+(divided_Area/2)
            let star_3_end1=star_2_end2+(divided_Area/2)
            let star_3_end2=star_3_end1+(divided_Area/2)
            let star_4_end1=star_3_end2+(divided_Area/2)
            let star_4_end2=star_4_end1+(divided_Area/2)
            let star_5_end1=star_4_end2+(divided_Area/2)
            let star_5_end2=star_5_end1+(divided_Area/2)

            if (current_x<=star_1_end && current_x>starbox_start+20){
                star1.setAttribute('offset','100%')
                star2.setAttribute('offset','0%')
                star3.setAttribute('offset','0%')
                star4.setAttribute('offset','0%')
                star5.setAttribute('offset','0%')
                feedback_ele.innerText=feedback[0]
                return 1;
            }
            else if (current_x<starbox_start+20){
                star1.setAttribute('offset','0%') 
                feedback_ele.innerText="Select Ratings"
                return 0
            }

            if (current_x>star_1_end && current_x<=star_2_end1 ){
                star1.setAttribute('offset','100%')
                star2.setAttribute('offset','50%')
                star3.setAttribute('offset','0%')
                star4.setAttribute('offset','0%')
                star5.setAttribute('offset','0%')
                feedback_ele.innerText=feedback[1]
                return 1.5
            }
            if (current_x>star_2_end1 && current_x<=star_2_end2 ){
                star1.setAttribute('offset','100%')
                star2.setAttribute('offset','100%')
                star3.setAttribute('offset','0%')
                star4.setAttribute('offset','0%')
                star5.setAttribute('offset','0%')
                feedback_ele.innerText=feedback[2]
                return 2
            }

            if (current_x>star_2_end2 && current_x<=star_3_end1 ){
                star1.setAttribute('offset','100%')
                star2.setAttribute('offset','100%')
                star3.setAttribute('offset','50%')
                star4.setAttribute('offset','0%')
                star5.setAttribute('offset','0%')
                feedback_ele.innerText=feedback[3]
                return 2.5
            }

            if (current_x>star_3_end1 && current_x<=star_3_end2 ){
                star1.setAttribute('offset','100%')
                star2.setAttribute('offset','100%')
                star3.setAttribute('offset','100%')
                star4.setAttribute('offset','0%')
                star5.setAttribute('offset','0%')
                feedback_ele.innerText=feedback[4]
                return 3
            }

            if (current_x>star_3_end2 && current_x<=star_4_end1 ){
                star1.setAttribute('offset','100%')
                star2.setAttribute('offset','100%')
                star3.setAttribute('offset','100%')
                star4.setAttribute('offset','50%')
                star5.setAttribute('offset','0%')
                feedback_ele.innerText=feedback[5]
                return 3.5
            }
            if (current_x>star_4_end1 && current_x<=star_4_end2 ){
                star1.setAttribute('offset','100%')
                star2.setAttribute('offset','100%')
                star3.setAttribute('offset','100%')
                star4.setAttribute('offset','100%')
                star5.setAttribute('offset','0%')
                feedback_ele.innerText=feedback[6]
                return 4
            }

            if (current_x>star_4_end2 && current_x<=star_5_end1 ){
                star1.setAttribute('offset','100%')
                star2.setAttribute('offset','100%')
                star3.setAttribute('offset','100%')
                star4.setAttribute('offset','100%')
                star5.setAttribute('offset','50%')
                feedback_ele.innerText=feedback[7]
                return 4.5
            }

            if (current_x>star_5_end1 && current_x<=star_5_end2 ){
                star1.setAttribute('offset','100%')
                star2.setAttribute('offset','100%')
                star3.setAttribute('offset','100%')
                star4.setAttribute('offset','100%')
                star5.setAttribute('offset','100%')
                feedback_ele.innerText=feedback[8]
                return 5
            }

}

function Rating({dispatch}){

    const[state,setState]=useState(false)

    

    useEffect(()=>{

        let clicked_event;
        let clicked_place;

        const feedback_ele=document.querySelector('.header .rating_test_2')

        const star_box=document.querySelector('.header .star_box')
        const rating_box_1=document.querySelector('.header .rating_box_1')
        const rating_box_2=document.querySelector('.header .rating_box_2')

        const star1=document.querySelector('.star_rating_tag_1')
        const star2=document.querySelector('.star_rating_tag_2')
        const star3=document.querySelector('.star_rating_tag_3')
        const star4=document.querySelector('.star_rating_tag_4')
        const star5=document.querySelector('.star_rating_tag_5')


        rating_box_1.onclick=(e)=>{

            if (rating_box_2.contains(e.target)){
                return

            }


          
            dispatch({type:"falser",value:"ratingopen"})
        }

        star_box.onmouseleave=(e)=>{
            if (clicked_event){
                helper(clicked_place)
                return 
            }
        
            star1.setAttribute('offset','0%')
            star2.setAttribute('offset','0%')
            star3.setAttribute('offset','0%')
            star4.setAttribute('offset','0%')
            star5.setAttribute('offset','0%')
            feedback_ele.innerText="Select Rating"

        }


        star_box.onmouseover=(e)=>{
            helper(e.x);
        }
        star_box.onclick=(e)=>{
            clicked_event=true
            clicked_place=e.x
            helper(e.x);
            document.querySelector(".star_box").setAttribute("data-commentbox",true)
            setState(true)


        }

        
    },[])
   





    return (

<div className="rating_box_1 flex_ai_jc">
        <div className="rating_box_2">
                    <div className="menu_containers">
                       {state ? <button onClick={()=>{
                            setState(false)
                            document.querySelector(".star_box").setAttribute("data-commentbox",false)
                        }}><b>Back</b></button>:<div></div>}
                        <button onClick={()=>dispatch({type:"popup",button_name:"ratingopen"})}><b>X</b></button>
                    </div>
                    <div className="flex_ai_jc ratingmodel">
                        <span className="rating_test_1"><b>How would you rate this course?</b></span>
                        <b><span className="rating_test_2">Select Rating</span></b>
                    </div>

                    <div className="star_box flex_ai_jc" data-commentbox="false" >
                        <span>
                        <svg  className="star_rating_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 32 32">
            <defs>
            <linearGradient id="grad1">
                <stop className ="star_rating_tag_1" offset="0%" stop-color="#e59819"/>
                <stop offset="0%" stop-color="white"/>
            </linearGradient>
            </defs>
            <path fill="url(#grad1)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
        l11.547-1.2L16.026,0.6L20.388,10.918z"/>
        </svg>
                        </span>
                        <span>
                        <svg className="star_rating_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 32 32">
            <defs>
            <linearGradient id="grad2">
                <stop className ="star_rating_tag_2" offset="0%" stop-color="#e59819"/>
                <stop  offset="0%" stop-color="white"/>
            </linearGradient>
            </defs>
            <path fill="url(#grad2)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
        l11.547-1.2L16.026,0.6L20.388,10.918z"/>
        </svg>
                        </span>

                        <span>
                        <svg className="star_rating_3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 32 32">
            <defs>
            <linearGradient id="grad3">
                <stop className ="star_rating_tag_3" offset="0%" stop-color="#e59819"/>
                <stop offset="0%" stop-color="white"/>
            </linearGradient>
            </defs>
            <path fill="url(#grad3)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
        l11.547-1.2L16.026,0.6L20.388,10.918z"/>
        </svg>
                        </span>

                        <span>
                        <svg className="star_rating_4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 32 32">
            <defs>
            <linearGradient id="grad4">
                <stop className ="star_rating_tag_4" offset="0%" stop-color="#e59819"/>
                <stop offset="0%" stop-color="white"/>
            </linearGradient>
            </defs>
            <path fill="url(#grad4)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
        l11.547-1.2L16.026,0.6L20.388,10.918z"/>
        </svg>
                        </span>

                        <span>
                        <svg className="star_rating_5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 32 32">
            <defs>
            <linearGradient id="grad5">
                <stop className ="star_rating_tag_5" offset="0%" stop-color="#e59819"/>
                <stop offset="0%" stop-color="white"/>
            </linearGradient>
            </defs>
            <path fill="url(#grad5)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
        l11.547-1.2L16.026,0.6L20.388,10.918z"/>
        </svg>
                        </span>

                    </div>
                {state &&
                     <div className="comment_box">
                     <textarea rows="5" className="star_textarea" aria-invalid="false" placeholder="Tell us about your personal experience taking this course.Was it a good match for you?" />
                     <button className="star_comment_button" onClick={()=>dispatch({type:"popup",button_name:"ratingopen"})}>Save and Continue</button>
                 </div>
                }
                   






        </div>
</div>

    )







}
export  {
    Progress_box,Share,Menu,Rating
}