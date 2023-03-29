import Image from "next/image";
import Link from "next/link";
import { getSacodeWeekendBySlug } from "@/lib/api";
import Footerconfig from "@/components/config/footerconfig";

export default async function page({ params }) {
  const { data } = await getSacodeWeekendBySlug(params.slug);
  console.log(data);
  return (
    <div>
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
                <h1 style={{ color: "#201a84" }}>SaCode Weekend</h1>
                <h3 className="text-dark my-2 text-capitalize">
                  <i className="fas fa-laptop-code mr-2"></i> {data.topic}
                </h3>

                <p className="my-4">{data.about}</p>
                {/* <Link href="/daftar" className="btn scroll">
                  <i className="fas fa-book-open mr-2"></i> Daftar Sekarang
                </Link> */}
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div
                className="welcome-thumb"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <Image
                  src={`https://adminpanel.sacode.web.id/file/poster/${data.poster}`}
                  width={500}
                  height={500}
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
    </div>
  );
}
