import Image from "next/image";
import Link from "next/link";
import { getAllSacodeWeekend } from "@/lib/api";
import Footerconfig from "@/components/config/footerconfig";
export default async function Sacodeweekend() {
  const { data } = await getAllSacodeWeekend();

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
            <div className="welcome-intro">
              <h1 style={{ color: "#210a84" }}>
                <i className="fas fa-users"></i> <br /> SaCode's <br /> Weekend
                2023
              </h1>
              <p className="my-4">
                Berdiskusi, membangun jaringan dan berkembang bersama <br />{" "}
                anggota komunitas. Belajar - Ciptakan - Bagikan.
              </p>
              <a href="#topik-2023" target="_blank" className="btn scroll">
                {" "}
                <i className="fas fa-book-open mr-1"></i>Topik & Speaker di
                Tahun 2023
              </a>
            </div>
            <div className="col-12 col-md-5">
              <div
                className="welcome-thumb"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <Image
                  src="/assets/img/avatar/sacode-illustration-janzen.png"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="topik-2023" className="review-area ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-7">
              <div className="section-heading">
                <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                  <i className="far fa-lightbulb text-primary mr-1"></i>
                  <span className="text-primary">Topik</span>
                  2023
                </span>
                <h2>SaCode's Weekend 2023</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((item, index) => {
              if (item.status === "active") {
                return (
                  <div className="col-12 col-md-6 col-lg-4 mb-5 res-margin">
                    <Link href={`/komunitas/sacodeweekend/2023/${item.id}`}>
                      <div className="single-review card">
                        <div className="card-top p-4">
                          <h4 className="text-primary mt-4 mb-3">
                            {item.topic}
                          </h4>

                          <div className="review-text">
                            <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                              <i className="fas fa-calendar mr-1"></i>{" "}
                              {item.date}
                            </span>{" "}
                            <br />
                            <span className="badge badge-dark bg-light mt-2 fw-3 text-dark">
                              <i className="fas fa-clock mr-1"></i> {item.time}{" "}
                              WIT
                            </span>
                            <hr />
                            {/* <span>
                          <a
                            href="https://www.instagram.com/p/ClYVQ-ZBjyq/"
                            className="badge p-2"
                            target="_blank"
                          >
                            <i className="fas fa-info-circle mr-1"></i> Informasi
                            Lengkap
                          </a>
                        </span> */}
                          </div>

                          <div className="quot-icon">
                            <Image
                              className="avatar-md"
                              src="/assets/img/icon/quote.png"
                              alt=""
                              width={500}
                              height={500}
                            />
                          </div>
                        </div>

                        <div className="reviewer media bg-gray p-4">
                          <div className="reviewer-thumb">
                            <Image
                              className="avatar-lg radius-100"
                              src={`https://adminpanel.sacode.web.id/storage/${item.profile_picture}`}
                              alt=""
                              width={500}
                              height={500}
                            />
                          </div>

                          <div className="reviewer-meta media-body align-self-center ml-4">
                            <h5 className="reviewer-name color-primary mb-2">
                              {item.first_name} {item.last_name}
                            </h5>
                            <h6 className="text-secondary fw-3">
                              {item.job_title}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
