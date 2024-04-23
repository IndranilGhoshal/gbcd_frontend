import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import Fancybox from './fancybox.js';
import { galryimage1, galryimage10, galryimage11, galryimage2, galryimage3, galryimage4, galryimage5, galryimage6, galryimage7, galryimage8, galryimage9, galryimg1, galryimg2, galryimg3, galryimg4, galryimg5, historyimg, innerbanner, ourvalueimg, ourvalueimg1, ourvalueimg2, ourvalueimg3, ourvalueimg4, ourvalueimg5, ourvalueimg6, ourvaluesbanner } from '../../images/images';

export default function page() {
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
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
            <div><img src={ourvaluesbanner} /></div>

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

      <section class="inst-base-sec">
        <div class="container">
          <div class="inst-base-inner">
            <div class="histry-cont">
              <h3 class="fade-in">Institution Based Support <span>GBCD..</span></h3>
              <p>Our Institution Based service consist of Physiotherapy, Audiological assessment & Speech Therapy, Occupational Therapy, Psychological Assessment, Sensory Integration Therapy & Eye check up& Cataract Surgery</p>
            </div>
            <Fancybox>
            <div className="row news-media-sec">
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={ourvalueimg1}>
                    <img className='w-100' src={ourvalueimg1} />
                    <strong>Audiological Assessment</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                <a data-fancybox="gallery" href={ourvalueimg2}>
                    <img className='w-100' src={ourvalueimg2} />
                    <strong>Eye Check up</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={ourvalueimg3}>
                    <img className='w-100' src={ourvalueimg3} />
                    <strong>Medicine Support</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={ourvalueimg4}>
                    <img className='w-100' src={ourvalueimg4} />
                    <strong>Physiotherapy</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                <a data-fancybox="gallery" href={ourvalueimg5}>
                    <img className='w-100' src={ourvalueimg5} />
                    <strong>Speech Therapy</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={ourvalueimg6}>
                    <img className='w-100' src={ourvalueimg6} />
                    <strong>Treatment of Epilepsy & Nerological Disorders</strong>
                  </a>
                </div>
              </div>

            </div>
          </Fancybox>
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
