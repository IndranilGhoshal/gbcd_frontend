import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { innerbanner, progmimg1, progmimg2, progmimg3, progmimg4, progmimg5, progmimg6, programmesbanner } from '../../images/images';

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
            <div><img src={programmesbanner} /></div>

          </OwlCarousel>
        </div>
      </section>
    

    <section className="programmes-sec">
        <div className="container">
            <h3 className="fade-in">Programme of Graham Bell Centre for the Deaf</h3>
            <div className="programmes-sec-inr">
                <ul>
                    <li>
                        <div className="programmes-img" id='awareness-prg'>
                            <img  className="fade-in" src={progmimg1}/>
                        </div>
                        <div className="programmes-cont">
                            <h4 className="fade-in">Awareness</h4>
                            <p className="fade-in">Even in this 21st century the children and persons with disabilities are treated as the burden of the family and deprived of their rights in our society. Especially in rural areas people are not aware of their rights & entitlements and cannot access the scientific intervention process of disability rehabilitation. Through our various programmes we try to create adequate awareness among the rural people on their potential & rights. (pictures)(Rally, village meeting, street mime)</p>
                        </div>
                    </li>
                    <li>
                        <div className="programmes-img">
                            <img className="fade-in" src={progmimg2}/></div>
                        <div className="programmes-cont">
                            <h4 className="fade-in">Early Intervention</h4>
                            <p className="fade-in">Early Intervention always lays strong foundation on the pathways of development. We organize screening camps at ICDS, Health centers etc. to identify Children with Disabilities at the earliest age. And then we provide counseling & guidance to the parents & families so that the development of these affected children are not restrained. We also arrange required aids & appliances and therapeutic support during this period.</p>
                        </div>
                    </li>
                    <li>
                        <div className="programmes-img"><img className="fade-in" src={progmimg3}/></div>
                        <div className="programmes-cont">
                            <h4 className="fade-in">Inclusive Education & Disability Rehabilitation</h4>
                            <p className="fade-in">“Inclusion is the right to belong to the mainstream.” We believe in Inclusion, thus all our identified CwDs are enrolled in ICDS or in local govt. primary schools as per their age. We also work on creating disability friendly inclusive environment in schools by providing disability friendly TLMs, Adapted Lessons, Teaching Demonstrations and adaptive training to the teachers and peers. In addition to this we provide Home based education and therapy, including occupational therapy & training support and organize special coaching classes & educational camps for the students with disabilities to strengthen the inclusive education. We also provide Institutional technical support like physiotherapy, audiological assessment & Speech therapy, Psychological assessment and counseling, Eye Care and Treatment & Medicine for Neurological & mental health problems.</p>
                        </div>
                    </li>
                    <li>
                        <div className="programmes-img"><img className="fade-in" src={progmimg4}/></div>
                        <div className="programmes-cont">
                            <h4 className="fade-in">Economic Placement</h4>
                            <p className="fade-in">Education has a little value unless and until followed by gainful employment. Thus we provide Vocational and life skill training that includes living with self & others, critical thinking & decision making and workplace behavior along with computer literacy training. We conduct resource mapping to identify employment opportunities around our near-by locality. Then we sensitize employers to ensure economic placement of PwDs.</p>
                        </div>
                    </li>
                    <li>
                        <div className="programmes-img"><img className="fade-in" src={progmimg5}/></div>
                        <div className="programmes-cont">
                            <h4 className="fade-in">Empowerment of Parents & PwDs</h4>
                            <p className="fade-in">Parents ignorance is the major obstacle in this process of development. Thus skill transfer, trainings on rights & entitlements and group formation & advocacy are the focus areas of our work with parents. Development will only be sustainable when the affected people participate meaningfully in the process of change. Thus PwDs groups are formed to empower them with information on their rights & entitlements and with advocacy skills. The community at large is also needed to be involved in this process. Thus well-wishers group & Community Resource Groups are formed at each & every block to strengthen the activities in planning as well as implementation stage.</p>
                        </div>
                    </li>
                    <li>
                        <div className="programmes-img"><img className="fade-in" src={progmimg6}/></div>
                        <div className="programmes-cont">
                            <h4 className="fade-in">“Arrangement of Aids & Appliances” immediately after “Inclusive Education & Disability Rehabilitation” </h4>
                            <p className="fade-in">Proper assessment at earliest stage followed by appropriate Aids & Appliances has a major role in developing Children with Disabilities. Thus we properly addressedthe potential of the Children with Disabilities by providing appropriate Aids & Assistive devices. Further we have also organized Mobility Aids distribution camp in collaboration with National Institute for Locomotor Disabilities (NILD), Kolkata.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    
    </>
  )
}
