import Script from "next/script";

export default function Social() {
  return (
    <>
      <div id="social-links">
        <a href="https://www.instagram.com/esclerosepunk/" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="https://www.youtube.com/@esclerosepunk" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-youtube"></ion-icon>
        </a>
      </div>

      {/* O Next.js gerencia o carregamento desses scripts em segundo plano */}
      <Script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        strategy="lazyOnload"
      />
      <Script
        noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        strategy="lazyOnload"
      />
    </>
  );
}