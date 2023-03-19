import Script from "next/script";
export default function Footerconfig() {
  return (
    <>
      <Script src="assets/js/plugins/plugins.min.js" strategy="lazyOnload" />
      <Script
        src="plugin/components/jquery/jquery-1.9.0.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="plugin/components/moment/moment.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="plugin/components/moment/moment-timezone-with-data.min.js"
        strategy="lazyOnload"
      />
      <Script src="plugin/czm-chat-support.min.js" strategy="lazyOnload" />
      <Script src="assets/wa.js" strategy="lazyOnload" />
      <Script src="assets/js/jquery/jquery.min.js" strategy="lazyOnload" />
      <Script src="assets/js/bootstrap/popper.min.js" strategy="lazyOnload" />
      <Script
        src="assets/js/bootstrap/bootstrap.min.js"
        strategy="lazyOnload"
      />
      <Script src="assets/js/active.js" strategy="lazyOnload" />
    </>
  );
}
