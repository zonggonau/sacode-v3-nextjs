export default function Footer() {
  return (
    <>
      <div className="height-emulator d-none d-lg-block"></div>
      <footer className="footer-area footer-fixed">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-items">
                  <img src="/assets/img/avatar/footer-avatar.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                  <div className="copyright-left">
                    <a
                      href="https://instagram.com/sacode.official"
                      target="_blank"
                      className="mr-2"
                    >
                      <i className="fab fa-instagram"></i> Instagram
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      className="mr-2"
                    >
                      <i className="fab fa-linkedin"></i> Linkedin
                    </a>
                    <a
                      href="https://fb.me/sacode.official"
                      target="_blank"
                      className="mr-2"
                    >
                      <i className="fab fa-facebook"></i> Facebook
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCXo-R3CHFiX8UTgnKbqu3ag"
                      target="_blank"
                      className=""
                    >
                      <i className="fab fa-youtube"></i> Youtube
                    </a>
                  </div>
                  <div className="copyright-right">
                    &copy; Copyrights 2021 <b>SaCode</b> All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
