import Image from "next/image";
export default function page() {
  return (
    <>
      <section
        id="home"
        className="section welcome-area bg-inherit h-100vh overflow-hidden"
      >
        <div className="shapes-container">
          <div className="bg-shape"></div>
        </div>
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12 col-md-7">
              <div className="welcome-intro">
                <h1 style={{ color: "#201a84" }}>
                  <i className="fas fa-users"></i> <br />
                  SaCode's <br />
                  Weekend 2021
                </h1>
                <p className="my-4">
                  Berdiskusi, membangun jaringan dan berkembang bersama <br />
                  anggota komunitas. Belajar - Ciptakan - Bagikan.
                </p>
                <a href="#topik-2021" target="_blank" className="btn scroll">
                  <i className="fas fa-book-open mr-1"></i>Topik & Speaker di
                  Tahun 2021
                </a>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div
                className="welcome-thumb"
                // data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <Image
                  width={500}
                  height={500}
                  src="/assets/img/avatar/sacode-illustration-janzen.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="topik-2021" className="review-area ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-7">
              <div className="section-heading">
                <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                  <i className="far fa-lightbulb text-primary mr-1"></i>
                  <span className="text-primary">Topik</span>
                  2021
                </span>
                <h2>SaCode's Weekend 2021</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-primary mt-4 mb-3">
                    Cyber Security :<br />
                    Penetration Testing
                  </h4>

                  <div className="review-text">
                    {/* <p>content coming soon...</p>  */}
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 6 November
                      2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-israil.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Israil Ondi
                    </h5>
                    <h6 className="text-secondary fw-3">
                      IT Security Engineer
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-primary mt-4 mb-3">
                    Network Automation
                    <br />
                    With Python
                  </h4>

                  <div className="review-text">
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 30 Oktober
                      2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-daniel.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Daniel Pepuho
                    </h5>
                    <h6 className="text-secondary fw-3">
                      IT & Network Enthusiast
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-primary mt-4 mb-3">
                    Object-Oriented
                    <br />
                    Programming (OOP)
                  </h4>

                  <div className="review-text">
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 23 Oktober
                      2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-stenly.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Stenly Samberi
                    </h5>
                    <h6 className="text-secondary fw-3">Android Developer</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-primary mt-4 mb-3">
                    Become a Full Stack
                    <br />
                    JavaScript Developer
                  </h4>

                  <div className="review-text">
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 16 Oktober
                      2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-james.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      James Sraun
                    </h5>
                    <h6 className="text-secondary fw-3">
                      IOS Software Engineer
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-primary mt-4 mb-3">
                    Konsep CI/CD
                    <br />& Penerapannya
                  </h4>

                  <div className="review-text">
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 9 Oktober
                      2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-haris.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Haris Djafar
                    </h5>
                    <h6 className="text-secondary fw-3">Back-Ends Developer</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-primary mt-4 mb-3">
                    Programming Skills
                    <br />
                    For Robotics
                  </h4>

                  <div className="review-text">
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 2 Oktober
                      2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-ian.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Ian Carlos
                    </h5>
                    <h6 className="text-secondary fw-3">
                      Mechatronics Engineering
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-primary mt-4 mb-3">
                    Penerapan API Menggunakan
                    <br />
                    Laravel 8 & Vue.js 3
                  </h4>

                  <div className="review-text">
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 25
                      September 2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-johan.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Johan Nasendi
                    </h5>
                    <h6 className="text-secondary fw-3">Web Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-primary mt-4 mb-3">
                    Membuat Aplikasi
                    <br />
                    Multi-Platform Menggunakan Flutter
                  </h4>

                  <div className="review-text">
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 18
                      September 2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-pascal.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Pascal Sapari
                    </h5>
                    <h6 className="text-secondary fw-3">Data Analyst</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-primary mt-4 mb-3">
                    Proses Pembuatan
                    <br />
                    Wireframe & Template <br />
                    Web
                  </h4>

                  <div className="review-text">
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 11
                      September 2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-janzen.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Janzen Faidiban
                    </h5>
                    <h6 className="text-secondary fw-3">Web Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-primary mt-4 mb-3">
                    Penerapan IoT
                    <br />
                    (Internet of Things)
                  </h4>

                  <div className="review-text">
                    {/* <!-- <p>Pengalaman mengikuti kompetisi terkait Teknologi Informasi dengan integrasi IoT.
                                        Membagikan pengetahuan dan pengalaman bekerja dengan tim
                                        dalam pengembangan perangkat keras.</p> --> */}
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 4
                      September 2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-jonas.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Jonas Ualubun
                    </h5>
                    <h6 className="text-secondary fw-3">Hardware Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-primary mt-4 mb-3">
                    Tempat Sampah Pintar
                    <br />
                    Dengan Arduino
                  </h4>

                  <div className="review-text">
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 28 Agustus
                      2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-ricky.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Ricky Pekei
                    </h5>
                    <h6 className="text-secondary fw-3">
                      Mechatronics Enthusiast
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-primary mt-4 mb-3">
                    Aplikasi Web
                    <br />
                    Dengan Codeigniter 3
                  </h4>

                  <div className="review-text">
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 21 Agustus
                      2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-samuel.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Samuel Bosawer
                    </h5>
                    <h6 className="text-secondary fw-3">Web Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-primary mt-4 mb-3">
                    Developer Roadmap
                    <br />
                    (Front-End, Back-End, Full Stack)
                  </h4>

                  <div className="review-text">
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 14 Agustus
                      2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-theis-2.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Theis Andatu
                    </h5>
                    <h6 className="text-secondary fw-3">
                      Linux & Pyton Enthusiast
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-dark mt-4 mb-3">
                    Pemrograman
                    <br />
                    Aplikasi Mobile
                  </h4>

                  <div className="review-text">
                    {/* <!-- <p>Berbagi pengalaman tentang penerapan dan pengembangan aplikasi berbasis mobile.
                                        Perkembangan dan keuntungannya di dalam dunia bisnis dan masyarakat umum.</p> --> */}
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 7 Agustus
                      2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-nico.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Nico Koibur
                    </h5>
                    <h6 className="text-secondary fw-3">Android Developer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-dark mt-4 mb-3">
                    Introduction to
                    <br />
                    Competitive Programming
                  </h4>

                  <div className="review-text">
                    {/* <!-- <p>Mengenal pemrograman kompetitif. Kegiatan atau kompetisi yang sering
                                        dilaksanakan. Persiapan yang dibutuhkan. Manfaat-manfaat yang diperoleh dari
                                        menguasai bidang ini dan dunia akadmik maupun industri.</p> --> */}
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 3 Juli
                      2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-nick.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Nick E. Imbiri
                    </h5>
                    <h6 className="text-secondary fw-3">
                      Math and Data Science Enthusiast
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
              <div className="single-review card">
                <div className="card-top p-4">
                  <h4 className="text-dark mt-4 mb-3">
                    Berkenalan Dengan <br />
                    Git & GitHub
                  </h4>

                  <div className="review-text">
                    {/* <!-- <p>Memperkenalkan Git dan GitHub. Penerapannya dalam melakukan aktifitas belajar
                                        maupun kerja kolaborasi yang berkaitan dengan pemrograman atau pengembangan
                                        perangkat
                                        lunak.</p> --> */}
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-calendar mr-1"></i> Sabtu, 19 Juni
                      2021
                    </span>
                    <br />
                    <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                      <i className="fas fa-clock mr-1"></i> 18.00 - 21.00 WIT
                    </span>
                  </div>

                  <div className="quot-icon">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-md"
                      src="/assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviewer media bg-gray p-4">
                  <div className="reviewer-thumb">
                    <Image
                      width={500}
                      height={500}
                      className="avatar-lg radius-100"
                      src="/assets/img/sacodesweekend/sacodesweekend-theis.png"
                      alt=""
                    />
                  </div>

                  <div className="reviewer-meta media-body align-self-center ml-4">
                    <h5 className="reviewer-name color-primary mb-2">
                      Theis Andatu
                    </h5>
                    <h6 className="text-secondary fw-3">
                      Linux & Python Enthusiast
                    </h6>
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
