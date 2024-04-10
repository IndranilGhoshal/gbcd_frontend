import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { galryimage1, galryimage10, galryimage11, galryimage2, galryimage3, galryimage4, galryimage5, galryimage6, galryimage7, galryimage8, galryimage9, galryimg1, galryimg2, galryimg3, galryimg4, galryimg5, historyimg, innerbanner, legalstatusbanner, legalstatusimg } from '../../images/images';

export default function page() {
  const options = {
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <>
      {/* <section class="banner-sec">
        <div class="container-fluid px-0">
          <OwlCarousel
            className="banner owl-carousel owl-theme owl-loaded owl-drag"
            items={1}
            autoplay={true}
            dots={false}
            loop={true}
            animateOut='fadeOut'
          >
            <div><img src={legalstatusbanner} /></div>

          </OwlCarousel>
        </div>
      </section> */}

      <section class="welcome-sec">
        <div class="container">
          <div class="welcome-sec-inr">
            <h3 class="fade-in">Welcome To <span>GBCD..</span></h3>
            <p className="fade-in">Graham Bell Centre for the Deaf, a rural NGO working for empowering rural marginalized people with disabilities. It operates in four remote blocks of Hooghly district, WB, India, situated nearly 75 km away from Kolkata. It works through Community Based Rehabilitation (CBR) approach for children & persons of all categories of Disabilities. Early Intervention, Inclusive Education and Economic self-reliance for the persons with disabilities are the prime focus of the organization. The organization has its community based services along with institutional clinics for assessment, measurement and management of disabilities. The organization is only one of its kinds in the entire district.</p>

          </div>
        </div>
      </section>

      <section class="history-sec">
        <div class="container-fluid px-0">
          <div class="history-sec-inner">
            <div class="histry-img"><img src={legalstatusimg} /></div>
            <div class="histry-cont">
              <h3 class="fade-in">Legal Status Of <span>GBCD..</span></h3>
              <ul>
                <li class="fade-in">The Society is registered under the West Bengal Societies Registration Act.
                  Regd. No.
                  S/70829 dated 25.06.92</li>
                <li class="fade-in">The Society is registered under the Ministry of corporate Affairs Govt. of
                  India. The Regd.
                  No - CSR00008189</li>
                <li class="fade-in">The Society is registered under the Rights to Person with Disabilities Act.
                  2016</li>
                <li class="fade-in">The Society is registered under the foreign contribution (Regulation) Act
                  1976. Regd. No.
                  146990078, dated 01.01.2022 (Renewal)</li>
                <li class="fade-in">The Society is registered under the U/S 12 A of the Income Tax Act. Dated
                  28.05.2021
                  Donation made to this organization shall qualify for Income Tax Exemption under the
                  section 80-G.</li>
                <li class="fade-in">The Society is registered under the NITIAYOG, ID – WB/2017/0155434</li>
                <li class="fade-in">The Society is registered under TAN of Income Tax Act.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="galary-sec">
        <div class="container">
          <h3 class="fade-in"><span>GBCD</span> Gallery</h3>
        </div>
        <div class="container-fluid px-0">
          <div class="galary-inner">
            <OwlCarousel
              className="owl-carousel owl-theme owl-loaded owl-drag"
              {...options}
              autoplay={true}
              dots={false}
              loop={true}
            >
              <div><img src={galryimage1} /></div>
              <div><img src={galryimage2} /></div>
              <div><img src={galryimage3} /></div>
              <div><img src={galryimage4} /></div>
              <div><img src={galryimage5} /></div>
              <div><img src={galryimage6} /></div>
              <div><img src={galryimage7} /></div>
              <div><img src={galryimage8} /></div>
              <div><img src={galryimage9} /></div>
              <div><img src={galryimage10} /></div>
              <div><img src={galryimage11} /></div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  )
}
