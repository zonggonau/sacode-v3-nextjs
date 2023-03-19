import Image from "next/image";
export default function ScreenshotsSection() {
  return (
    <section id="screenshots" className="section screenshots-area ptb_100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="section-heading text-center">
              <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                <i className="far fa-lightbulb text-primary mr-1"></i>
                <span className="text-primary">Aktifitas</span>
                SaCode
              </span>
              <h2 className="text-capitalize">Belajar &amp; Berbagi</h2>
              <p className="d-none d-sm-block mt-4">
                Aktifitas dilaksanakan secara online dan offline. Anggota atau
                peserta yang dapat belajar dan berbagi pengetahuan bersama.
              </p>
              <p className="d-block d-sm-none mt-4">
                Aktifitas dilaksanakan secara online dan offline. Anggota atau
                peserta yang dapat belajar dan berbagi pengetahuan bersama.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="app-screenshots">
              <div className="single-screenshot">
                <Image
                  src="/assets/img/screenshots/sacode-pic-1.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
              <div className="single-screenshot">
                <Image
                  src="/assets/img/screenshots/sacode-pic-2.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
              <div className="single-screenshot">
                <Image
                  src="/assets/img/screenshots/sacode-pic-3.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
              <div className="single-screenshot">
                <Image
                  src="/assets/img/screenshots/sacode-pic-4.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
              <div className="single-screenshot">
                <Image
                  src="/assets/img/screenshots/sacode-pic-5.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
