import React,{useReducer} from 'react'

import Header from './modules/header_sidebar/header'
import Sidebar from './modules/header_sidebar/sidebar'

import Video from './modules/video/Video'
import './index.css'

import ContextProvider from './context'

const reducer=(state,action)=>{

  switch (action.type){
  case "popup":{
    return {...state,[action.button_name]:!state[action.button_name]}
  }
  case "all": {
    return {...state,menuopen:false,progressopen:false,shareopen:false}
  }
  case "falser":{
    return {...state,[action.value]:false}
  }
  return state
}
}
const initialstate={
  menuopen:false,shareopen:false,progressopen:false,ratingopen:false,progresslevel:250
}

export default function App() {



  const [state,dispatch]=useReducer(reducer,initialstate)
  return (

<ContextProvider.Provider value={{state,dispatch}}>
       <Header/>
       <Sidebar />
       <Video />
</ContextProvider.Provider>
  )
}
