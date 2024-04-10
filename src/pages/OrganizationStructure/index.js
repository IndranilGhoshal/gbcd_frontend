import React, { useEffect } from 'react'
import Page from './page'
import { hideLoader } from '../../services/common'
export default function OrganizationStructure() {
  useEffect(()=>{
    window.scrollTo(0, 0);
    setTimeout(() => {
      hideLoader()
    }, 1000);
  },[])
  return (
    <Page />
  )
}
