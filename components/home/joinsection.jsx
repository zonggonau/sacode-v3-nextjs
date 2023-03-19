export default function JoinSection() {
  return (
    <>
      <section className="section download-area overlay-dark ptb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9">
              <div className="download-text text-center">
                <h2 className="text-white font-weight-bold">
                  Ingin belajar atau berbagi?
                </h2>
                <p className="text-white my-3 d-none d-sm-block">
                  Hubungi tim SaCode dan dapatkan manfaat positif bersama
                  komunitas.
                </p>
                <p className="text-white my-3 d-block d-sm-none">
                  Hubungi tim SaCode dan dapatkan manfaat positif bersama
                  komunitas.
                </p>
                <div className="button-group store-buttons d-flex justify-content-center">
                  <a
                    href="https://wa.link/tk4ff3"
                    className="btn btn-lg btn-primary"
                  >
                    <i className="fas fa-mobile-alt mr-1"></i> Hubungi Tim
                    melalui WhatsApp
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
