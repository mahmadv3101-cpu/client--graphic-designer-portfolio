'use client';

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projects = [
  { name: 'NOVA', subtitle: 'Brand Identity', category: 'branding', image: '/portfolio/nova.jpg', tone: 'lime', description: 'A modular identity study built around architectural geometry, disciplined typography and a sharp acid-green accent.' },
  { name: 'MONO', subtitle: 'Logo System', category: 'logos', image: '/portfolio/mono.jpg', tone: 'cream', description: 'A restrained wordmark and monogram exploration inspired by structure, balance and quiet confidence.' },
  { name: 'VANTA', subtitle: 'Social Campaign', category: 'social', image: '/portfolio/vanta.jpg', tone: 'pink', description: 'A high-energy social series pairing vivid color fields with oversized campaign typography.' },
  { name: 'SHIFT', subtitle: 'Advertising', category: 'banners', image: '/portfolio/shift.jpg', tone: 'orange', description: 'A bold advertising direction that uses movement, compressed type and cinematic cropping to command attention.' },
  { name: 'AURA', subtitle: 'Packaging Concept', category: 'packaging', image: '/portfolio/aura.jpg', tone: 'olive', description: 'A premium skincare packaging study shaped by tactility, calm proportions and editorial restraint.' },
  { name: 'FORM', subtitle: 'Poster Series', category: 'posters', image: '/portfolio/color.jpg', tone: 'blue', description: 'An experimental poster sequence exploring rhythm, color, scale and typographic tension.' },
  { name: 'ORBIT', subtitle: 'Visual Identity', category: 'branding', image: '/portfolio/orbit.jpg', tone: 'rust', description: 'A cultural identity concept built around circular systems, motion and a warm modernist palette.' },
  { name: 'NEXA', subtitle: 'Digital Design', category: 'digital', image: '/portfolio/nexa.jpg', tone: 'lime', description: 'A flexible digital graphic system for editorial campaigns, launch moments and screen-first storytelling.' },
];

const filters = [['all','ALL'],['branding','BRANDING'],['logos','LOGOS'],['social','SOCIAL'],['banners','BANNERS'],['posters','POSTERS'],['packaging','PACKAGING'],['digital','DIGITAL']];

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  return (
    <Dialog>
      <DialogTrigger className={`project-card project-${index + 1}`} aria-label={`Open ${project.name} project`}>
        <span className={`art art-${project.tone}`}>
          <img src={project.image} width="1600" height="1100" loading={index < 2 ? 'eager' : 'lazy'} alt={`${project.name} ${project.subtitle} demo visual`} />
          <span className="art-word">{project.name}</span><span className="art-mark">✦</span><span className="art-note">VISUAL STUDY / 2026</span>
        </span>
        <span className="project-meta"><span><b>{String(index + 1).padStart(2,'0')}</b> {project.name} — {project.subtitle}</span><span>CONCEPT PROJECT ↗</span></span>
      </DialogTrigger>
      <DialogContent className="project-dialog" showCloseButton>
        <div className={`dialog-art art-${project.tone}`}><img src={project.image} width="1600" height="1100" alt={`${project.name} concept project visual`} /><span className="art-word">{project.name}</span></div>
        <div className="dialog-copy"><p className="micro">CONCEPT / DEMO PROJECT · {project.subtitle.toUpperCase()}</p><DialogTitle>{project.name}</DialogTitle><DialogDescription>{project.description} The photography is a licensed demo visual and will be replaced by Ayyan&apos;s final project assets.</DialogDescription><div className="dialog-index"><span>01 — DIRECTION</span><span>02 — TYPOGRAPHY</span><span>03 — COLOR</span><span>04 — APPLICATION</span></div></div>
      </DialogContent>
    </Dialog>
  );
}

function ProjectGrid({ category }: { category: string }) {
  const visible = category === 'all' ? projects : projects.filter((project) => project.category === category);
  return <div className={`project-grid ${category !== 'all' ? 'filtered-grid' : ''}`}>{visible.map((project, index) => <ProjectCard key={project.name} project={project} index={category === 'all' ? projects.indexOf(project) : index} />)}</div>;
}

