import JoinSection from "@/components/home/joinsection";
import React from "react";

export default function Daftar() {
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
            <div class="col-12 col-md-7">
              <div class="welcome-intro">
                <h1 style={{ color: "#201a84" }}>
                  <i class="fas fa-laptop-code"></i> Daftar
                </h1>
                <p class="my-4">
                  Menambah ilmu baru dan meningkatkan skil atau keterampilan
                  pribadi. Mempersiapkan diri dengan pengalaman baru melalui
                  diskusi dan studi kasus.
                </p>
                <a href="#programs" class="btn scroll">
                  {" "}
                  <i class="fas fa-book-open mr-1"></i>
                  Program Komunitas
                </a>
                <a href="#tampilkan-form" target="_blank" class="btn scroll">
                  {" "}
                  <i class="fas fa-globe mr-1"></i> Formulir Pendaftaran
                </a>
              </div>
            </div>
            <div class="col-12 col-md-5">
              <div
                class="welcome-thumb"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <img
                  src="assets/img/avatar/sacode-illustration-johan.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tampilkan-form" class="review-area ptb_100">
        <div class="container">
          <div class="row text-center">
            <div class="col-12">
              <div class="section-heading">
                <span class="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                  <i class="far fa-lightbulb text-primary mr-1"></i>
                  <span class="text-primary">Formulir Pendaftaran</span>
                </span>
                <h2>Daftar Kelas Coding di SaCode</h2>
                <p class="mt-lg-5 mt-md-2">
                  Silahkan isi formulir pendaftaran berikut ini dengan baik dan
                  benar.
                </p>
              </div>
            </div>

            <div class="col-12 mb-5 res-margin">
              <div class="single-review card">
                <div class="card-top pt-5">
                  <div class="review-text">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSepbGUmAV48ZFQNAYdeKyY4dWtwKcL-7EV3bcw-T2uy82w-Tg/viewform?embedded=true"
                      width="100%"
                      height="2645"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                    >
                      Loading…
                    </iframe>
                  </div>

                  <div class="quot-icon">
                    <img
                      class="avatar-md"
                      src="assets/img/icon/quote.png"
                      alt=""
                    />
                  </div>
                </div>

                <div class="reviewer media bg-gray p-4">
                  <div class="reviewer-meta media-body align-self-center ml-4">
                    <p>
                      Jika terjadi kendala pada form, silahkan klink{" "}
                      <a
                        class="text-primary"
                        href="https://forms.gle/UdpXsWvMJE9GvPq1A"
                        target="_blank"
                      >
                        <b>di sini</b>
                      </a>
                    </p>
                    <p style={{ paddingTop: "10px" }}>
                      Atau copy & paste link berikut pada perambah internet Anda
                      : <br />{" "}
                      <code style={{ fontSize: "120%" }}>
                        https://forms.gle/UdpXsWvMJE9GvPq1A
                      </code>
                    </p>
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
