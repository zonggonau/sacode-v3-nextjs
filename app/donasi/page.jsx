import Image from "next/image";
export default function D() {
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
                  <i className="fas fa-hand-point-up"></i> Donasi
                </h1>
                <p className="my-4">
                  Memiliki kerinduan lewat donasi mendukung program kegiatan
                  komunitas terkait listerasi digital dan teknologi informasi
                  <br />
                  di Tanah Papua.
                </p>
                <a href="#programs" className="btn scroll">
                  {" "}
                  <i className="fas fa-book-open mr-1"></i>
                  Program Komunitas
                </a>
                <a href="#donation" className="btn scroll">
                  <i className="fas fa-globe mr-1"></i> Bentuk Donasi
                </a>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div
                className="welcome-thumb"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <Image
                  src="/assets/img/avatar/sacode-illustration-theis.png"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section discover-area bg-gray overflow-hidden ptb_100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-6 order-2 order-lg-1 wow fadeInUp">
              <div className="service-thumb discover-thumb mx-auto pt-5 pt-lg-0">
                <Image
                  src="https://atstore.id/assets/images/sacode-tshirt.png"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 wow fadeInUp">
              <div className="discover-text pt-4 pt-lg-0">
                <h2 className="pb-4 pb-sm-0">Beli + Donasi</h2>
                <p className="d-none d-sm-block pt-3">
                  Donasi ke Komunitas SaCode dan dapatkan T-Shirt / Hoodie /
                  Sweater.
                </p>
                <p className="d-none d-sm-block pt-3">
                  Produk berikut merupakan hasil kerja sama
                  <a
                    href="https://atstore.id"
                    target="_blank"
                    className="text-primary font-weight-bold"
                  >
                    AT Store
                  </a>
                  dan
                  <a
                    href="https://sacode.web.id"
                    target="_blank"
                    className="text-primary font-weight-bold"
                  >
                    SaCode
                  </a>
                  (Komunitas IT di Tanah Papua). Dukung dengan cara memiliki
                  T-Shirt / Hoodie / Sweater dari SaCode.
                </p>
                <p className="d-none d-sm-block pt-3 pb-4 font-weight-bold">
                  Berikut beberapa kebutuhan komunitas yang ditopang melalui
                  program donasi :
                </p>
                <ul className="check-list">
                  <li className="py-1">
                    <div className="list-box media">
                      <span className="icon align-self-center">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="media-body pl-3">
                        Pengadaan perangkat komputer PC untuk tempat kursus
                        coding.
                      </span>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="list-box media">
                      <span className="icon align-self-center">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="media-body pl-3">
                        Pengadaan laptop bagi peserta kursus dan kontributor di
                        komunitas yang belum memiliki laptop.
                      </span>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="list-box media">
                      <span className="icon align-self-center">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="media-body pl-3">
                        Pengembangan sistem online untuk komunitas dan kursus.
                      </span>
                    </div>
                  </li>
                </ul>

                <a
                  href="https://atstore.id/#beli-donasi"
                  className="btn mt-3"
                  target="_blank"
                >
                  <i className="fas fa-arrow-right mr-2"></i> Donasi Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="donation"
        className="section features-area style-two overflow-hidden ptb_100"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="section-heading text-center wow fadeInUp">
                <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                  <svg
                    className="svg-inline--fa fa-lightbulb fa-w-11 text-primary mr-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="lightbulb"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 352 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"
                    ></path>
                  </svg>{" "}
                  <i className="far fa-lightbulb text-primary mr-1"></i>
                  <span className="text-primary">Pilihan</span>
                  Desain
                </span>
                <h2>T-Shirt, Hoodie & Sweater</h2>
                <p className="d-none d-sm-block mt-4">
                  Menjadi bagian dari pembawa perubahan dan berkontribusi
                  melalui donasi yang dapat menopang komunitas terus aktif dan
                  memberikan dampak.
                </p>
                <p className="d-block d-sm-none mt-4">
                  Menjadi bagian dari pembawa perubahan dan berkontribusi
                  melalui donasi yang dapat menopang komunitas terus aktif dan
                  memberikan dampak.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 res-margin mb-5">
              <div
                className="image-box text-center icon-1 p-5 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: 0.4,
                  animationName: "fadeInUp",
                }}
              >
                <div className="mb-3">
                  <a href="https://wa.link/cfpu61" target="_blank">
                    <Image
                      className="img-thumbnail"
                      src="/assets/donasi/donasi-papuancoders.png"
                      width={500}
                      height={500}
                      alt="#PapuanCoders"
                    />
                  </a>
                </div>
                <div className="icon-text">
                  <h3 className="mb-2">#papuancoder</h3>
                  <p>Tersedia T-Shirt, Hoodie, dan Sweater.</p>
                  <a
                    href="https://wa.link/cfpu61"
                    target="_blank"
                    className="btn mt-3 w-100"
                  >
                    <i className="fas fa-hand-point-up mr-1"></i> Pesan & Donasi
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 res-margin mb-5">
              <div
                className="image-box text-center icon-1 p-5 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: 0.4,
                  animationName: "fadeInUp",
                }}
              >
                <div className="mb-3">
                  <a href="https://wa.link/cfpu61" target="_blank">
                    <Image
                      className="img-thumbnail"
                      src="/assets/donasi/donasi-papuancoders2.png"
                      width={500}
                      height={500}
                      alt="#PapuanCoders"
                    />
                  </a>
                </div>
                <div className="icon-text">
                  <h3 className="mb-2">#papuancoder</h3>
                  <p>Tersedia T-Shirt, Hoodie, dan Sweater.</p>
                  <a
                    href="https://wa.link/cfpu61"
                    target="_blank"
                    className="btn mt-3 w-100"
                  >
                    <i className="fas fa-hand-point-up mr-1"></i> Pesan & Donasi
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 res-margin mb-5">
              <div
                className="image-box text-center icon-1 p-5 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: 0.4,
                  animationName: "fadeInUp",
                }}
              >
                <div className="mb-3">
                  <a href="https://wa.link/ni1gkw" target="_blank">
                    <Image
                      className="img-thumbnail"
                      src="/assets/donasi/donasi-papuatech.png"
                      width={500}
                      height={500}
                      alt="#PapuaTech"
                    />
                  </a>
                </div>
                <div className="icon-text">
                  <h3 className="mb-2">#PapuaTech</h3>
                  <p>Tersedia T-Shirt, Hoodie, dan Sweater.</p>
                  <a
                    href="https://wa.link/ni1gkw"
                    target="_blank"
                    className="btn mt-3 w-100"
                  >
                    <i className="fas fa-hand-point-up mr-1"></i> Pesan & Donasi
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 res-margin mb-5">
              <div
                className="image-box text-center icon-1 p-5 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: 0.4,
                  animationName: "fadeInUp",
                }}
              >
                <div className="mb-3">
                  <a href="https://wa.link/ni1gkw" target="_blank">
                    <Image
                      className="img-thumbnail"
                      src="/assets/donasi/donasi-papuatech2.png"
                      width={500}
                      height={500}
                      alt="#PapuaTech"
                    />
                  </a>
                </div>
                <div className="icon-text">
                  <h3 className="mb-2">#PapuaTech</h3>
                  <p>Tersedia T-Shirt, Hoodie, dan Sweater.</p>
                  <a
                    href="https://wa.link/ni1gkw"
                    target="_blank"
                    className="btn mt-3 w-100"
                  >
                    <i className="fas fa-hand-point-up mr-1"></i> Pesan & Donasi
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 res-margin mb-5">
              <div
                className="image-box text-center icon-1 p-5 wow"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: 0.4,
                  animationName: "fadeInUp",
                }}
              >
                <div className="mb-3">
                  <a href="https://wa.link/hzo2cl" target="_blank">
                    <Image
                      className="img-thumbnail"
                      src="/assets/donasi/donasi-pacecoding.png"
                      width={500}
                      height={500}
                      alt="#PaceCoding"
                    />
                  </a>
                </div>
                <div className="icon-text">
                  <h3 className="mb-2">#PaceCoding</h3>
                  <p>Tersedia T-Shirt, Hoodie, dan Sweater.</p>
                  <a
                    href="https://wa.link/hzo2cl"
                    target="_blank"
                    className="btn mt-3 w-100"
                  >
                    <i className="fas fa-hand-point-up mr-1"></i> Pesan & Donasi
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 res-margin mb-5">
              <div
                className="image-box text-center icon-1 p-5 wow"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: 0.4,
                  animationName: "fadeInUp",
                }}
              >
                <div className="mb-3">
                  <a href="https://wa.link/hzo2cl" target="_blank">
                    <Image
                      className="img-thumbnail"
                      src="/assets/donasi/donasi-pacecoding2.png"
                      width={500}
                      height={500}
                      alt="#PaceCoding"
                    />
                  </a>
                </div>
                <div className="icon-text">
                  <h3 className="mb-2">#PaceCoding</h3>
                  <p>Tersedia T-Shirt, Hoodie, dan Sweater.</p>
                  <a
                    href="https://wa.link/hzo2cl"
                    target="_blank"
                    className="btn mt-3 w-100"
                  >
                    <i className="fas fa-hand-point-up mr-1"></i> Pesan & Donasi
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 res-margin mb-5">
              <div
                className="image-box text-center icon-1 p-5 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: 0.4,
                  animationName: "fadeInUp",
                }}
              >
                <div className="mb-3">
                  <a href="https://wa.link/43bkwd" target="_blank">
                    <Image
                      className="img-thumbnail"
                      src="/assets/donasi/donasi-kopicoding.png"
                      width={500}
                      height={500}
                      alt="#KoPiCoding"
                    />
                  </a>
                </div>
                <div className="icon-text">
                  <h3 className="mb-2">#KoPiCoding</h3>
                  <p>Tersedia T-Shirt, Hoodie, dan Sweater.</p>
                  <a
                    href="https://wa.link/43bkwd"
                    target="_blank"
                    className="btn mt-3 w-100"
                  >
                    <i className="fas fa-hand-point-up mr-1"></i> Pesan & Donasi
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 res-margin mb-5">
              <div
                className="image-box text-center icon-1 p-5 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: 0.4,
                  animationName: "fadeInUp",
                }}
              >
                <div className="mb-3">
                  <a href="https://wa.link/43bkwd" target="_blank">
                    <Image
                      className="img-thumbnail"
                      src="/assets/donasi/donasi-kopicoding2.png"
                      width={500}
                      height={500}
                      alt="#KoPiCoding"
                    />
                  </a>
                </div>
                <div className="icon-text">
                  <h3 className="mb-2">#KoPiCoding</h3>
                  <p>Tersedia T-Shirt, Hoodie, dan Sweater.</p>
                  <a
                    href="https://wa.link/43bkwd"
                    target="_blank"
                    className="btn mt-3 w-100"
                  >
                    <i className="fas fa-hand-point-up mr-1"></i> Pesan & Donasi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
