import React, { useCallback, useEffect } from 'react'
import './sidebar.css'

import data from './data.json'
import {Dropdown,TV,Square,CheckedSquare,Folder} from './icon'
export default function Sidebar() {



  const helper=useCallback(()=>{
    const ele=document.querySelector(".sidebar1")
    const ele2=document.querySelector(".header")



    const r=ele2.getBoundingClientRect();
    document.documentElement.style.setProperty('--udemy-header-height',r.height+'px')
  },[])

  // window.addEventListener("resize", helper);

  useEffect(()=>{
    

    //  var ro = new ResizeObserver( entries => {
       helper()
    //  });
    
    //  ro.observe(document.body);

   
  },[])


  const toggler= (index2)=>{
    const ele= document.querySelector(`.card_checkbox._${index2}`)
    console.log("before",ele)
   ele.classList.toggle("show")
   console.log("after",ele)
  }
                          

  return (

    <div className="sidebar1">
      <div className="sidebar2">
      {
        data.map((head,index1)=>{
          return (
          <div key={index1} className={`one_card${index1}`} data-show={false}>
            <div className="card_head"  onClick={()=>{
                            document.querySelector(`.one_card${index1}`).setAttribute('data-show',
                          !JSON.parse(document.querySelector(`.one_card${index1}`).getAttribute('data-show')))
                        }
                          }>
                    <div className="card_title flex_sb_jc">
                          <h4 className="head_title">{head.header}</h4>
                          <Dropdown className="card_title_dropdown"/>
                          <span className="highlighter" data-data={head.header}>{head.header}</span>
                    </div>
                    <div className="card_head_time">{head.time}</div>
            </div>
            <ul className="card_courses">

                {head.courses.map((course,index2)=>{
                  return(

                    <li className="course">
                      <div className={`card_checkbox _${index2}`}>
                          <Square className="square"  onClick={toggler.bind(null,index2)} />
                          <CheckedSquare className="checkedsquare" onClick={toggler.bind(null,index2)} />
                      </div>
                      <div className="course_head">
                          <div className="course_title truncate-with-tooltip--ellipsis--2-jEx">{course.title}</div>
                          <div className="flex_ai space-between">
                                  <span className="course_time flex_ai gap_1" >
                                    <span className="tv"><TV /></span>
                                    <span className="time_tv">{course.time}</span>
                                  </span>
                                  {course.resourses && <span className="resource_box flex_ai_jc gap_0_5">
                                    <span><Folder /></span>
                                    <span>Resources</span>
                                    <span><Dropdown /> </span>
                                      </span>}
                          </div>
                      </div>

                    </li>


                  )

                })}
            </ul>
            <hr/>
          </div>
         



        )})

      }

      </div>
</div>
  )
}