function SectionTitle({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading reveal"><span className="micro">{number} / {eyebrow}</span><h2>{title}<i>↙</i></h2>{copy && <p>{copy}</p>}</div>;
}

export default function Home() {
  return (
    <>
      <header className="site-nav">
        <a className="wordmark" href="#top">AYYAN KHAN<span>®</span></a>
        <nav aria-label="Primary navigation"><a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#services">SERVICES</a><a href="#contact">CONTACT</a></nav>
        <a className="nav-cta desktop-cta" href="mailto:ayyankhanak20@gmail.com">LET&apos;S TALK ↗</a>
        <Sheet><SheetTrigger className="menu-trigger">MENU</SheetTrigger><SheetContent className="mobile-sheet"><SheetTitle>AYYAN KHAN</SheetTitle><SheetDescription>GRAPHIC DESIGNER</SheetDescription><div className="mobile-links">{[['WORK','#work'],['ABOUT','#about'],['SERVICES','#services'],['CONTACT','#contact']].map(([label,href])=><SheetClose key={label} render={<a href={href} />}>{label}<span>↘</span></SheetClose>)}</div><a className="sheet-contact" href="mailto:ayyankhanak20@gmail.com">LET&apos;S TALK ↗</a></SheetContent></Sheet>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-top micro"><span>INDEPENDENT GRAPHIC DESIGNER</span><span>PAKISTAN / AVAILABLE WORLDWIDE</span></div>
          <div className="hero-name"><h1>AYYAN</h1><div className="hero-portrait"><img src="/portfolio/hero.jpg" width="1000" height="1300" alt="Licensed editorial demo portrait; this person is not Ayyan Khan" /><span>DEMO PORTRAIT<br/>NOT AYYAN KHAN</span></div><h1>KHAN<span>.</span></h1></div>
          <div className="hero-lower"><p className="hero-role">GRAPHIC<br/>DESIGNER</p><div className="hero-copy"><p>I TURN IDEAS INTO BOLD <em>VISUAL EXPERIENCES.</em></p><span>Creating distinctive identities, digital visuals and creative designs that make brands stand out.</span><div className="hero-actions"><a href="#work">VIEW MY WORK ↘</a><a href="mailto:ayyankhanak20@gmail.com">LET&apos;S TALK ↗</a></div></div></div>
          <div className="hero-foot micro"><span>BRANDING · SOCIAL · PRINT · DIGITAL</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section id="work" className="section work-section">
          <SectionTitle number="01" eyebrow="THE PORTFOLIO" title="SELECTED WORK" copy="A curated exploration of identity, advertising and visual communication." />
          <Tabs defaultValue="all" className="work-tabs">
            <TabsList variant="line" className="filter-list" aria-label="Filter projects">{filters.map(([value,label])=><TabsTrigger value={value} key={value}>{label}</TabsTrigger>)}</TabsList>
            {filters.map(([value])=><TabsContent value={value} key={value}><ProjectGrid category={value} /></TabsContent>)}
          </Tabs>
          <p className="integrity-note">All work shown is concept or demo work. Licensed photography is used as temporary visual material and is never presented as client work.</p>
        </section>

        <section className="light-section identity-section">
          <SectionTitle number="02" eyebrow="IDENTITY SYSTEMS" title="BRAND IDENTITY" />
          <div className="identity-stage reveal"><div className="identity-copy"><span className="micro">NOVA / CONCEPT PROJECT</span><h3>N<span>✦</span>VA</h3><p>Structure meets energy. A modular identity direction with a clear voice and unapologetic visual presence.</p></div><div className="identity-image"><img src="/portfolio/nova.jpg" width="1600" height="1100" loading="lazy" alt="NOVA concept identity over a licensed architecture demo visual" /></div><div className="swatches"><i></i><i></i><i></i><i></i></div></div>
          <div className="logo-wall reveal"><span>NOVA</span><span className="serif">orbit</span><span>NE/XA</span><span className="outline">FORM</span><span>VANTA✦</span><span className="mono">M·O</span></div>
          <p className="logo-caption micro">LOGO DESIGN / CONCEPT & DEMO WORK</p>
        </section>

        <section className="section campaign-section">
          <SectionTitle number="03" eyebrow="CAMPAIGN SYSTEMS" title="SOCIAL MEDIA" />
          <div className="social-stage reveal"><div className="phone-post"><img src="/portfolio/vanta.jpg" width="1200" height="1200" loading="lazy" alt="VANTA social campaign demo visual"/><span>01/03</span><b>VANTA</b></div><div className="phone-post shift"><img src="/portfolio/color.jpg" width="1200" height="1200" loading="lazy" alt="SHIFT social campaign demo visual"/><span>02/03</span><b>SHIFT</b></div><div className="phone-post"><img src="/portfolio/shift.jpg" width="1200" height="1200" loading="lazy" alt="FORM social campaign demo visual"/><span>03/03</span><b>FORM</b></div></div>
          <div className="banner-stage reveal"><img src="/portfolio/shift.jpg" width="1800" height="900" loading="lazy" alt="SHIFT banner and advertising concept demo visual"/><div><span className="micro">BANNER & ADVERTISING / CONCEPT</span><h3>SHIFT YOUR<br/>PERSPECTIVE.</h3><p>Campaign thinking made visible through scale, tension and motion.</p></div></div>
        </section>

        <section className="light-section poster-section">
          <SectionTitle number="04" eyebrow="EXPERIMENTS IN TYPE" title="POSTER DESIGN" />
          <div className="poster-grid reveal"><article className="poster p1"><span>F—01</span><h3>FORM</h3><b>MATTER<br/>IN MOTION</b></article><article className="poster p2"><img src="/portfolio/color.jpg" width="900" height="1200" loading="lazy" alt="FORM experimental poster demo visual"/><h3>NEW<br/>SHAPES</h3></article><article className="poster p3"><span>V—03</span><h3>VISUAL<br/>NOISE</h3><i>●</i></article><article className="poster p4"><img src="/portfolio/orbit.jpg" width="900" height="1200" loading="lazy" alt="ORBIT cultural poster demo visual"/><b>ORBIT / 2026</b></article></div>
        </section>

        <section className="section packaging-section">
          <SectionTitle number="05" eyebrow="TACTILE OBJECTS" title="PACKAGING" />
          <div className="packaging-stage reveal"><div className="package-copy"><span className="micro">AURA / CONCEPT PROJECT</span><h3>Quiet by<br/>design.</h3><p>A packaging direction built around softness, natural material and timeless typography.</p><div className="pack-colors"><i></i><i></i><i></i></div></div><img src="/portfolio/aura.jpg" width="1600" height="1200" loading="lazy" alt="AURA packaging concept using licensed skincare photography"/></div>
        </section>

        <section className="digital-section light-section"><SectionTitle number="06" eyebrow="MADE FOR SCREENS" title="DIGITAL DESIGN" /><div className="digital-stage reveal"><img src="/portfolio/nexa.jpg" width="1600" height="1000" loading="lazy" alt="NEXA digital design concept visual"/><div className="digital-card"><span>NE<span>X</span>A</span><p>IDEAS<br/>IN MOTION</p><small>CONCEPT DIGITAL PUBLICATION</small></div></div></section>

        <section id="about" className="about-section section"><span className="micro">07 / ABOUT ME</span><div className="about-grid reveal"><h2>DESIGN WITH<br/>PURPOSE.<br/><em>CREATE WITH IMPACT.</em></h2><div><p>I&apos;m Ayyan Khan, a graphic designer passionate about transforming ideas into strong visual identities and memorable creative experiences.</p><p>I work across branding, digital design, social media and visual communication.</p><a href="mailto:ayyankhanak20@gmail.com">START A CONVERSATION ↗</a></div></div></section>

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
