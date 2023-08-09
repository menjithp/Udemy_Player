import React from "react";
import "./index.css";

import { Search, Dropdown } from "./icon";

export default function index() {


    const left_button=(e)=>{


        const boiler3=document.querySelector(".boiler3")
        const magic1= document.querySelector(".left_rotate_arrow")


        const data1=document.querySelector("[data-index='1']")
        const data2=document.querySelector("[data-index='2']")
        const data3=document.querySelector("[data-index='3']")
        const data4=document.querySelector("[data-index='4']")
        const data5=document.querySelector("[data-index='5']")
        const data6=document.querySelector("[data-index='6']")
        const data7=document.querySelector("[data-index='7']")


        const data1_property=data1.getBoundingClientRect();
        const data2_property=data2.getBoundingClientRect();
        const data3_property=data3.getBoundingClientRect();
        const data4_property=data4.getBoundingClientRect();
        const data5_property=data5.getBoundingClientRect();
        const data6_property=data6.getBoundingClientRect();
        const data7_property=data7.getBoundingClientRect();

        const data1_pos=0
        const data2_pos=data1_pos+data1_property.width
        const data3_pos=data2_pos+data2_property.width
        const data4_pos=data3_pos+data3_property.width
        const data5_pos=data4_pos+data4_property.width
        const data6_pos=data5_pos+data5_property.width
        const data7_pos=data6_pos+data6_property.width



        const boiler3_property=boiler3.getBoundingClientRect();
        const magic1_property=magic1.getBoundingClientRect();


        const magic1_pos=magic1_property.x



        console.log("data_pos_1 : " ,data1_pos,
        "\ndata_pos_2 : " ,data2_pos,
        "\ndata_pos_3 : " ,data3_pos,
        "\ndata_pos_4 : " ,data4_pos,
        "\ndata_pos_5 : " ,data5_pos,
        "\ndata_pos_6 : " ,data6_pos,
        "\ndata_pos_7 : " ,data7_pos,
        "\nmagic_pos :",magic1_pos,
        "\nboiler3.x :",boiler3_property.x,
        "\nmagic1_pos-boiler3_property.x",magic1_pos-boiler3_property.x
        )

        if (+boiler3_property.x>0)return

        

        let boiler_start=Math.abs(boiler3_property.x)

        console.log("ola",boiler_start)

        if (boiler_start<data2_pos){

          console.log("1",boiler_start,magic1_pos-data1_property.x,-(boiler_start-(magic1_pos-data1_property.x)))

          boiler3.style.marginLeft=-(boiler_start-(magic1_pos-data1_property.x))+'px'

        }
        else if (boiler_start<data3_pos){

          console.log("2",boiler3_property.x,magic1_pos-data2_property.x,boiler_start-(magic1_pos-data2_property.x))

          boiler3.style.marginLeft=-(boiler_start-(magic1_pos-data2_property.x))+'px'
        }
        else if (boiler_start<data4_pos){
          console.log("3")
          boiler3.style.marginLeft=-(boiler_start-(magic1_pos-data3_property.x))+'px'
        }
        else if (boiler_start<data5_pos){
          console.log("4")
          boiler3.style.marginLeft=-(boiler_start-(magic1_pos-data4_property.x))+'px'
        }
        else if (boiler_start<data6_pos){
          console.log("5")
          boiler3.style.marginLeft=-(boiler_start-(magic1_pos-data5_property.x))+'px'
        }
        else if (boiler_start<data7_pos){
          console.log("6")
          boiler3.style.marginLeft=-(boiler_start-(magic1_pos-data6_property.x))+'px'
        }


        }



        const right_button=(e)=>{

          const boiler2=document.querySelector(".boiler2")
          const boiler2_property=boiler2.getBoundingClientRect()

          const boiler3=document.querySelector(".boiler3")
          const magic1= document.querySelector(".right_rotate_arrow")
  
  
          const data1=document.querySelector("[data-index='1']")
          const data2=document.querySelector("[data-index='2']")
          const data3=document.querySelector("[data-index='3']")
          const data4=document.querySelector("[data-index='4']")
          const data5=document.querySelector("[data-index='5']")
          const data6=document.querySelector("[data-index='6']")
          const data7=document.querySelector("[data-index='7']")
  
  
          const data1_property=data1.getBoundingClientRect();
          const data2_property=data2.getBoundingClientRect();
          const data3_property=data3.getBoundingClientRect();
          const data4_property=data4.getBoundingClientRect();
          const data5_property=data5.getBoundingClientRect();
          const data6_property=data6.getBoundingClientRect();
          const data7_property=data7.getBoundingClientRect();
  
          const data1_pos=0
          const data2_pos=data1_pos+data1_property.width
          const data3_pos=data2_pos+data2_property.width
          const data4_pos=data3_pos+data3_property.width
          const data5_pos=data4_pos+data4_property.width
          const data6_pos=data5_pos+data5_property.width
          const data7_pos=data6_pos+data6_property.width

          const boiler3_width=data7_pos+data7_property.width
  
  
  
          const boiler3_property=boiler3.getBoundingClientRect();
          const magic1_property=magic1.getBoundingClientRect();
  
  
          const magic1_pos=magic1_property.x
  
  
  
          console.log("data_pos_1 : " ,data1_pos,
          "\ndata_pos_2 : " ,data2_pos,
          "\ndata_pos_3 : " ,data3_pos,
          "\ndata_pos_4 : " ,data4_pos,
          "\ndata_pos_5 : " ,data5_pos,
          "\ndata_pos_6 : " ,data6_pos,
          "\ndata_pos_7 : " ,data7_pos,
          "\nmagic_pos :",magic1_pos,
          "\nboiler3.x :",boiler3_property.x,
          "\nmagic1_pos-boiler3_property.x",magic1_pos-boiler3_property.x
          )
  

          let boiler2_end=boiler2_property.x+boiler2_property.width
          let boiler3_end=boiler3_property.x+boiler3_width

          console.log("maaaa",boiler2_end,boiler3_end)

          if (boiler2_end>=boiler3_end)return
  
          console.log("enter")
  
          let boiler_start=Math.abs(magic1_pos-boiler3_property.x)
  
          console.log("ola",boiler_start)
  
          if (boiler_start<data2_pos){

                let individual_endposition=data1_property.x+data1_property.width
                let difference_btw_arrow=individual_endposition-magic1_pos
                let final_update_margin=boiler3_property.x-difference_btw_arrow
                console.log("1",individual_endposition,difference_btw_arrow,final_update_margin,boiler3_property.x)

  
  
            boiler3.style.marginRight=individual_endposition+'px'
  
          }
          else if (boiler_start<data3_pos){
            let individual_endposition=data2_property.x+data2_property.width
            let difference_btw_arrow=individual_endposition-magic1_pos
            let s=window.getComputedStyle(boiler3)
            let m=s.marginLeft
            m=+m.replace('px','')
            boiler3.style.marginLeft=m-difference_btw_arrow+'px'
          }
          else if (boiler_start<data4_pos){
            let individual_endposition=data3_property.x+data3_property.width
            let difference_btw_arrow=individual_endposition-magic1_pos
            let s=window.getComputedStyle(boiler3)
            let m=s.marginLeft
            m=+m.replace('px','')
            boiler3.style.marginLeft=m-difference_btw_arrow+'px'
          }
          else if (boiler_start<data5_pos){
            let individual_endposition=data4_property.x+data4_property.width
            let difference_btw_arrow=individual_endposition-magic1_pos
            let s=window.getComputedStyle(boiler3)
            let m=s.marginLeft
            m=+m.replace('px','')
            boiler3.style.marginLeft=m-difference_btw_arrow+'px'
          }
          else if (boiler_start<data6_pos){
            let individual_endposition=data5_property.x+data5_property.width
            let difference_btw_arrow=individual_endposition-magic1_pos
            let s=window.getComputedStyle(boiler3)
            let m=s.marginLeft
            m=+m.replace('px','')
            boiler3.style.marginLeft=m-difference_btw_arrow+'px'
          }
          else if (boiler_start<data7_pos){
            let individual_endposition=data6_property.x+data6_property.width
            let difference_btw_arrow=individual_endposition-magic1_pos
            let s=window.getComputedStyle(boiler3)
            let m=s.marginLeft
            m=+m.replace('px','')
            boiler3.style.marginLeft=m-difference_btw_arrow+'px'
          }
  
  
          }
      

    
  return (
    <div className= "boiler1" role="tablist" data-purpose="tab-nav-buttons">
      <div className="boiler2">
        <div className= "boiler3 lefted flex_ai" data-purpose="scroll-port" id="scroll-port--2" aria-live="off">
            <div data-index="1" >
                <div >
                <h2>
                    <button type="button" id="tabs--1-tab-1" aria-selected="false" role="tab" tabindex="-1">
                     <span>Course content</span>
                    </button>
              </h2>
            </div>
          </div>
          <div data-index="2" >
            <div >
              <h2>
                <button type="button" id="tabs--1-tab-2" aria-selected="true" role="tab" tabindex="0">
                  <span>Overview</span>
                </button>
              </h2>
            </div>
          </div>
          <div data-index="3">
            <div >
              <h2>
                <button type="button" id="tabs--1-tab-3" aria-selected="false" role="tab" tabindex="-1">
                    <span aria-hidden="true">Q&amp;A</span>
                </button>
              </h2>
            </div>
          </div>
          <div data-index="4" >
            <div >
              <h2>
                <button type="button" id="tabs--1-tab-4" aria-selected="false" role="tab" tabindex="-1" >
                  <span>Notes</span>
                </button>
              </h2>
            </div>
          </div>
          <div data-index="5" >
            <div >
              <h2>
                <button type="button" id="tabs--1-tab-5" aria-selected="false" role="tab" tabindex="-1">
                  <span>Announcements</span>
                </button>
              </h2>
            </div>
          </div>
          <div data-index="6" >
            <div >
              <h2>
                <button type="button" id="tabs--1-tab-6" aria-selected="false" role="tab" tabindex="-1">
                  <span>Reviews</span>
                </button>
              </h2>
            </div>
          </div>
          <div data-index="7" >
            <div >
              <h2>
                <button type="button" id="tabs--1-tab-7" aria-selected="false" role="tab" tabindex="-1">
                  <span>Learning tools</span>
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <button onClick={left_button} type="button" className="magic1" data-pager-type="prev" disabled="" tabindex="-1">
    <Dropdown className="left_rotate_arrow"/>
</button>
<button onClick={right_button} type="button" className="magic2" data-pager-type="next">
    <Dropdown className="right_rotate_arrow" />
</button>
    </div>
  );
}
