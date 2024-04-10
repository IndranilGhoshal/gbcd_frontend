import React, { useState } from 'react'
import Slider from "react-slick";
import Modal from 'react-bootstrap/Modal';
import OwlCarousel from 'react-owl-carousel';
import { bannerimage1, abticon1, catgimg1, abticon2, abticon3, catgimg2, abticon4, catgimg3, medianewsicon1, videoicn, partnrlogo1, partnrlogo2, partnrlogo3, partnrlogo4, partnrlogo5, partnrlogo6, partnrlogo7, partnrlogo8, ttmicn, medianewsimg1, medianewsimg2, medianewsimg3, videoimg, bannerimage2, bannerimage3, bannerimage4, bannerimage5, catgimage1, catgimage2, catgimage3, video, medianewsimg4, medianewsimg5, medianewsimg6 } from '../../images/images'

export default function Page(props) {
    const settings = {
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        navigator: false,
        arrows: false,
        nav: false,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]
    };

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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* banner-sec */}
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
                        <div>
                            <div className="ban-cont">
                                <strong>Early Identification</strong>
                                {/* <p>for mainstreaming & empowering children
                                    <br />
                                    & persons with Disabilities</p> */}
                            </div>
                            <img src={bannerimage1} />
                        </div>
                        <div>
                            <div className="ban-cont">
                                <strong>Inclusive Education</strong>
                                {/* <p>for mainstreaming & empowering children
                                    <br />
                                    & persons with Disabilities</p> */}
                            </div>
                            <img src={bannerimage2} />
                        </div>
                        <div>
                            <div className="ban-cont">
                                <strong>Placement </strong>
                                {/* <p>for mainstreaming & empowering children
                                    <br />
                                    & persons with Disabilities</p> */}
                            </div>
                            <img src={bannerimage3} />
                        </div>
                        <div>
                            <div className="ban-cont">
                                <strong>Community Based Rehabilitation</strong>
                                {/* <p>for mainstreaming & empowering children
                                    <br />
                                    & persons with Disabilities</p> */}
                            </div>
                            <img src={bannerimage4} />
                        </div>
                        {/* <div>
                            <div className="ban-cont">
                                <strong>A rural NGO </strong>
                                <p>for mainstreaming & empowering children
                                    <br />
                                    & persons with Disabilities</p>
                            </div>
                            <img src={bannerimage5} />
                        </div> */}
                    </OwlCarousel>
                </div>
            </section >

            {/* catgry-sec */}
            <section className="catgry-sec">
                <div className="container">
                    <div className="catgry-sec-inr">
                        <div className="catgry-sec-DIV abouts">
                            <span
                                className="spn-arro"
                                style={{ cursor: 'pointer' }}
                                onClick={() => { props.goto('/about') }}
                            ></span>
                            <p>About</p>
                            <strong>GBCD</strong>
                        </div>
                        <div className="catgry-sec-DIV purpos">
                            <span><img src={abticon1} /></span>
                            <h3><strong>Purpose</strong> of our Organization</h3>
                            <p>Our Vision is to create a non-threatening and non-discriminating..</p>
                            <span
                                className="spn-arro"
                                style={{ cursor: 'pointer' }}
                                onClick={() => { props.goto('/purpose') }}
                            ></span>
                        </div>
                        <div className="catgry-sec-DIV img-Div"><img src={catgimage1} /></div>
                        <div className="catgry-sec-DIV purpos">
                            <span><img src={abticon2} /></span>
                            <h3><strong>Values</strong> of gbcd Pandua</h3>
                            <p>Each & every person irrespective of their abilities can analyse..</p>
                            <span
                                className="spn-arro"
                                style={{ cursor: 'pointer' }}
                                onClick={() => { props.goto('/ourvalues') }}
                            ></span>
                        </div>
                        <div className="catgry-sec-DIV purpos">
                            <span><img src={abticon3} /></span>
                            <h3><strong>Approach</strong> We work through CBR</h3>
                            <p>We work through Community Based Rehabilitation (CBR) approach..</p>
                            <span
                                className="spn-arro"
                                style={{ cursor: 'pointer' }}
                                onClick={() => { props.goto('/approach') }}
                            ></span>
                        </div>
                        <div className="catgry-sec-DIV img-Div"><img src={catgimage2} /></div>
                        <div className="catgry-sec-DIV purpos">
                            <span><img src={abticon4} /></span>
                            <h3><strong>Theory</strong> of the Change</h3>
                            <p>Just providing material support or educational support, will not be..</p>
                            <span
                                className="spn-arro"
                                style={{ cursor: 'pointer' }}
                                onClick={() => { props.goto('/theoryofchange') }}
                            ></span>
                        </div>
                        <div className="catgry-sec-DIV img-Div"><img src={catgimage3} /></div>
                    </div>
                </div>
            </section>

            {/* welcome-sec */}
            <section className="welcome-sec">
                <div className="container">
                    <div className="welcome-sec-inr">
                        <h3>Welcome To <span>GBCD..</span></h3>
                        <p>Graham Bell Centre for the Deaf, a rural NGO working for empowering rural marginalized people with disabilities. It operates in four remote blocks of Hooghly district, WB, India, situated nearly 75 km away from Kolkata. It works through Community Based Rehabilitation (CBR) approach for children & persons of all categories of Disabilities. Early Intervention, Inclusive Education and Economic self-reliance for the persons with disabilities are the prime focus of the organization. The organization has its community based services along with institutional clinics for assessment, measurement and management of disabilities. The organization is only one of its kinds in the entire district.</p>
                        <button className="btn btn-redmor" onClick={() => { props.goto('/about') }}>Read More</button>
                    </div>
                </div>
            </section>

            {/* media-news-sec */}
            <section className="media-news-sec">
                <div className="container-fluid px-0">
                    <div className="media-news-inner">
                        <div className="media-news-left">
                            <span><img src={medianewsicon1} /></span>
                            <h4>Community Based <strong>Rehabilitation Approach</strong></h4>
                            {/* <button className="btn btn-vwall">View All News</button> */}
                        </div>
                        <OwlCarousel
                            id="media_caro"
                            className=" owl-theme owl-loaded owl-drag"
                            autoplay={false}
                            dots={false}
                            loop={true}
                            nav={true}
                            {...options}
                        >
                            <div className="media-news-DIV">
                                <img src={medianewsimg1} />
                                <strong>Home Based educational support to deaf children using Indian Sign Language</strong>
                            </div>
                            <div className="media-news-DIV">
                                <img src={medianewsimg2} />
                                <strong>Home Based training on Activity of Daily Living</strong>
                            </div>
                            <div className="media-news-DIV">
                                <img src={medianewsimg3} />
                                <strong>Community ISL Programme</strong>
                            </div>
                            <div className="media-news-DIV">
                                <img src={medianewsimg4} />
                                <strong>Community Awareness Programme to ensure social inclusion of Children with Disabilities</strong>
                            </div>
                            <div className="media-news-DIV">
                                <img src={medianewsimg5} />
                                <strong>ICDS Awareness Programme on Prevention of Disability for Expected Mothers</strong>
                            </div>
                            <div className="media-news-DIV">
                                <img src={medianewsimg6} />
                                <strong>Demistifying Rehabilitation Process through skill transferring to parents</strong>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>

            {/* video-sec */}
            <section className="video-sec">
                <div className="container-fluid px-0">
                    <div className="video-sec-content">
                        <div className="tile" id="facebook_1">
                            <div className="tile__media">
                            <a id="play-video" className="video-play-button tile__img" src={videoicn} alt="" onClick={() => { handleShow() }}><span></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="video-sec-img"><img src={videoimg} /></div>
                </div>
            </section>

            {/* partnr-sec */}
            <section className="partnr-sec">
                <div className="container">
                    <div className="partnr-sec-inr">
                        <div className="slider">
                            <h3>Our Partners</h3>
                            <Slider {...settings}>
                                <div className="slide"><img src={partnrlogo1} alt="" /></div>
                                <div className="slide"><img src={partnrlogo2} alt="" /></div>
                                <div className="slide"><img src={partnrlogo3} alt="" /></div>
                                <div className="slide"><img src={partnrlogo4} alt="" /></div>
                                <div className="slide"><img src={partnrlogo5} alt="" /></div>
                                <div className="slide"><img src={partnrlogo6} alt="" /></div>
                                <div className="slide"><img src={partnrlogo7} alt="" /></div>
                                <div className="slide"><img src={partnrlogo8} alt="" /></div>
                                <div className="slide"><img src={partnrlogo3} alt="" /></div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            {/* tstimo-sec */}
            <section className="tstimo-sec">
                <div className="tstimo-sec-top">
                    <div className="container">
                        <div className="tstimo-sec-txt">
                            <h4>A Rural NGO</h4>
                            <strong>For mainstreaming & empowering children & persons
                                with disabilities</strong>
                            {/* <button className="btn btn-redmor">Donate Now</button> */}
                        </div>
                    </div>
                </div>
                <div className="tstimo-sec-blo">
                    <div className="container">
                        <div className="tstimo-sec-blo-left">
                            <h3><span>Success</span> Stories</h3>
                            <OwlCarousel
                                id="tstimo_caro"
                                className="owl-theme owl-loaded owl-drag"
                                items={1}
                                autoplay={false}
                                dots={false}
                                nav={true}
                            >
                                <div className="tstimo-Div">
                                    <span className="tst-icn"><img src={ttmicn} /></span>
                                    <p>While working in the field of disability for last 34 years I have learnt lot of things. It gives me immense happiness when I find that all possible Assessments and Therapies, Training and Counselling & guidance etc. are available for children with disabilities under one roof at such a remote area like ours. We have observed the agony of epileptic children and their families so we have started Mental Health clinic and ensure proper treatment & medicine for them. When I look back, I find no difference in our approach; even today it is the same - where the need of the community is utmost priority and ensuring sustainable change by utilizing local resources & community participation.</p>
                                    <article>
                                        <strong>SK Mansur Ali</strong>
                                        <span>Director</span>
                                    </article>
                                </div>
                                <div className="tstimo-Div">
                                    <span className="tst-icn"><img src={ttmicn} /></span>
                                    <p>We work for the rural poor, for whom, not disability but earning two meals a day is the first priority. Please come forward and join us. Our effort and your support can make the change sustainable.</p>
                                    <article>
                                    <strong>SK Mansur Ali</strong>
                                        <span>Director</span>
                                    </article>
                                </div>

                            </OwlCarousel>
                        </div>
                        <div className="tstimo-sec-blo-rit">
                            <strong>GBCD</strong>
                            <h4>Give children a smile..</h4>
                            <span></span>
                            <div className="tstimo-sec-form">
                                <div className="row mb-4">
                                    <div className="col-sm-12"><input type="text" className="form-control" placeholder="Name.." /></div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-12"><input type="text" className="form-control" placeholder="Email ID" /></div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-4 col-sm-12"><select className="form-select"><option>Country</option></select></div>
                                    <div className="col-md-8 col-sm-12"><input type="text" className="form-control" placeholder="Address.." /></div>
                                </div>
                                <div className="row pb-4"><div className="col-md-5 col-sm-12"><button className="btn btn-redmor">Send</button></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal show={show} onHide={handleClose} size='lg' backdrop="static" keyboard={false}>
                <Modal.Header className='hom-vdeo' closeButton>
                </Modal.Header>
                <Modal.Body className='hom-vdeo-body'>
                    <video width="800" height="450" controls autoplay="true" >
                        <source src={video} type="video/mp4" />
                    </video>
                </Modal.Body>
            </Modal>
        </>
    )
}
