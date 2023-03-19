import Image from "next/image";
export default function page() {
  return (
    <>
      <section
        id="home"
        class="section welcome-area bg-inherit h-100vh overflow-hidden"
      >
        <div class="shapes-container">
          <div class="bg-shape"></div>
        </div>
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <div class="welcome-intro">
              <h1 style={{ color: "#201a84" }}>
                <i class="fas fa-users"></i> <br /> SaCode's <br /> Weekend 2022
              </h1>
              <p class="my-4">
                Berdiskusi, membangun jaringan dan berkembang bersama <br />{" "}
                anggota komunitas. Belajar - Ciptakan - Bagikan.
              </p>
              <a href="#topik-2022" target="_blank" class="btn scroll">
                {" "}
                <i class="fas fa-book-open mr-1"></i>Topik & Speaker di Tahun
                2022
              </a>
            </div>
            <div class="col-12 col-md-5">
              <div
                class="welcome-thumb"
                // data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <Image
                  src="/assets/img/avatar/sacode-illustration-janzen.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="topik-2022" class="review-area ptb_100">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-10 col-lg-7">
              <div class="section-heading">
                <span class="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                  <i class="far fa-lightbulb text-primary mr-1"></i>
                  <span class="text-primary">Topik</span>
                  2022
                </span>
                <h2>SaCode's Weekend 2022</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Cloud Computing : <br /> An Introduction to Alibaba Cloud
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 26 November
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/ClYVQ-ZBjyq/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-belinda.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Belinda Pigome
                    </h5>
                    <h6 class="text-secondary fw-3">
                      Computer Systems Analyst
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    HTML Template Modification: Free & <br /> Premium Templates
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 19 November
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <small class="p-2 text-warning">
                      <i class="fas fa-info-circle"></i> Coming soon...
                    </small>
                    <span>
                      <a
                        href="https://www.instagram.com/p/ClGKSFUBvqM/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-janzen-4.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Janzen Faidiban
                    </h5>
                    <h6 class="text-secondary fw-3">Full Stack Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Google Foobar: <br /> Google's Secret Hiring Techniques
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 12 November
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <small class="p-2 text-warning">
                      <i class="fas fa-info-circle"></i> Coming soon...
                    </small>
                    <span>
                      <a
                        href="https://www.instagram.com/p/Ckz1J5MB7xx/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-nick-2.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Nick Imbiri
                    </h5>
                    <h6 class="text-secondary fw-3">
                      Math and Data Science Enthusiast
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    HTML5 Coding Essentials <br /> and Best Practices
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 5 November
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/Ckh_SkVhJYu/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-samuel2.jpg"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Samuel Bosawer
                    </h5>
                    <h6 class="text-secondary fw-3">Full Stack Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Design Social Media UI <br /> With Framework CSS Bootstrap
                    5.2
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 29 Oktober
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CkP7GMEB6YX/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-sulenias.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Sulenias Asso
                    </h5>
                    <h6 class="text-secondary fw-3">Junior Web Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Headless CMS with <br /> React Native & Strapi
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 22 Oktober
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/Cj-YuxlBuDa/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-cristoper.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Cristoper Zonggonau
                    </h5>
                    <h6 class="text-secondary fw-3">Full Stack Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Digital Electronic Design <br /> & Simulation on ReTro
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 15 Oktober
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CjsBfj0B6Yz/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-wahyu.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Wahyu Boseren
                    </h5>
                    <h6 class="text-secondary fw-3">Electronic Enthusiasts</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Get Started Contributing to Open Source
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 8 Oktober 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CjZuI7WBqL9/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-theis-2.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Theis Andatu
                    </h5>
                    <h6 class="text-secondary fw-3">Software Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Set Up GitHub Authentication using Firebase
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 1 Oktober 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CjIXuY1hXNb/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-ellyakim.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Ellyakim Ansek
                    </h5>
                    <h6 class="text-secondary fw-3">Full Stack Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    How to build a Netflix <br /> Clone with React JS
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 24 September
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/Ci199ephby8/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-obi.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Obi Pranata
                    </h5>
                    <h6 class="text-secondary fw-3">Full Stack Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    R Shiny for Data Science : Overview and Tutorial
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 17 September
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span class="text-warning fw-bolder">
                      <small class="p-2">
                        <i class="fas fa-info-circle"></i> Coming soon...
                      </small>
                    </span>
                    <span>
                      <a
                        href="https://www.instagram.com/p/CijpKKyh05w/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-brian.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Brian Unani
                    </h5>
                    <h6 class="text-secondary fw-3">Data Science Enthusiast</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Introduction to <br /> Tailwind CSS Framework
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 10 September
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CiR7FOtBDhb/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-janzen-3.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Janzen Faidiban
                    </h5>
                    <h6 class="text-secondary fw-3">Web Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Human Centered-Design: An Introduction
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 3 September
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span class="text-warning fw-bolder">
                      <small class="p-2">
                        <i class="fas fa-info-circle"></i> Coming soon...
                      </small>
                    </span>
                    <span>
                      <a
                        href="https://www.instagram.com/p/Ch_9f7RBJxX/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-agnes.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Agnes Suyanto
                    </h5>
                    <h6 class="text-secondary fw-3">UX Researcher</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Front-End Development with Vue Js 3
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 27 Agustus
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span class="text-warning fw-bolder">
                      <small class="p-2">
                        <i class="fas fa-info-circle"></i> Coming soon...
                      </small>
                    </span>
                    <span>
                      <a
                        href="https://www.instagram.com/p/ChtTxfYBW_3/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-johan.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Johan Nasendi
                    </h5>
                    <h6 class="text-secondary fw-3">Web Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Workshop : Artificial <br /> Intelligence & Image Processing{" "}
                    <sup class="text-warning">Day02</sup>
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 23 Juli 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span class="text-warning fw-bolder">
                      <small class="p-2">
                        <i class="fas fa-info-circle"></i> Coming soon...
                      </small>
                    </span>
                    <span>
                      <a
                        href="https://www.instagram.com/p/CgUI4DqBpaj/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-sugeng.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Sugeng, M.T.
                    </h5>
                    <h6 class="text-secondary fw-3">
                      Dosen Sistem Komputer, UNIKOM
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Workshop : Artificial <br /> Intelligence & Image Processing{" "}
                    <sup class="text-warning">Day01</sup>
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 16 Juli 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span class="text-warning fw-bolder">
                      <small class="p-2">
                        <i class="fas fa-info-circle"></i> Coming soon...
                      </small>
                    </span>
                    <span>
                      <a
                        href="https://www.instagram.com/p/CgCMDUmF5fN/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-sugeng.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Sugeng, M.T.
                    </h5>
                    <h6 class="text-secondary fw-3">
                      Dosen Sistem Komputer, UNIKOM
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Machine Learning (ML) <br /> for Everyone Using TensorFlow
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 9 Juli 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span class="text-warning fw-bolder">
                      <small class="p-2">
                        <i class="fas fa-info-circle"></i> Coming soon...
                      </small>
                    </span>
                    <span>
                      <a
                        href="https://www.instagram.com/p/ChtTxfYBW_3/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-yose.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">Yose Giyay</h5>
                    <h6 class="text-secondary fw-3">Data Science Enthusiast</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Robot Operating <br /> System (ROS)
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 2 Juli 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CfdqQQUhDR6/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-yoshua.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Yoshua Gombo
                    </h5>
                    <h6 class="text-secondary fw-3">Robotic Enthusiast</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    CSS (Cascading <br /> Style Sheets)
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 25 Juni 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CfLrfN6B2I9/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-nae.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">Nae Unani</h5>
                    <h6 class="text-secondary fw-3">Front-End Enthusiast</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    ETL Processing <br /> in Apache Spark
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 18 Juni 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/Ce5zCILB_Sa/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-haris.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Haris Djafar
                    </h5>
                    <h6 class="text-secondary fw-3">Software Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    How The Compiler & <br />
                    Linker Work
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 11 Juni 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a href="#" class="badge p-2" target="_blank">
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-james-2.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      James Sraun
                    </h5>
                    <h6 class="text-secondary fw-3">iOS Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Business Analyst in <br />
                    Software Development
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 4 Juni 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CeUhtx4h3Ho/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-patricia-1.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Patricia Dianita
                    </h5>
                    <h6 class="text-secondary fw-3">Business Analyst</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    The Requirements of <br />
                    Competitive Programming
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 28 Mei 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CeD8NDDBFaS/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan{" "}
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-nick-2.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Nick Imbiri
                    </h5>
                    <h6 class="text-secondary fw-3">
                      Math and Data Science Enthusiast
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Fundamentals of <br /> UI/UX Design
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 21 Mei 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CdwcozPhF1x/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan{" "}
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-vicky.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Vicky Irmanto
                    </h5>
                    <h6 class="text-secondary fw-3">Graphic Designer </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Full Stack Development <br />
                    Using NestJS & ReactJS
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 14 Mei 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/Cdfk9YwBszG/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan{" "}
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-johan-3.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Johan Nasendi
                    </h5>
                    <h6 class="text-secondary fw-3"> Web Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    IoT Early Warning <br />
                    System (AWS)
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 7 Mei 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CdNki1MBklx/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan{" "}
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-jonas-2.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Jonas Ualubun
                    </h5>
                    <h6 class="text-secondary fw-3"> Hardware Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Linux Distribution for <br />
                    Programming
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 30 April 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/Cc7SSUpBfsN/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-theis-2.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Theis Andatu
                    </h5>
                    <h6 class="text-secondary fw-3"> Software Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Creating Line Follower <br />
                    for Robot
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 23 April 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/Cc7SSUpBfsN/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-egi.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Egi Pratama
                    </h5>
                    <h6 class="text-secondary fw-3"> Technology Enthusiast</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Arduino Programming
                    <br /> for Beginners
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 8 April 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CcFvuJwhu5S/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan{" "}
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-ricky-2.jpg"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Ricky Pekei
                    </h5>
                    <h6 class="text-secondary fw-3"> Mechatronic Enthusiast</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Smarty Template
                    <br /> Engine for PHP
                  </h4>

                  <div class="review-text">
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 2 April 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CbzbJsAhxJi/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-hendrik.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Hendrik Eka
                    </h5>
                    <h6 class="text-secondary fw-3">Web Developer </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Agile Scrum Project <br />
                    Management With Trello
                  </h4>

                  <div class="review-text">
                    <p>content coming soon...</p>
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 26 Maret 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CbhgiTQBywJ/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan{" "}
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-noval.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">Noval Nauw</h5>
                    <h6 class="text-secondary fw-3">Full Stack Developer </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    The R Project for <br />
                    Statistical Computing
                  </h4>

                  <div class="review-text">
                    <p>content coming soon...</p>
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 19 Maret 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CbPop2uhNRJ/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan{" "}
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-brian.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Brian Unani
                    </h5>
                    <h6 class="text-secondary fw-3">
                      Data Science Enthusiast{" "}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Prototyping and <br />
                    Templating Process
                  </h4>

                  <div class="review-text">
                    <p>content coming soon...</p>
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 12 Maret 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/Ca9q_PVhiQ6/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan{" "}
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-janzen-2.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Janzen Faidiban
                    </h5>
                    <h6 class="text-secondary fw-3">Web Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Develop an <br /> Online Payment System
                  </h4>

                  <div class="review-text">
                    <p>content coming soon...</p>
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 5 Maret 2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CarQzzJBo6i/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan{" "}
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-samuel2.jpg"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Samuel Bosawer
                    </h5>
                    <h6 class="text-secondary fw-3">Web Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Test-Driven <br /> Development (TDD)
                  </h4>

                  <div class="review-text">
                    <p>content coming soon...</p>
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 26 Februari
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CaZqaEWBwSD/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan{" "}
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-james.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      James Sraun
                    </h5>
                    <h6 class="text-secondary fw-3">IoS Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Authenticating Users <br /> With SocialMedia Login
                  </h4>

                  <div class="review-text">
                    <p>content coming soon...</p>
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 19 Februari
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CaHVvHPhoE_/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/Johan-Nasendi-SaCode-profile.jpeg"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Johan Nasendi
                    </h5>
                    <h6 class="text-secondary fw-3">Web Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Object Oriented <br />
                    Programming (OOP)
                  </h4>

                  <div class="review-text">
                    <p>content coming soon...</p>
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 12 Februari
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CZ1Uzc1hoMw/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan{" "}
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/Stenly-Samberi-SaCode-profile.jpeg"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Stenly Samberi
                    </h5>
                    <h6 class="text-secondary fw-3">Android Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top p-4">
                  <h4 class="text-primary mt-4 mb-3">
                    Software Development <br />
                    Life Cycle (SDLC)
                  </h4>

                  <div class="review-text">
                    <p>content coming soon...</p>
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-calendar mr-1"></i> Sabtu, 05 Februari
                      2022
                    </span>{" "}
                    <br />
                    <span class="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i class="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                    <hr />
                    {/* <span>
                      <a
                        href="https://www.instagram.com/p/CZjTuuohwUH/"
                        class="badge p-2"
                        target="_blank"
                      >
                        <i class="fas fa-info-circle mr-1"></i> Informasi
                        Lengkap
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://sacode.web.id/weekend"
                        class="badge badge-warning p-2"
                        target="_blank"
                      >
                        <i class="fas fa-hand-pointer mr-1"></i> Gabung Kegiatan{" "}
                      </a>
                    </span> */}
                  </div>

                  <div class="quot-icon">
                    <Image
                      class="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-thumb">
                    <Image
                      class="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-theis-2.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>

                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <h5 class="reviewer-name color-primary mb-2">
                      Theis Andatu
                    </h5>
                    <h6 class="text-secondary fw-3">Software Developer</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
