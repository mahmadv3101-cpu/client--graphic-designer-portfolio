'use client';

export default function Home() {
  return (
    <>
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
          <div className="awaiting-projects"><span>05 / PRINT MEDIA</span><p>Project images will be added next.</p></div>
        </section>

        <section id="packaging" className="section packaging-section category-project">
          <div className="dark-title-card reveal"><div className="selection-frame"><h2>Packaging</h2></div><p>Thoughtful packaging concepts shaped by material, form and brand personality.</p></div>
          <div className="awaiting-projects dark-placeholder"><span>04 / PACKAGING DESIGN</span><p>Project images will be added next.</p></div>
        </section>

        <section id="digital" className="digital-section light-section category-project"><div className="dark-title-card reveal"><div className="selection-frame"><h2>UI UX Design</h2></div><p>Clear, modern interface concepts created for intuitive digital experiences.</p></div><div className="digital-stage reveal"><img src="/portfolio/nexa.jpg" width="1600" height="1000" loading="lazy" alt="NEXA UI and UX design concept visual"/><div className="digital-card"><span>NE<span>X</span>A</span><p>IDEAS<br/>IN MOTION</p><small>CONCEPT DIGITAL EXPERIENCE</small></div></div></section>

        <section className="thanks-section">
          <div className="thanks-note">Let&apos;s Work<br/>Together</div>
          <div className="thanks-frame reveal">
            <i className="thanks-handle th1"/><i className="thanks-handle th2"/><i className="thanks-handle th3"/><i className="thanks-handle th4"/><i className="thanks-handle th5"/><i className="thanks-handle th6"/><i className="thanks-handle th7"/><i className="thanks-handle th8"/>
            <h2><span>Thanks</span> For Scrolling!</h2>
          </div>
          <a className="thanks-badge badge-top" href="#contact" aria-label="Go to contact section">Ai</a>
          <a className="thanks-badge badge-bottom" href="#contact" aria-label="Go to contact section">Ps</a>
        </section>

        <section id="contact" className="contact-section"><span className="micro">11 / LET&apos;S WORK TOGETHER</span><h2>LET&apos;S CREATE<br/><em>SOMETHING GREAT.</em></h2><p>Have an idea, brand or project in mind? Let&apos;s turn it into something visually memorable.</p><div className="contact-links"><a href="mailto:ayyankhanak20@gmail.com">START A PROJECT ↗</a><a href="tel:03334531414">0333-4531414 ↗</a></div></section>
      </main>

      <footer><div><a className="wordmark" href="#top">AYYAN KHAN<span>®</span></a><p>GRAPHIC DESIGNER</p></div><div className="footer-nav"><a href="#about">ABOUT</a><a href="#logos">LOGOS</a><a href="#branding">BRANDING</a><a href="#social">SOCIAL MEDIA</a><a href="#contact">CONTACT</a></div><div className="footer-contact"><a href="tel:03334531414">0333-4531414</a><a href="mailto:ayyankhanak20@gmail.com">ayyankhanak20@gmail.com</a></div><p className="copyright">© 2026 AYYAN KHAN · GRAPHIC DESIGN PORTFOLIO</p></footer>
    </>
  );
}
