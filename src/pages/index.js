import * as React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sam from "../components/Sam";
import Reviews from "../components/Reviews";
import Photoblock from "../components/Photoblock";
import Pricing from "../components/Pricing";
import BookNow from "../components/BookNow";
import Expect from "../components/Expect";
import Contact from "../components/Contact";
import Policies from "../components/Policies";
import Footer from "../components/Footer";

import '../css/index.scss';

const initEventListeners = () => {
  document.body.addEventListener('click', function(event) {
    try {
      var anchor = event.target.dataset.anchor;        
      var el = anchor && document.querySelector(anchor);
      if (el) {
        document.querySelector(anchor).scrollIntoView({behavior: 'smooth'})
      }
    } catch (e) {
      console.log(e);
    }
  });
  
  try {
    var isiOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    if (isiOS) {
      document.querySelectorAll('.map-link').forEach(function(el) {
        el.href = el.href.replace('.google.', '.apple.');
      });
    }
  } catch (e) {
    console.log(e);
  }    
};

const IndexPage = (props) => {
  React.useEffect(initEventListeners);
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Sam />
        <About />
        <Reviews />
        <Photoblock />
        <BookNow />
        <Pricing />
        <Expect />
        <Contact />
      </main>
      <Footer />
      <Policies />
    </>
  )
}

export default IndexPage;


export const Head = () => (
  <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="description" content="Lash is King: The boutique Lash Extention artist is the East Valley. Book an appointment today." />
  <meta name="keywords" content="Lashes, Extentions, Lash Extentions, Beauty, Glamor, Cosmetology, Cosmetics, Makeup, Make Up, " />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />

  <title>Lash is King</title>

  <script async src="https://kit.fontawesome.com/ff23cb93ef.js" crossOrigin="anonymous"></script>

  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400&display=swap" rel="stylesheet" />
  <link  rel="stylesheet" id="u-page-google-font"  href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400&display=swap" />

  <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q1HEYYHTP8"></script>
  <script>{
   `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-Q1HEYYHTP8');`}
  </script>

  
  <script src="https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js" async></script> */
  </>
);






