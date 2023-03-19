import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
      <div className="container position-relative">
        <Link className="navbar-brand" href="/">
          <Image
            className="navbar-brand-regular"
            src="/assets/img/logo/logo-sacode.png"
            width={50}
            height={50}
            alt="brand-logo"
          />
          <Image
            className="navbar-brand-sticky"
            src="/assets/img/logo/logo-sacode.png"
            width={50}
            height={50}
            alt="sticky brand-logo"
          />
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="navbarToggler"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-inner">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="navbarToggler"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <nav>
            <ul className="navbar-nav" id="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/kursus"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-laptop-code"></i> Kursus
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="dropdown-submenu">
                    <Link
                      className="dropdown-item dropdown-toggle"
                      href="javascript"
                    >
                      Kelas Offline
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="/kursus-html-css">
                          HTML, CSS
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/kursus-php-mysql"
                        >
                          PHP & MySQL
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/kelas-online">
                      Kelas Online
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/kopicoding">
                      KoPiCoding
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/pelatihan">
                  <i className="fas fa-book-open"></i> Pelatihan
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-globe"></i> Komunitas
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" href="/">
                      SaCode's Weekend
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/komunitas/sacodeweekend/2023"
                        >
                          2023
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/komunitas/sacodeweekend/2022"
                        >
                          2022
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="komunitas/sacodeweekend/2021"
                        >
                          2021
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" href="/">
                      SaCode Live
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/sacode-live-2023"
                        >
                          2023
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn text-white" href="/donasi">
                  <i className="fas fa-hand-point-up"></i> Donasi
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
