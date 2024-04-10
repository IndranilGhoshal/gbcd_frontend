import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { galryimage1, galryimage10, galryimage11, galryimage2, galryimage3, galryimage4, galryimage5, galryimage6, galryimage7, galryimage8, galryimage9, galryimg1, galryimg2, galryimg3, galryimg4, galryimg5, historybanner, historyimg, innerbanner } from '../../images/images'

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
            <div><img src={historybanner} /></div>

          </OwlCarousel>
        </div>
      </section> */}

      <section class="welcome-sec">
        <div class="container">
          <div class="welcome-sec-inr">
            <h3 class="fade-in">Welcome To <span>GBCD..</span></h3>
            <p class="fade-in">Graham Bell Centre for the Deaf, a rural NGO working for empowering rural marginalized people with disabilities. It operates in four remote blocks of Hooghly district, WB, India, situated nearly 75 km away from Kolkata. It works through Community Based Rehabilitation (CBR) approach for children & persons of all categories of Disabilities. Early Intervention, Inclusive Education and Economic self-reliance for the persons with disabilities are the prime focus of the organization. The organization has its community based services along with institutional clinics for assessment, measurement and management of disabilities. The organization is only one of its kinds in the entire district.</p>
          </div>
        </div>
      </section>

      <section class="history-sec">
        <div class="container-fluid px-0">
          <div class="history-sec-inner">
            <div class="histry-img"><img src={historyimg} /></div>
            <div class="histry-cont">
              <h3 class="fade-in">History Of <span>GBCD..</span></h3>
              <p class="fade-in">Graham Bell Centre for the Deaf (GBCD) was founded in 1991 at Pandua with an objective to provide deaf young adults (girls) with skill training to enable them to earn their livelihood to make them confident, self-reliant and contributing members of the society. It was the only one of its kind in the entire Pandua block of Hooghly District. Within a couple of months, to address the emerging need, the organization started expanding its activities from vocational training to need based functional education for deaf children of the locality. Gradually the activities of the organization reached out from one panchayet to five panchayets of the block, catering the needs for therapy, education and rehabilitation of the children and persons with all categories of disabilities. The journey that was started through Centre Based approach, then turned into the Community Based Rehabilitation Approach by ensuring the use of local resources and participation of the families and the community to the maximum extent.</p>
              <p class="fade-in">At present the organization is operating in major four blocks (Pandua, Polba-Dadpur, Balagarh and Dhaniakhali) of Hooghly district with an objective to cater the four basic needs: <strong>Social Inclusion, Therapy & Training, Inclusive Education and Economic Rehabilitation</strong> of the children and persons with disabilities.</p>
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
