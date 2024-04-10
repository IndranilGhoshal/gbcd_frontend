import React, { useEffect } from 'react'
import Page from './page'
import { hideLoader } from '../../services/common'
export default function ContactUs() {
  window.scrollTo(0, 0);
  useEffect(()=>{
    setTimeout(() => {
      hideLoader()
    }, 1000);
  },[])
  return (
    <Page />
  )
}
