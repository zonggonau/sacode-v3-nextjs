import JoinSection from "@/components/home/joinsection";
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
                <h1 style={{ color: "201a84" }}>
                  <i className="fas fa-book-open"></i> Pelatihan
                </h1>
                <p className="my-4">
                  Tersedia bagi semua kalangan yang ingin menambah skill atau
                  pengetahuan terkait pemrograman komputer.
                </p>
                <a href="#courses" className="btn scroll">
                  {" "}
                  <i className="fas fa-book-open mr-1"></i>
                  Pelatihan Tersedia
                </a>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div
                className="welcome-thumb"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="1000"
                style={{
                  visibility: "visible",
                  animationDelay: 0.4,
                  animationName: "fadeInUp",
                }}
              >
                <Image
                  src="/assets/img/avatar/sacode-illustration-jonas-2.png"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="courses"
        className="section features-area style-two overflow-hidden ptb_100"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-7">
              <div className="section-heading">
                <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                  <i className="far fa-lightbulb text-primary mr-1"></i>
                  <span className="text-primary">Pelatihan</span>
                  Tersedia
                </span>
                <h2>Pelatihan di SaCode</h2>
                <p className="d-none d-sm-block mt-4">
                  Tersedia dalam bentuk tatap muka online dan juga offline.
                  Informasi lebih lengkap akan diberikan pada saat pendaftaran.
                </p>
                <p className="d-block d-sm-none mt-4">
                  Tersedia dalam bentuk tatap muka online dan juga offline.
                  Informasi lebih lengkap akan diberikan pada saat pendaftaran.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 my-3 res-margin">
              <div
                className="image-box text-center icon-1 p-5 wow fadeInLeft"
                data-aos-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="featured-img mb-3">
                  <i className="fas fa-book-open display-3 text-dark"></i>
                </div>
                <div className="icon-text">
                  <span className="badge badge-dark">#OfflineTraining</span>
                  <h3 className="mb-2 fw-7 text-dark">
                    Project Management in Software Development
                  </h3>
                  <p>
                    Pelatihan Satu Hari Menyusun Dokumen Perencanaan dan
                    Administrasi untuk Proyek Pengembangan Perangkat Lunak
                    (Software)
                  </p>
                  <div className="mt-2">
                    <span className="badge badge-dark">Project Proposal</span>
                    <span className="badge badge-dark">Project Charter</span>
                    <span className="badge badge-dark">
                      Project Progress Report
                    </span>
                  </div>

                  <span>
                    <a
                      href="https://www.instagram.com/p/CfK1ZncBp78/"
                      className="badge p-2"
                      target="_blank"
                    >
                      <i className="fas fa-info-circle mr-1"></i> Informasi
                      Lengkap
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
