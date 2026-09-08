'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    const handlePointerMove = (event: PointerEvent) => {
      root.style.setProperty('--pointer-x', `${event.clientX}px`);
      root.style.setProperty('--pointer-y', `${event.clientY}px`);
    };
    const handlePointerDown = (event: PointerEvent) => {
      const pulse = document.createElement('span');
      pulse.className = 'click-pulse';
      pulse.style.left = `${event.clientX}px`;
      pulse.style.top = `${event.clientY}px`;
      document.body.appendChild(pulse);
      pulse.addEventListener('animationend', () => pulse.remove(), { once: true });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <a className="back-to-top" href="#top" aria-label="Back to top">↑</a>
      <main id="top">
        <section className="hero reference-cover">
          <div className="cover-top micro"><span>GRAPHIC DESIGN PORTFOLIO</span><span>AYYAN KHAN · 2026</span></div>
          <div className="cover-stage">
            <div className="cover-kicker">Graphic <span>Design</span></div>
            <div className="cover-selection" aria-label="Portfolio by Ayyan Khan">
              <i className="handle h1"/><i className="handle h2"/><i className="handle h3"/><i className="handle h4"/><i className="handle h5"/><i className="handle h6"/><i className="handle h7"/><i className="handle h8"/>
              <h1>Portf<span className="cover-orb" aria-hidden="true"></span>lio</h1>
            </div>
            <p className="cover-signature">Ayyan Khan <span>↘</span></p>
            <p className="cover-role">GRAPHIC<br/>DESIGNER</p>
          </div>
          <div className="cover-bottom">
            <p>Brand identity, social media, print and digital design shaped with bold ideas and clear visual thinking.</p>
            <div className="hero-actions"><a href="#logos">EXPLORE WORK ↘</a><a href="#contact">START A PROJECT ↗</a></div>
          </div>
          <div className="hero-foot micro"><span>PAKISTAN · AVAILABLE WORLDWIDE</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section id="about" className="paper-about">
          <div className="about-written">About me <span>↘</span></div>
          <div className="about-text reveal">
            <h2>Hello!</h2>
            <h3>I am Ayyan Khan.</h3>
            <h4>Greetings ladies &amp; gentlemen.</h4>
            <p>I&apos;m a creative and motivated graphic designer with a strong passion for visual storytelling and brand design. I enjoy exploring new challenges that push my creativity and help me deliver clear, memorable visual work.</p>
            <p>I&apos;m always learning new techniques across branding, social media, print and digital design.</p>
          </div>
          <div className="about-image reveal"><img src="/portfolio/about-reference.png" width="1648" height="873" alt="Pencil portrait of Ayyan Khan"/></div>
        </section>

        <section className="toc-section">
          <div className="toc-heading"><em>Table Of</em><h2>Contents</h2></div>
          <div className="toc-frame selection-frame reveal">
            <div className="toc-grid">
              {[
                ['01','Logo','Folio','#logos'],['02','Branding','Design','#branding'],['03','Social Media','Posts','#social'],
                ['04','Packaging','Design','#packaging'],['05','Print Media','Design','#posters'],['06','UI UX','Design','#digital']
              ].map(([number,title,script,href])=><a href={href} key={number}><span>{number}</span><b>{title}</b><em>{script}</em></a>)}
            </div>
          </div>
        </section>

        <section id="work" className="light-section identity-section">
          <div id="logos" className="folio-intro dark-title-card reveal"><div className="selection-frame"><h2>Logo Folio</h2></div><p>Selected logo work created for distinct brands, voices and visual personalities.</p></div>
          <div className="logo-wall logo-image-wall reveal">
            <figure><img src="/portfolio/client/logo-liceria.png" alt="Liceria Body and Hair Treatment logo"/><figcaption>LICERIA</figcaption></figure>
            <figure><img src="/portfolio/client/logo-sanvi-bhatt.png" alt="Sanvi Bhatt graphic designer logo"/><figcaption>SANVI BHATT</figcaption></figure>
            <figure><img src="/portfolio/client/logo-liceria-store.png" alt="Liceria Store logo"/><figcaption>LICERIA STORE</figcaption></figure>
            <figure><img src="/portfolio/client/logo-arrowai.png" alt="ArrowAI Industries logo"/><figcaption>ARROWAI INDUSTRIES</figcaption></figure>
            <figure><img src="/portfolio/client/logo-matt-zhang.png" alt="Matt Zhang Company logo"/><figcaption>MATT ZHANG</figcaption></figure>
            <figure className="ourvita-logo"><img src="/portfolio/client/ourvita-logo-rationale.png" alt="Ourvita cosmetics logo"/><figcaption>OURVITA</figcaption></figure>
          </div>
          <p className="logo-caption micro">LOGO DESIGN / SELECTED WORK</p>
          <div id="branding" className="branding-intro dark-title-card reveal"><div className="selection-frame"><h2>Branding</h2></div><p>Ourvita — a complete natural cosmetics identity built around clarity, health and nature.</p></div>
          <div className="brand-gallery reveal">
            <img src="/portfolio/client/ourvita-overview.png" width="1640" height="750" loading="lazy" alt="Ourvita cosmetics brand identity overview"/>
            <img src="/portfolio/client/ourvita-logo-rationale.png" width="1648" height="873" loading="lazy" alt="Ourvita wordmark construction and rationale"/>
            <img src="/portfolio/client/ourvita-branding.png" width="1648" height="873" loading="lazy" alt="Ourvita full branding applications"/>
          </div>
        </section>

        <section id="social" className="section campaign-section category-project">
          <div className="dark-title-card reveal"><div className="selection-frame"><h2>Social Media</h2></div><p>Bold, scroll-stopping concept posts built for modern digital brands.</p></div>
          <div className="social-gallery reveal">
            <img src="/portfolio/client/social-media-01.png" width="1640" height="872" loading="lazy" alt="Social media post design collection displayed in Instagram frames"/>
            <img src="/portfolio/client/social-media-02.png" width="1648" height="873" loading="lazy" alt="Second social media post design collection"/>
          </div>
        </section>

        <section id="posters" className="light-section poster-section category-project">
          <div className="dark-title-card reveal"><div className="selection-frame"><h2>Print Media</h2></div><p>Expressive poster and print studies exploring typography, scale and visual rhythm.</p></div>
          <div className="portfolio-board-gallery reveal">
            <img src="/portfolio/client/print-brochure.png" width="1642" height="862" loading="lazy" alt="Brochure design presentation"/>
            <img src="/portfolio/client/print-billboards.png" width="1640" height="872" loading="lazy" alt="Billboard design presentation"/>
            <img src="/portfolio/client/print-standees.png" width="1648" height="873" loading="lazy" alt="Standee design presentation"/>
          </div>
        </section>

        <section id="packaging" className="section packaging-section category-project">
          <div className="dark-title-card reveal"><div className="selection-frame"><h2>Packaging</h2></div><p>Thoughtful packaging concepts shaped by material, form and brand personality.</p></div>
          <div className="portfolio-board-gallery reveal">
            <img src="/portfolio/client/packaging-set-01.png" width="1640" height="872" loading="lazy" alt="Packaging design collection with dates, beverage, food and cosmetics"/>
            <img src="/portfolio/client/packaging-set-02.png" width="1640" height="872" loading="lazy" alt="Packaging design collection with ice cream, spices, ketchup, lighting and snacks"/>
          </div>
        </section>

        <section id="digital" className="digital-section light-section category-project">
          <div className="dark-title-card reveal"><div className="selection-frame"><h2>UI UX Design</h2></div><p>App and web experiences designed around clarity, discovery and intuitive navigation.</p></div>
          <div className="portfolio-board-gallery reveal">
            <img src="/portfolio/client/uiux-poppy-overview.png" width="1648" height="873" loading="lazy" alt="Poppy streaming app UI and UX project overview"/>
            <img src="/portfolio/client/uiux-poppy-screens.png" width="1640" height="872" loading="lazy" alt="Poppy streaming app main screens"/>
            <img src="/portfolio/client/uiux-epic-web.png" width="1640" height="872" loading="lazy" alt="Epic Game Store website redesign"/>
          </div>
        </section>

        <a className="thanks-image-section reveal" href="#contact" aria-label="Continue to contact section">
          <img src="/portfolio/client/thanks-scrolling-final.png" width="1545" height="550" loading="lazy" alt="Thanks for scrolling — let's work together"/>
        </a>

        <section id="contact" className="contact-section"><span className="micro">11 / LET&apos;S WORK TOGETHER</span><h2>LET&apos;S CREATE<br/><em>SOMETHING GREAT.</em></h2><p>Have an idea, brand or project in mind? Let&apos;s turn it into something visually memorable.</p><div className="contact-links"><a href="mailto:ayyankhanak20@gmail.com">START A PROJECT ↗</a><a href="tel:03334531414">0333-4531414 ↗</a></div></section>
      </main>

      <footer><div><a className="wordmark" href="#top">AYYAN KHAN<span>®</span></a><p>GRAPHIC DESIGNER</p></div><div className="footer-nav"><a href="#about">ABOUT</a><a href="#logos">LOGOS</a><a href="#branding">BRANDING</a><a href="#social">SOCIAL MEDIA</a><a href="#contact">CONTACT</a></div><div className="footer-contact"><a href="tel:03334531414">0333-4531414</a><a href="mailto:ayyankhanak20@gmail.com">ayyankhanak20@gmail.com</a></div><p className="copyright">© 2026 AYYAN KHAN · GRAPHIC DESIGN PORTFOLIO</p></footer>
    </>
  );
}
