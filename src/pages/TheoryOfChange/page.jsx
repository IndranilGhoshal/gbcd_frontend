import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { galryimage1, galryimage10, galryimage11, galryimage2, galryimage3, galryimage4, galryimage5, galryimage6, galryimage7, galryimage8, galryimage9, galryimg1, galryimg2, galryimg3, galryimg4, galryimg5, historyimg, innerbanner, theoryofchangebanner, theoryofchangeimg } from '../../images/images';

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
            <div><img src={theoryofchangebanner} /></div>

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
            <div class="histry-img"><img src={theoryofchangeimg} /></div>
            <div class="histry-cont">
              <h3 class="fade-in"><span>GBCD</span> Theory of Change </h3>
              <p class="fade-in">Just providing material support or educational support, will not be able to
                change the
                situation, unless and until the affected community is able to recognize and analyze their
                situation, motivated to participate in the process to overcome the obstacles and
                empowered to contribute in the process of change. Thus we use a 4 steps/ aspects
                approach for all our projects and programs.</p>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr class="fade-in">
                      <th style={{width: '100px'}}>Sl No.</th>
                      <th>Steps</th>
                      <th>Outcomes</th>
                      <th>Activities</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr class="fade-in">
                      <td>1</td>
                      <td>Appreciation</td>
                      <td>Recognizing and analyzing the
                        situation by the affected
                        community</td>
                      <td>Counseling the parents , PWDs and
                        the families to make them
                        understand their situation</td>
                    </tr>
                    <tr class="fade-in">
                      <td>2</td>
                      <td>Participation</td>
                      <td>The affected community is
                        motivated to participate in the
                        process to overcome the
                        obstacles</td>
                      <td>Guidance & training to the CwDs,
                        PwDs, Parents & families to enable
                        them to participate actively and
                        affectively in the process.</td>
                    </tr>
                    <tr class="fade-in">
                      <td>3</td>
                      <td>Empowerment</td>
                      <td>The affected community is
                        empowered with adequate
                        knowledge and information on
                        overcoming obstacles and their
                        rights and entitlements</td>
                      <td>Training of Parents & families, Peer
                        & teachers and members of the
                        community on potentials of PwDs,
                        Rights & Entitlements of CwDs &
                        PwDs
                        Training of CwDs & PwDs on Skill
                        development, Self-Reliance &
                        Independence..</td>
                    </tr>
                    <tr class="fade-in">
                      <td>4</td>
                      <td>Contribution</td>
                      <td>The affected community is
                        contributing in the planning
                        process, implementation and
                        evaluation</td>
                      <td>Formation of Parents Group,
                        Community Resource group and
                        Resource teachers group and
                        Inviting , encouraging & enabling
                        them to advocate for their rights
                        and contributing to the process of
                        planning, implementation &
                        evaluation of the process</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
