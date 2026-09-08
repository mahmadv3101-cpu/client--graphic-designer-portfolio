'use client';

function SectionTitle({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading reveal"><span className="micro">{number} / {eyebrow}</span><h2>{title}<i>↙</i></h2>{copy && <p>{copy}</p>}</div>;
}

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
            <div className="hero-actions"><a href="#work">EXPLORE WORK ↘</a><a href="mailto:ayyankhanak20@gmail.com">START A PROJECT ↗</a></div>
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
          <div className="about-image reveal"><img src="/portfolio/about-reference.png" width="1648" height="873" alt="Temporary reference portrait from the supplied portfolio screenshot"/><small>REFERENCE PORTRAIT · TEMPORARY DEMO VISUAL</small></div>
        </section>

        <section className="toc-section">
          <div className="toc-heading"><em>Table Of</em><h2>Contents</h2></div>
          <div className="toc-frame selection-frame reveal">
            <div className="toc-grid">
              {[
                ['01','Logo','Folio','#logos'],['02','Branding','Design','#branding'],['03','Social Media','Posts','#social'],
                ['04','Packaging','Design','#packaging'],['05','Print Media','Design','#posters'],['06','Digital','Design','#digital']
              ].map(([number,title,script,href])=><a href={href} key={number}><span>{number}</span><b>{title}</b><em>{script}</em></a>)}
            </div>
          </div>
        </section>

        <section id="work" className="light-section identity-section">
          <div id="logos" className="folio-intro dark-title-card reveal"><div className="selection-frame"><h2>Logo Folio</h2></div><p>Concept logo directions designed to explore distinct voices, symbols and visual personalities.</p></div>
          <div className="logo-wall reveal"><span>NOVA</span><span className="serif">orbit</span><span>NE/XA</span><span className="outline">FORM</span><span>VANTA✦</span><span className="mono">M·O</span></div>
          <p className="logo-caption micro">LOGO DESIGN / CONCEPT & DEMO WORK</p>
          <div id="branding" className="branding-intro dark-title-card reveal"><div className="selection-frame"><h2>Branding</h2></div><p>Brand identity studies focused on creating memorable visual languages with a clear purpose.</p></div>
          <div className="identity-stage reveal"><div className="identity-copy"><span className="micro">NOVA / CONCEPT PROJECT</span><h3>N<span>✦</span>VA</h3><p>Structure meets energy. A modular identity direction with a clear voice and unapologetic visual presence.</p></div><div className="identity-image"><img src="/portfolio/nova.jpg" width="1600" height="1100" loading="lazy" alt="NOVA concept identity over a licensed architecture demo visual" /></div><div className="swatches"><i></i><i></i><i></i><i></i></div></div>
        </section>

        <section id="social" className="section campaign-section category-project">
          <div className="dark-title-card reveal"><div className="selection-frame"><h2>Social Media</h2></div><p>Bold, scroll-stopping concept posts built for modern digital brands.</p></div>
          <div className="social-stage reveal"><div className="phone-post"><img src="/portfolio/vanta.jpg" width="1200" height="1200" loading="lazy" alt="VANTA social campaign demo visual"/><span>01/03</span><b>VANTA</b></div><div className="phone-post shift"><img src="/portfolio/color.jpg" width="1200" height="1200" loading="lazy" alt="SHIFT social campaign demo visual"/><span>02/03</span><b>SHIFT</b></div><div className="phone-post"><img src="/portfolio/shift.jpg" width="1200" height="1200" loading="lazy" alt="FORM social campaign demo visual"/><span>03/03</span><b>FORM</b></div></div>
          <div className="banner-stage reveal"><img src="/portfolio/shift.jpg" width="1800" height="900" loading="lazy" alt="SHIFT banner and advertising concept demo visual"/><div><span className="micro">BANNER & ADVERTISING / CONCEPT</span><h3>SHIFT YOUR<br/>PERSPECTIVE.</h3><p>Campaign thinking made visible through scale, tension and motion.</p></div></div>
        </section>

        <section id="posters" className="light-section poster-section category-project">
          <div className="dark-title-card reveal"><div className="selection-frame"><h2>Print Media</h2></div><p>Expressive poster and print studies exploring typography, scale and visual rhythm.</p></div>
          <div className="poster-grid reveal"><article className="poster p1"><span>F—01</span><h3>FORM</h3><b>MATTER<br/>IN MOTION</b></article><article className="poster p2"><img src="/portfolio/color.jpg" width="900" height="1200" loading="lazy" alt="FORM experimental poster demo visual"/><h3>NEW<br/>SHAPES</h3></article><article className="poster p3"><span>V—03</span><h3>VISUAL<br/>NOISE</h3><i>●</i></article><article className="poster p4"><img src="/portfolio/orbit.jpg" width="900" height="1200" loading="lazy" alt="ORBIT cultural poster demo visual"/><b>ORBIT / 2026</b></article></div>
        </section>

        <section id="packaging" className="section packaging-section category-project">
          <div className="dark-title-card reveal"><div className="selection-frame"><h2>Packaging</h2></div><p>Thoughtful packaging concepts shaped by material, form and brand personality.</p></div>
          <div className="packaging-stage reveal"><div className="package-copy"><span className="micro">AURA / CONCEPT PROJECT</span><h3>Quiet by<br/>design.</h3><p>A packaging direction built around softness, natural material and timeless typography.</p><div className="pack-colors"><i></i><i></i><i></i></div></div><img src="/portfolio/aura.jpg" width="1600" height="1200" loading="lazy" alt="AURA packaging concept using licensed skincare photography"/></div>
        </section>

        <section id="digital" className="digital-section light-section category-project"><div className="dark-title-card reveal"><div className="selection-frame"><h2>UI UX Design</h2></div><p>Clear, modern interface concepts created for intuitive digital experiences.</p></div><div className="digital-stage reveal"><img src="/portfolio/nexa.jpg" width="1600" height="1000" loading="lazy" alt="NEXA UI and UX design concept visual"/><div className="digital-card"><span>NE<span>X</span>A</span><p>IDEAS<br/>IN MOTION</p><small>CONCEPT DIGITAL EXPERIENCE</small></div></div></section>

        <section className="light-section expertise-section"><SectionTitle number="08" eyebrow="CAPABILITIES" title="EXPERTISE" /><div className="expertise-grid reveal">{['GRAPHIC DESIGN','BRAND IDENTITY','LOGO DESIGN','SOCIAL MEDIA DESIGN','ADVERTISING DESIGN','POSTER DESIGN','PACKAGING DESIGN','VISUAL COMMUNICATION','TYPOGRAPHY','DIGITAL DESIGN'].map((item,index)=><div key={item}><span>{String(index+1).padStart(2,'0')}</span><p>{item}</p></div>)}</div><div className="tools"><span className="micro">TOOLS</span>{['ADOBE PHOTOSHOP','ADOBE ILLUSTRATOR','FIGMA','CANVA'].map(tool=><b key={tool}>{tool}</b>)}</div></section>

        <section id="services" className="section services-section"><SectionTitle number="09" eyebrow="SERVICES" title="WHAT I DO" /><div className="service-list reveal">{[
          ['BRAND IDENTITY','Creating cohesive visual systems that give brands a distinctive personality.'],['LOGO DESIGN','Creating memorable logos built around strong concepts and visual clarity.'],['SOCIAL MEDIA DESIGN','Creating engaging visual content for modern digital platforms.'],['ADVERTISING DESIGN','Creating visually strong promotional graphics and campaign assets.'],['PRINT & POSTER DESIGN','Creating expressive print communication and promotional materials.'],['CREATIVE & DIGITAL DESIGN','Creating digital graphics and visual communication for modern brands.']
        ].map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p><i>↗</i></article>)}</div></section>

        <section className="process-section light-section"><SectionTitle number="10" eyebrow="THE METHOD" title="MY PROCESS" /><div className="process-grid reveal">{[['DISCOVER','Understand the brand, audience and objective.'],['EXPLORE','Research ideas and establish creative directions.'],['DESIGN','Transform the selected direction into polished visual work.'],['DELIVER','Prepare final assets for digital and print use.']].map(([title,copy],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

        <section id="contact" className="contact-section"><span className="micro">11 / LET&apos;S WORK TOGETHER</span><h2>LET&apos;S CREATE<br/><em>SOMETHING GREAT.</em></h2><p>Have an idea, brand or project in mind? Let&apos;s turn it into something visually memorable.</p><div className="contact-links"><a href="mailto:ayyankhanak20@gmail.com">START A PROJECT ↗</a><a href="tel:03334531414">0333-4531414 ↗</a></div></section>
      </main>

      <footer><div><a className="wordmark" href="#top">AYYAN KHAN<span>®</span></a><p>GRAPHIC DESIGNER</p></div><div className="footer-nav"><a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#services">SERVICES</a><a href="#contact">CONTACT</a></div><div className="footer-contact"><a href="tel:03334531414">0333-4531414</a><a href="mailto:ayyankhanak20@gmail.com">ayyankhanak20@gmail.com</a></div><p className="copyright">© 2026 AYYAN KHAN · DEMO PORTFOLIO · PHOTOGRAPHY FROM PEXELS</p></footer>
    </>
  );
}
