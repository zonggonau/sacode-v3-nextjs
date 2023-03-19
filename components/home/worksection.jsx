import Image from "next/image";
export default function WorkSection() {
  return (
    <>
      <section className="section work-area bg-overlay overflow-hidden ptb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="work-content text-center">
                <h2 className="text-white">Mengapa bergabung dengan SaCode?</h2>
                <p className="d-none d-sm-block text-white my-3 mt-sm-4 mb-sm-5">
                  Perkembangan teknologi digital di dunia telah menciptakan
                  banyak perubahan di berbagai bidang. Anak-anak muda diharapkan
                  dapat mempersiapkan diri dengan pengetahuan dan skil yang
                  cukup sehingga mampu berkontribusi bagi masyarakatnya.
                </p>
                <p className="d-block d-sm-none text-white my-3">
                  Perkembangan teknologi digital di dunia telah menciptakan
                  banyak perubahan di berbagai bidang. Anak-anak muda diharapkan
                  dapat mempersiapkan diri dengan pengetahuan dan skil yang
                  cukup sehingga mampu berkontribusi bagi masyarakatnya.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="single-work text-center p-3">
                <div className="work-icon">
                  <Image
                    className="avatar-lg"
                    src="/assets/img/screenshots/sacode-avatar-200-johan.png"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <h3 className="text-white py-3">Belajar</h3>
                <p className="text-white">
                  Menambah ilmu baru dan meningkatkan skil atau keterampilan
                  pribadi. Mempersiapkan diri dengan pengalaman baru melalui
                  diskusi dan studi kasus.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="single-work text-center p-3">
                <div className="work-icon">
                  <Image
                    className="avatar-lg"
                    src="/assets/img/screenshots/sacode-avatar-200-amel.png"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <h3 className="text-white py-3">Ciptakan</h3>
                <p className="text-white">
                  Bergabung dengan komunitas dan membentuk kelompok belajar.
                  Mengerjakan studi kasus, membuat produk-produk digital dan
                  membentuk portofolio pribadi.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="single-work text-center p-3">
                <div className="work-icon">
                  <Image
                    className="avatar-lg"
                    src="/assets/img/screenshots/sacode-avatar-200-theis.png"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <h3 className="text-white py-3">Bagikan</h3>
                <p className="text-white">
                  Pengetahuan dan pengalaman dibagikan kepada sesama anggota
                  komunitas tapi juga kepada masyarakat umum sebagai bentuk
                  literasi digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
