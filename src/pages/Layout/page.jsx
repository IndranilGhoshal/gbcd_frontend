import React from 'react'
import { Outlet } from "react-router-dom";
import { footrlogo, gbcdlogo, socialicn1, socialicn2, socialicn3, socialicn4 } from '../../images/images';

export default function page(props) {
  return (
    <>
      <section className="header-sec">
        <div className="top-nav">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="contact-no">
                  <p>Connect To Us: <strong>9933942609</strong></p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="socl-top">
                  <ul>
                    <li><a href='https://www.facebook.com/gbcd.pandua.5' target='_blank'><img src={socialicn1} /></a></li>
                    <li><a href='https://twitter.com/BellDeaf' target='_blank'><img src={socialicn2} /></a></li>
                    {/* <li><a href='' target='_blank'><img src={socialicn3} /></a></li> */}
                    <li><a href='https://www.instagram.com/gbcdpandua' target='_blank'><img src={socialicn4} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="header-sec sticky-top">
        <div className="container">
          <div className="header_iner">
            <div className="logo">
              <a onClick={() => { props.goto('/') }}>
                <img src={gbcdlogo} />
              </a>
            </div>
            <div id="cssmenu">
              <div id="menu-button" className={`${props.mobMenu ? "menu-opened" : ""}`} onClick={() => { props.mobMenuOpen() }}></div>
              {/* <button className="btn btn-donet">Donate Now</button> */}
              <ul className="nav nav-pills" style={{ display: props.mobMenu ? "block" : "" }}>
                {
                  props.menu.map((item, i) => (
                    item.child.length == 0 ?
                      <li key={i}
                        className="nav-item"
                        style={{ cursor: "pointer" }}
                        
                      >
                        <a onClick={() => { props.goto(item.path) }} className={`nav-link ${props.url == item.path ? "active" : ""}`}>{item.name}</a>
                      </li>
                      :
                      <li key={i}
                        className={`nav-item ${props.mobMenu ? "has-sub" : ""}`}
                        style={{ cursor: "pointer" }}
                        
                      >
                        <span className={`submenu-button ${props.mobChildMenu ? "submenu-opened" : ""}`} onClick={() => { props.mobMenuChildOpen() }}></span>
                        <a onClick={() => { props.goto(item.path) }} className={`nav-link ${props.url == item.path ? "active" : ""}`}>{item.name}</a>
                        <ul style={{ display: props.mobChildMenu ? "block" : "" }}>
                          {
                            item.child.map((obj, index) => (
                              <li key={index} className="nav-item" >
                                <a className="nav-link" onClick={() => { props.gotoChild(obj.path) }}>{obj.name}</a>
                              </li>
                            ))
                          }
                        </ul>
                      </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Outlet />

      <section className="footer-sec">
        <div className="foot-top-sec">
          <div className="container">
            <div className="footer-sec_inr fade-in">
              <div className="logo-foot">
                <h4>Let’s stay connected</h4>
                <div className="foot-logo">
                  <img className="fade-in" src={footrlogo} />
                  <p>Graham Bell Centre for the Deaf Tenterpar, Pandua, Hooghly Pin - 712149</p>
                </div>
                <div className="newsltr">
                  <input type="text" placeholder="Type Your Email ID Here.." />
                  <button className="btn btn-scrib">Subscribe</button>
                </div>
              </div>
              <div className="foot_mnu">
                <div className="foot_mnu_l">
                  <h4>Quick Links</h4>
                  <ul>
                    {
                      props.menu.map((item, i) => (
                        <li><a onClick={() => { props.goto(item.path) }} style={{ cursor: 'pointer' }}>{item.name}</a></li>
                      ))
                    }
                  </ul>
                </div>
                <div className="foot_mnu_l">
                  <h4>Programmes</h4>
                  <ul>
                    <li><a onClick={() => { props.goto('/programmes') }} >Awareness</a></li>
                    <li><a onClick={() => { props.goto('/programmes') }}>Early Intervention</a></li>
                    <li><a onClick={() => { props.goto('/programmes') }}>Rehabilitation</a></li>
                    <li><a onClick={() => { props.goto('/programmes') }}>Economic Placement</a></li>
                    <li><a onClick={() => { props.goto('/programmes') }}>Empowerment</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="copy-rit-socl">
          <div className="container">

            <div className="foot-socl">
              <strong>Follow Us</strong>
              <ul>
                <li><a href='https://www.facebook.com/gbcd.pandua.5' target='_blank'><img src={socialicn1} /></a></li>
                <li><a href='https://twitter.com/BellDeaf' target='_blank'><img src={socialicn2} /></a></li>
                {/* <li><a href='' target='_blank'><img src={socialicn3} /></a></li> */}
                <li><a href='https://www.instagram.com/gbcdpandua' target='_blank'><img src={socialicn4} /></a></li>
              </ul>
            </div>
            <div className="copy-rit">© GBCDPandua 2024, All Rights Reserved. Design & Developed by <a href='https://abdullahussainfreelancer.github.io/' target='_blank'>Hussain</a></div>
          </div>
        </div>
      </section>
    </>
  )
}
