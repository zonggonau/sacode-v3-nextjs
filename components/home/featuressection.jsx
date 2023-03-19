import Image from "next/image";
import { ImgFetures, ImgFeturesItem } from "@/lib/libimg";

export default function Featuressection() {
  return (
    <>
      <section
        id="mengapa-penting"
        className="section features-area overflow-hidden mt-5 ptb_100"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="section-heading text-center">
                <h2>Mengapa Saat Ini Belajar Coding Penting</h2>
                <p className="d-none d-sm-block mt-4">
                  Perkembangan teknologi di dunia saat ini mendorong anak-anak
                  muda untuk turut berpartisipasi dalam penerapannya di berbagai
                  sektor.
                </p>
                <p className="d-block d-sm-none mt-4">
                  Perkembangan teknologi di dunia saat ini mendorong anak-anak
                  muda untuk turut berpartisipasi dalam penerapannya di berbagai
                  sektor.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="features-slider-wrapper overflow-hidden">
                <ul className="features-slider owl-carousel">
                  {ImgFetures.map((item, index) => {
                    return (
                      <li className="slide-item" key={index}>
                        <Image src={item.img} width={300} height={300} alt="" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 pt-4 pt-md-0">
              <ul className="features-item">
                {ImgFeturesItem.map((item, index) => {
                  return (
                    <li key={index}>
                      <div
                        className="image-box media icon-1 px-1 py-3 py-md-4 wow fadeInRight"
                        data-aos-duration="2s"
                        data-wow-delay={"0." + `${index}` + 2 + "s"}
                      >
                        <div className="featured-img mr-3">
                          <Image
                            className="avatar-sm"
                            src={item.img}
                            width={50}
                            height={50}
                            alt=""
                          />
                        </div>
                        <div className="icon-text media-body align-self-center align-self-md-start">
                          <h3 className="mb-2">Menambah Pengetahuan</h3>
                          <p>
                            Siapa saja dapat belajar coding. Dengan pengetahuan
                            tambahan ini, kapasitas pun dapat meningkat.
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
