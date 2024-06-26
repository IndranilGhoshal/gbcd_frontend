import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { contactbanner, contactmap, formiconcolor2, innerbanner, locnicn, phonicn } from '../../images/images';
export default function page() {
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
            <div><img src={contactbanner} /></div>

          </OwlCarousel>
        </div>
      </section> */}

      <section className="contactus-sec">
        <div className="container">
          <h3 className="fade-in">Connect With <span>GBCD</span></h3>
          <div className="contact-form">
            <div className="row mb-5">
              <div className="col-md-4 col-sm-12 position-relative">
                <input
                  className="form-control name-fld"
                  type="text"
                  placeholder="type your name.."

                />
              </div>
              <div className="col-md-4 col-sm-12 position-relative">
                <input
                  className="form-control eml-fld"
                  type="text"
                  placeholder="enter email id.."

                />
              </div>
              <div className="col-md-4 col-sm-12 position-relative">
                <input
                  className="form-control phon-fld"
                  type="text"
                  placeholder="contact no"

                />
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-md-8 col-sm-12 position-relative"><textarea className="form-area"
                placeholder="message.."></textarea></div>
              <div className="col-md-4 col-sm-12 position-relative"><button className="btn btn-subm">Submit</button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contactus-sec">
        <div className="contactusinnr">

          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001.30619677931!2d88.2739077973701!3d23.0820211827819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8f3d9c40aa0b5%3A0x188aca06f44eb348!2sGraham%20Bell%20Centre%20for%20the%20Deaf!5e0!3m2!1sen!2sin!4v1708852111433!5m2!1sen!2sin"
            width="100%" height="600" style={{border:0}} className="map" allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe> */}
          <div className="container">
            <div className='cont-map'>
              <img src={contactmap} usemap="#image_map" />
              <a className='balag' alt="Balagarh" title="Balagarh" href="https://maps.app.goo.gl/2C5CwpUu4DxkKTBC8" target='_blank' ></a>
              <a className='pandu' alt="Pandua" title="Pandua" href="https://maps.app.goo.gl/ZwDbNs32qSP8UvXH9" target='_blank' ></a>
              <a className='polba' alt="Polba Dadpur" title="Polba Dadpur" href="https://maps.app.goo.gl/xedQJkAh72UUJgku7" target='_blank' ></a>
              <a className='dhali' alt="Dhaniakhali" title="Dhaniakhali" href="https://maps.app.goo.gl/NkzXwhRby2pKK3SHA" target='_blank' ></a>

              {/* <map name="image_map">
                <area alt="Balagarh" title="Balagarh" href="https://maps.app.goo.gl/2C5CwpUu4DxkKTBC8" coords="737,91 733,85 729,84 723,82 715,82 709,82 703,82 697,80 697,80 693,76 694,68 695,61 697,53 700,44 700,44 704,37 704,37 706,29 708,23 709,15 708,9 705,9 698,7 698,7 692,7 689,9 681,13 676,15 673,17 670,18 666,21 663,27 661,31 660,34 656,35 651,33 649,30 646,29 645,34 645,34 645,38 645,42 644,44 640,44 636,44 636,46 636,50 636,54 640,57 636,60 632,64 632,70 634,75 632,76 632,76 632,82 630,87 630,90 630,90 624,92 624,92 628,94 632,96 632,98 630,100 630,100 629,101 630,106 631,111 634,113 630,114 628,117 630,119 630,119 628,123 632,127 632,128 632,131 632,134 633,136 636,137 638,137 640,139 640,139 638,146 642,143 648,141 650,138 652,135 654,141 652,145 652,149 651,155 650,159 648,163 647,166 647,169 646,172 646,172 648,175 651,174 652,171 658,171 666,171 672,171 675,169 677,166 682,163 688,163 693,159 696,152 697,148 698,139 698,134 703,127 706,123 713,119 713,119 719,123 725,122 731,117 733,110 736,102 737,98 737,92 738,95 737,90 737,90 " shape="polygon" target='_blank'></area>
                <area alt="Polba Dadpur" title="Polba Dadpur" href="https://maps.app.goo.gl/xedQJkAh72UUJgku7" coords="537,287 542,287 546,285 548,282 551,281 555,283 558,281 563,279 566,281 577,283 583,283 583,280 595,279 601,281 603,283 606,280 616,279 617,283 624,282 627,279 626,273 626,267 630,266 630,263 625,261 619,254 624,250 629,250 630,246 631,240 629,238 629,238 630,230 630,230 630,226 632,222 634,217 634,211 635,207 636,202 636,202 633,201 632,198 627,192 624,190 622,188 620,185 616,185 615,185 613,183 615,178 615,174 611,171 611,169 610,169 605,169 603,169 600,167 599,169 597,172 596,173 597,178 597,179 595,179 591,181 589,182 583,179 583,179 577,177 575,175 572,175 569,176 563,177 560,177 557,174 556,170 554,169 552,169 550,173 548,175 545,175 544,175 541,179 540,184 540,190 539,194 537,194 536,199 535,200 534,201 532,201 529,200 526,197 522,198 520,193 520,188 516,181 514,176 512,173 506,171 502,173 502,173 501,177 502,184 502,187 501,188 498,188 496,189 494,193 494,196 488,197 488,198 488,198 488,201 488,207 490,208 487,214 486,220 486,225 486,228 482,230 479,231 478,235 478,238 478,242 482,246 486,248 485,253 484,257 483,261 480,265 480,268 486,267 486,267 481,271 481,275 494,272 489,273 496,268 504,269 504,269 512,271 516,272 520,275 524,276 528,277 528,280 528,283 536,286 536,286 532,284 532,284 " shape="polygon" target='_blank'></area>
                <area alt="Dhaniakhali" title="Dhaniakhali" href="https://maps.app.goo.gl/NkzXwhRby2pKK3SHA" coords="341,223 342,218 343,214 349,213 352,212 360,211 360,216 365,216 369,215 374,212 376,210 373,207 372,200 372,200 374,197 377,198 380,199 383,196 384,193 388,193 389,197 393,198 394,194 399,193 405,189 405,182 400,178 396,175 397,172 401,167 405,161 405,155 405,149 408,146 413,146 421,145 425,145 429,147 437,145 443,140 444,139 450,139 457,136 458,133 461,130 464,125 466,123 470,123 474,123 476,121 476,127 477,133 485,135 485,141 487,144 485,146 485,146 485,150 493,149 495,155 497,155 497,158 499,164 502,166 504,171 503,174 501,178 504,187 499,188 493,190 493,197 493,197 489,197 489,197 487,202 487,202 489,206 489,206 489,210 487,214 484,219 484,219 485,223 485,226 481,228 481,228 479,231 478,234 477,237 479,242 483,247 485,251 484,257 483,260 480,263 480,267 483,264 480,269 480,274 480,276 480,276 476,275 474,272 470,270 469,266 474,263 476,259 476,259 472,259 472,259 466,263 461,263 459,261 457,263 454,267 454,267 452,264 452,264 447,262 447,259 445,258 437,258 434,260 429,261 426,261 426,257 426,255 424,251 420,251 417,251 416,253 414,255 410,255 408,253 405,251 405,251 402,251 403,255 399,257 399,257 396,258 396,258 394,259 392,260 392,263 389,261 388,259 388,259 384,257 381,257 379,257 376,258 370,261 368,263 365,259 365,255 365,255 363,253 360,251 358,253 357,257 353,255 352,249 352,249 352,247 353,243 353,241 352,238 352,238 350,235 350,235 352,231 349,227 348,227 344,225 341,225 " shape="polygon" target='_blank'></area>
                <area alt="Pandua" title="Pandua" href="https://maps.app.goo.gl/ZwDbNs32qSP8UvXH9" coords="533,200 537,197 539,191 539,184 541,178 545,175 549,171 557,173 570,175 577,174 583,179 583,179 588,181 591,179 595,177 595,173 596,171 600,167 606,171 610,169 615,168 611,164 608,160 608,155 613,149 615,145 622,145 625,147 626,150 630,151 630,151 630,152 633,151 637,148 637,143 637,139 634,138 632,137 630,133 630,130 633,127 628,123 626,118 627,115 632,115 633,111 629,105 628,101 630,97 625,94 621,91 621,86 617,82 607,81 601,80 595,83 591,84 587,85 583,83 579,82 573,82 562,82 557,78 554,73 553,68 549,66 546,67 546,67 546,65 546,62 542,62 540,63 541,59 539,59 536,60 533,62 530,63 529,62 528,60 524,62 521,62 520,59 520,59 513,59 511,59 507,59 505,59 499,62 495,62 491,62 490,66 490,71 489,75 483,78 481,81 487,86 488,91 486,106 481,114 480,118 480,118 478,122 478,122 479,129 479,135 487,134 487,138 487,140 489,141 489,145 487,146 487,148 491,150 496,151 497,155 500,159 501,162 504,169 507,173 513,173 513,173 517,178 517,185 520,193 520,193 523,197 523,197 526,204 531,199 " shape="polygon" target='_blank'></area>
              </map> */}
            </div>
            <div className="map-cont">
              <div className="map-cont-com">
                <span><img src={formiconcolor2} /></span>
                <a href="mailto:gbcdpandua@gmail.com">gbcdpandua@gmail.com</a>
              </div>
              <div className="map-cont-com">
                <span><img src={locnicn} /></span>
                <p>Graham Bell Centre for the Deaf Tenterpar, Pandua, Hooghly Pin - 712149</p>
              </div>
              <div className="map-cont-com">
                <span><img src={phonicn} /></span>
                <a href="tel:+91 9933942609">+91 9933942609</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
