import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { approachbanner, approachimg, galryimage1, galryimage10, galryimage11, galryimage2, galryimage3, galryimage4, galryimage5, galryimage6, galryimage7, galryimage8, galryimage9, galryimg1, galryimg2, galryimg3, galryimg4, galryimg5, historyimg, innerbanner } from '../../images/images';

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
      <section class="banner-sec">
        <div class="container-fluid px-0">
          <OwlCarousel
            className="banner owl-carousel owl-theme owl-loaded owl-drag"
            items={1}
            autoplay={true}
            dots={false}
            loop={true}
            animateOut='fadeOut'
          >
            <div><img src={approachbanner} /></div>

          </OwlCarousel>
        </div>
      </section>

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
            <div class="histry-img"><img src={approachimg} /></div>
            <div class="histry-cont">
              <h3 class="fade-in">Value & Approach Of <span>GBCD..</span></h3>
              <ul className='values'>
                <li class="fade-in">Each & every person irrespective of their abilities can analyse their situation, plan for their
                  future & can have control over their lives.</li>
                <li class="fade-in">Empowering people is ensuring sustainable developmen.</li>
                <li class="fade-in">PWDs can participate fully in the change making process of self, family & community.</li>
              </ul>
              <p class="fade-in">We work through Community Based Rehabilitation (CBR) approach by using
                the local resources and ensure participation of the community to the maximum extant. We
                usually reach to the community through panchayets, ICDS, Primary schools and local clubs
                to identify children with disabilities (CwDs) and their families. We provide home based
                support through counseling, therapy & training and transfer our skills to the parents to
                enable them to support their children at home. We also share updated information to the
                parents on rights and entitlements of CwDs & PwDs.</p>
            </div></div>
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
