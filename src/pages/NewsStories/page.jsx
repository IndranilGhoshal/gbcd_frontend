import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import Fancybox from "./fancybox.js";
import { acknowimg1, acknowimgnews1, acknowimgnews2, acknowimgnews3, acknowimgnews4, galryimage1, galryimage10, galryimage11, galryimage12, galryimage2, galryimage3, galryimage4, galryimage5, galryimage6, galryimage7, galryimage8, galryimage9, galryimagel1, galryimagel10, galryimagel11, galryimagel12, galryimagel2, galryimagel3, galryimagel4, galryimagel5, galryimagel6, galryimagel7, galryimagel8, galryimagel9, galryimg1, galryimg2, galryimg3, galryimg4, galryimg5, galryvdo1, galryvdo2, galryvdo3, innerbanner, newsbanner } from '../../images/images';

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
              items: 3,
          },
      },
  };



  return (
    <>

      {/* <section className="banner-sec">
        <div className="container-fluid px-0">
          <OwlCarousel
            className="banner owl-carousel owl-theme owl-loaded owl-drag"
            items={1}
            autoplay={true}
            dots={false}
            loop={true}
            animateOut='fadeOut'
          >
            <div><img src={newsbanner} /></div>

          </OwlCarousel>
        </div>
      </section> */}

      <section className="welcome-sec">
        <div className="container">
          <div className="welcome-sec-inr">
            <h3 className="fade-in"><span>GBCD's </span> News & Media</h3>
            <p className="fade-in">You will get an amazing experience when you visit us that no photo can match. However, the hectic life, distance and many such reasons do not present most of us with opportunities for same. Therefore, we have these exclusive images made available for you! The gallery has images that give you a glimpse of various aspects of the organization.</p>
          </div>
        </div>
      </section>

      <section className="news-media-sec">
        <div className="container">
          <Fancybox>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel1}>
                    <img src={galryimage1} />
                    <strong>Computer Training for Deaf Students using Sign Language</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                <a data-fancybox="gallery" href={galryimagel2}>
                    <img src={galryimage2} />
                    <strong>Cultural Programme during the celebration of International Day for Person with Disabilities</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel2}>
                    <img src={galryimage3} />
                    <strong>Deaf Students attending Special Coaching Classes.</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel4}>
                    <img src={galryimage4} />
                    <strong>Mime performance by deaf youngs of NIRBAK group.</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                <a data-fancybox="gallery" href={galryimagel5}>
                    <img src={galryimage5} />
                    <strong>New cloth distribution on the occassion of Durga Puja.</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel6}>
                    <img src={galryimage6} />
                    <strong>Short stay Camp for children with Cerebral Palsy</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel7}>
                    <img src={galryimage7} />
                    <strong>Short stay Camp for children with Hearing Impaired</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel8}>
                    <img src={galryimage8} />
                    <strong>Short stay Camp for children with Intellectual Disabilities</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel9}>
                    <img src={galryimage9} />
                    <strong>Walk during Deaf week celebration</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel10}>
                    <img src={galryimage10} />
                    <strong>Wipro Spirit of Run</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel11}>
                    <img src={galryimage11} />
                    <strong>Concentration exercise</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel12}>
                    <img src={galryimage12} />
                    <strong>Special Class for Autistic Children</strong>
                  </a>
                </div>
              </div>

            </div>
          </Fancybox>
        </div>
      </section>

      <section className="accreditation-sec pb-5">
      <div className="welcome-sec-inr">
      <h3 className="fade-in"><span>GBCD </span>in News</h3>
      </div>
        <div className="container">
          <OwlCarousel
            className="owl-carousel owl-theme owl-loaded owl-drag"
            items={3}
            autoplay={true}
            dots={false}
            loop={true}
            margin={14}
            {...options}


          >
            <div className='heig'><img src={acknowimgnews1} /></div>
            <div className='heig'><img src={acknowimgnews2} /></div>
            <div className='heig'><img src={acknowimgnews3} /></div>
            <div className='heig'><img src={acknowimgnews4} /></div>

          </OwlCarousel>
        </div>
      </section>

      <section className="accreditation-sec pb-4">
        <h3>Accreditation</h3>
        <div className="container">
            <div className='accreditation-sec-inr'><img src={acknowimg1} /></div>
        </div>
      </section>

    </>
  )
}
