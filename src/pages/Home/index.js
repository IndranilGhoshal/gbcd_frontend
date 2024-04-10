import React, { useEffect } from 'react'
import Page from './page'
import { useNavigate } from 'react-router-dom'
import { hideLoader, showLoader } from '../../services/common'
export default function Home() {
  const navigate = useNavigate()

  useEffect(()=>{
    window.scrollTo(0, 0);
    setTimeout(() => {
      hideLoader()
    }, 1000);
  },[])

  const goto = (path)=>{
    showLoader()
    navigate(path)
    navigate(0)
  }

  return (
    <Page 
    goto={goto}
    />
  )
}
