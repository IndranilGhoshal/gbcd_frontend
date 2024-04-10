import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import Fancybox from "./fancybox.js";
import { acknowimg1, galryimage1, galryimage2, galryimage3, galryimage4, galryimage5, galryimagel1, galryimagel2, galryimagel3, galryimagel4, galryimagel5, galryimg1, galryimg2, galryimg3, galryimg4, galryimg5, galryvdo1, galryvdo2, galryvdo3, innerbanner, newsbanner } from '../../images/images';

export default function page() {
  return (
    <>

      <section className="banner-sec">
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
      </section>

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
              <div className="col-md-3">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel1}>
                    <img src={galryimage1} />
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="thumbnail">
                  <a data-fancybox="gallery" data-preload="false" href="https://youtu.be/KNa798t1g08?si=U2WkUufxTKhaSqYc&amp;autoplay=0">
                    <img src={galryvdo1} />
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel2}>
                    <img src={galryimage2} />
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel3}>
                    <img src={galryimage3} />
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="thumbnail">
                  <a data-fancybox="gallery" data-preload="false" href="https://youtu.be/KNa798t1g08?si=U2WkUufxTKhaSqYc&amp;autoplay=0">
                    <img src={galryvdo2} />
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel4}>
                    <img src={galryimage4} />
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="thumbnail">
                  <a data-fancybox="gallery" href={galryimagel5}>
                    <img src={galryimage5} />
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="thumbnail">
                  <a data-fancybox="gallery" data-preload="false" href="https://youtu.be/wuPpCFXzCoM?si=2wd4uHL15M2DLhbI&amp;autoplay=0">
                    <img src={galryvdo3} />
                  </a>
                </div>
              </div>

            </div>
          </Fancybox>
        </div>
      </section>

      <section className="accreditation-sec pb-5">
        <h3>Accreditation</h3>
        <div className="container">
          <OwlCarousel
            className="owl-carousel owl-theme owl-loaded owl-drag"
            items={1}
            autoplay={true}
            dots={false}
            loop={true}
            margin={14}
          >
            <div className='w-50 mx-auto'><img src={acknowimg1} /></div>

          </OwlCarousel>
        </div>
      </section>

    </>
  )
}
