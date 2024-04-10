import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Page from './page'
import { hideLoader, showLoader } from '../../services/common'
export default function Layout() {

  const navigate = useNavigate()

  const [menu, setMenu] = useState([
    // { name: "Home", path: "/", child: [] },
    {
      name: "About", path: "/about",child: [
        { name: "History", path: "/history", child: [] },
        { name: "Vision Mission & Goal", path: "/visionmissiongoal", child: [] },
        { name: "Institution Based Support", path: "/institutionbasedsupport", child: [] },
        { name: "Approach", path: "/approach", child: [] },
        { name: "Theory of Change", path: "/theoryofChange", child: [] },
        { name: "Legal Status", path: "/legalstatus", child: [] },
        { name: "Our Presence", path: "/ourpresence", child: [] },
        { name: "Organization Structure", path: "/organizationstructure", child: [] },
      ]
    },
    { name: "Programmes", path: "/programmes", child: [] },
    { name: "News & Stories", path: "/newsstories", child: [] },
    { name: "Contact Us", path: "/contactus", child: [] }
  ])

  const [url, setUrl]= useState("")

  useEffect(() => {
    setUrl(window.location.pathname)
  }, [])


  const goto = (path) => {
    showLoader()
    navigate(path)
    setUrl(path)
    setMobMenu(false)
    setMobChildMenu(false)
    setTimeout(() => {
      hideLoader()
    }, 1000);
  }

  const gotoChild = (path) => {
    setMobMenu(false)
    setMobChildMenu(false)
    navigate(path)
    navigate(0)
  }

  const [mobMenu, setMobMenu]=useState(false)

  const mobMenuOpen=()=>{
    if(mobMenu){
      setMobMenu(false)
      setMobChildMenu(false)
    }else{
      setMobMenu(true)
    }
  } 

  const [mobChildMenu, setMobChildMenu]=useState(false)

  const mobMenuChildOpen=()=>{
    if(mobChildMenu){
      setMobChildMenu(false)
    }else{
      setMobChildMenu(true)
    }
  } 

  return (
    <Page

      menu={menu}
      url={url}

      goto={goto}
      gotoChild={gotoChild}
      mobMenu={mobMenu}
      mobMenuOpen={mobMenuOpen}
      mobChildMenu={mobChildMenu}
      mobMenuChildOpen={mobMenuChildOpen}
    />
  )
}
