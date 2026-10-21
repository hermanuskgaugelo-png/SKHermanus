import { useEffect, useRef, useState, type FormEvent } from "react";

const profile = {
  name: "Stephanus Kgaugelo Hermanus",
  shortName: "SK Hermanus",
  title: "Chairman “Natural Born Leader”",
  location: "Mamelodi, Tshwane, Gauteng, South Africa, 0122",
  personalEmail: "hermanuskgaugelo@gmail.com",
  businessEmail: "tsammabp@mail.com",
  phones: ["076 158 7168", "060 600 4724"],
};

const navItems = [
  ["About", "#about"],
  ["Rugby & Sports", "#sports"],
  ["Community NPC", "#community"],
  ["Business", "#business"],
  ["Qualifications", "#qualifications"],
  ["Contact", "#contact"],
];

const experiences = [
  {
    number: "01",
    title: "Club leadership",
    detail: "Leadership and chairman-level experience with Stanza Bopape Rugby Club (SBRC) and Liberties Rugby Club.",
    note: "Approximately 5–6 years of leadership · 4–5 years of club administration",
  },
  {
    number: "02",
    title: "Coaching & development",
    detail: "Coaching with a focus on youth development, player growth, teamwork and performance improvement.",
    note: "Approximately 3–5 years of coaching · Level 2 development in progress",
  },
  {
    number: "03",
    title: "Provincial team management",
    detail: "Dipoo-Blue Bulls provincial team management experience, including technical table responsibilities.",
    note: "Approximately 2–3 years of experience",
  },
];

const milestones = [
  ["Community roots", "Youth volunteering and involvement in community, church and sports initiatives."],
  ["Rugby service", "Coaching, club administration and leadership with local rugby clubs."],
  ["Provincial experience", "Provincial team management and technical table experience."],
  ["Community leadership", "Director of the Community Sports Legacy NPC."],
  ["Entrepreneurship", "Managing Director of Radikwebo SKH Industries and Projects."],
  ["Looking ahead", "Developing a vision for a rugby academy and sports agency."],
];

const galleryPhotos = [
  {
    src: "/images/speaking-at-the-podium.jpg",
    alt: "Stephanus Hermanus speaking at a podium",
    caption: "Speaking & community leadership",
  },
  {
    src: "/images/club-recognition.jpg",
    alt: "Club members sharing certificates at a recognition event",
    caption: "Club recognition",
  },
  {
    src: "/images/graduation-portrait-01.jpg",
    alt: "Stephanus Hermanus in graduation attire",
    caption: "An education milestone",
  },
  {
    src: "/images/community-sports-field.jpg",
    alt: "Stephanus Hermanus standing on a sports field",
    caption: "On the field",
  },
  {
    src: "/images/personal-portrait.jpg",
    alt: "A formal portrait of Stephanus Hermanus",
    caption: "A personal portrait",
  },
  {
    src: "/images/graduation-portrait-02.jpg",
    alt: "Stephanus Hermanus wearing graduation attire",
    caption: "Celebrating education",
  },
  {
    src: "/images/community-health-event.jpg",
    alt: "Stephanus Hermanus at a Global Handwashing Day 2024 event",
    caption: "Global Handwashing Day 2024",
  },
  {
    src: "/images/journey-and-rugby-collage.jpg",
    alt: "A collage of personal, community, and rugby moments",
    caption: "Moments from the journey",
  },
  {
    src: "/images/community-day-portrait.jpg",
    alt: "Stephanus Hermanus in a jacket and colourful scarf",
    caption: "A community moment",
  },
];

type EnquiryFormProps = {
  recipient: string;
  title: string;
  description: string;
  types: string[];
  id: string;
};

function EnquiryForm({ recipient, title, description, types, id }: EnquiryFormProps) {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = encodeURIComponent(`${title}: ${String(data.get("name"))}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Organisation: ${data.get("organisation") || "Not provided"}`,
        `Email: ${data.get("email")}`,
        `Telephone: ${data.get("telephone") || "Not provided"}`,
        `Enquiry type: ${data.get("type")}`,
        "",
        "Message:",
        String(data.get("message") ?? ""),
      ].join("\n"),
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setNotice("Your email app should open with the enquiry prepared. The message has not been submitted or stored on this website.");
  }

  return (
    <form className="enquiry-form" id={id} onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="eyebrow">LET'S START A CONVERSATION</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="form-grid">
        <label>
          Name <span aria-hidden="true">*</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Organisation
          <input name="organisation" autoComplete="organization" />
        </label>
        <label>
          Email <span aria-hidden="true">*</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Telephone
          <input name="telephone" type="tel" autoComplete="tel" />
        </label>
        <label className="full-width">
          Enquiry type <span aria-hidden="true">*</span>
          <select name="type" defaultValue="" required>
            <option value="" disabled>Select an enquiry type</option>
            {types.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label className="full-width">
          Message <span aria-hidden="true">*</span>
          <textarea name="message" rows={4} required />
        </label>
      </div>
      <button className="button button-gold form-submit" type="submit">Prepare email <span aria-hidden="true">↗</span></button>
      <p className="form-disclaimer">This form opens your email application. It does not send or store your details on this website.</p>
      <p className="form-notice" role="status" aria-live="polite">{notice}</p>
    </form>
  );
}

function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof galleryPhotos)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedPhoto && !dialog.open) {
      dialog.showModal();
    } else if (!selectedPhoto && dialog.open) {
      dialog.close();
    }
  }, [selectedPhoto]);

  return (
    <>
      <div className="gallery-grid">
        {galleryPhotos.map((photo, index) => (
          <button
            className={`gallery-tile gallery-item gallery-item-${index % 4}`}
            key={photo.src}
            type="button"
            aria-label={`View photo: ${photo.caption}`}
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 800px) 100vw, 33vw"
            />
            <span className="gallery-item-overlay">
              <span className="gallery-caption">{photo.caption}</span>
              <span className="gallery-view">VIEW PHOTO <span aria-hidden="true">↗</span></span>
            </span>
          </button>
        ))}
      </div>
      <dialog
        className="gallery-lightbox"
        ref={dialogRef}
        aria-label={selectedPhoto?.caption ?? "Photo viewer"}
        onClose={() => setSelectedPhoto(null)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            setSelectedPhoto(null);
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedPhoto(null);
        }}
      >
        {selectedPhoto && (
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              type="button"
              aria-label="Close photo viewer"
              onClick={() => setSelectedPhoto(null)}
              autoFocus
            >
              <span aria-hidden="true">×</span>
            </button>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
            <p>{selectedPhoto.caption}</p>
          </div>
        )}
      </dialog>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#home" aria-label="SK Hermanus home">
            <span className="brand-mark">SKH</span>
            <span className="brand-copy"><strong>SK HERMANUS</strong><small>LEADERSHIP · LEGACY · OPPORTUNITY</small></span>
          </a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span /><span /><span />
          </button>
          <nav id="primary-navigation" className={menuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Partner with me <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label="Illustrative stock photograph of a field sport" />
          <div className="hero-content page-shell">
            <p className="eyebrow eyebrow-gold">SPORTS · ENTREPRENEURSHIP · COMMUNITY</p>
            <h1 id="hero-title">Leadership.<br />Legacy.<br /><span>Opportunity.</span></h1>
            <p className="hero-lede">Driving sports development, entrepreneurial growth and community transformation through leadership, rugby and sustainable projects.</p>
            <p className="hero-intro">Meet {profile.name} — sports leader, entrepreneur, rugby development practitioner and community volunteer based in Mamelodi, Tshwane.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#about">Explore my journey <span aria-hidden="true">↗</span></a>
              <a className="button button-outline" href="#sports">Sports & rugby</a>
              <a className="button button-outline" href="#business">Business projects</a>
              <a className="button button-outline" href="#community">Partner with me</a>
              <a className="button button-outline" href="#contact">Contact SK Hermanus</a>
            </div>
            <span className="hero-index">01 / A LEADER IN MOTION</span>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="intro-strip" aria-label="Areas of focus">
          <div className="page-shell intro-items">
            <span>Rugby development</span><i /><span>Community leadership</span><i /><span>Entrepreneurship</span><i /><span>Lasting impact</span>
          </div>
        </section>

        <section className="section section-light" id="about">
          <div className="page-shell about-layout">
            <div className="about-visual">
              <div className="about-photo" role="img" aria-label="Stock photograph of a rugby player carrying a ball" />
              <div className="photo-caption"><span className="caption-dot" /> A commitment to people and progress</div>
              <div className="monogram-card" aria-label="SK Hermanus monogram">SK<span>H</span></div>
            </div>
            <div className="about-copy">
              <span className="eyebrow">A PURPOSE-DRIVEN JOURNEY</span>
              <h2>Building people.<br />Developing sport.<br /><em>Creating opportunity.</em></h2>
              <p className="lead-copy">From youth volunteering to sports leadership and entrepreneurship, SK Hermanus is committed to creating practical pathways for people and communities to grow.</p>
              <p>His journey brings together service through sport, church and community initiatives with a lasting interest in community development and public service. In rugby, he has contributed as a coach, club administrator and leader, as well as through provincial team management.</p>
              <p>As Managing Director of Radikwebo SKH Industries and Projects, he brings that same focus on initiative and opportunity to business and project services.</p>
              <div className="values-list">
                {["Discipline", "Teamwork", "Accountability", "Opportunity", "Empowerment"].map((value) => <span key={value}>{value}</span>)}
              </div>
              <blockquote>“Natural Born Leader — Building People, Developing Sport, Creating Opportunities.”</blockquote>
            </div>
          </div>
        </section>

        <section className="section section-navy" id="sports">
          <div className="page-shell">
            <div className="section-heading section-heading-light">
              <div><span className="eyebrow eyebrow-gold">SPORTS & RUGBY</span><h2>Experience built<br />through <em>the game.</em></h2></div>
              <p>Committed to growing rugby, supporting players and strengthening the clubs and communities that make sport possible.</p>
            </div>
            <div className="experience-grid">
              {experiences.map((item) => (
                <article className="experience-card" key={item.number}>
                  <span className="card-number">{item.number}</span>
                  <div className="card-rule" />
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <span className="experience-note">{item.note}</span>
                </article>
              ))}
            </div>
            <div className="academy-callout">
              <div className="academy-symbol" aria-hidden="true">↗</div>
              <div><span className="eyebrow eyebrow-gold">THE NEXT CHAPTER</span><h3>A vision for a rugby academy & sports agency</h3><p>Developing talent, supporting athletes and connecting players with opportunity — alongside clubs, schools and sponsors. This is a vision in development; no formal representation or partnerships are claimed.</p></div>
              <a className="text-link" href="#community">Explore partnership <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="section section-light community-section" id="community">
          <div className="page-shell community-layout">
            <div className="community-copy">
              <span className="eyebrow">COMMUNITY SPORTS LEGACY NPC</span>
              <h2>Sport can create<br />a <em>lasting legacy.</em></h2>
              <p className="lead-copy">As a director of the Community Sports Legacy NPC, SK Hermanus is focused on supporting community sports development and opening up opportunities through sport.</p>
              <p>Progress depends on people working together. We welcome conversations with organisations and individuals who want to help strengthen local sport, develop participants and build sustainable community programmes.</p>
              <a className="button button-dark" href="#community-enquiry">Partner with us <span aria-hidden="true">↗</span></a>
              <p className="small-note">Experience as director: approximately 3–5 years. No unverified registration or donation claims are made.</p>
            </div>
            <div className="partner-panel">
              <span className="eyebrow eyebrow-gold">LET'S BUILD TOGETHER</span>
              <h3>Partner with us to develop community sport.</h3>
              <ul>
                {["Corporate sponsors", "Sports organisations", "Government departments", "Schools & educational institutions", "Community organisations", "Coaches, volunteers & development partners"].map((partner) => <li key={partner}><span aria-hidden="true">✳</span>{partner}</li>)}
              </ul>
              <div className="partner-foot"><span>Community first</span><span>Progress together</span></div>
            </div>
          </div>
          <div className="page-shell form-shell" id="community-enquiry">
            <EnquiryForm
              id="community-form"
              title="Community & partnership enquiry"
              description="Tell us a little about your organisation and how you would like to work together."
              recipient={profile.personalEmail}
              types={["Sponsorship", "Community programme", "Sports development", "Volunteering", "Other"]}
            />
          </div>
        </section>

        <section className="section business-section" id="business">
          <div className="page-shell business-layout">
            <div className="business-copy">
              <span className="eyebrow eyebrow-gold">BUSINESS & ENTREPRENEURSHIP</span>
              <h2>Turn ideas into<br /><em>impactful work.</em></h2>
              <p className="lead-copy">RADIKWEBO SKH<br />INDUSTRIES AND PROJECTS</p>
              <p>Led by Managing Director SK Hermanus, the business works across practical services and entrepreneurial initiatives in Mamelodi, Tshwane.</p>
              <div className="business-services">
                {["Steel works & fabrication", "Carpentry & woodwork", "Construction & project services", "Business development"].map((service, index) => (
                  <div className="service-row" key={service}><span>0{index + 1}</span><strong>{service}</strong><span aria-hidden="true">↗</span></div>
                ))}
              </div>
              <a className="button button-gold" href="#business-enquiry">Discuss a business project <span aria-hidden="true">↗</span></a>
            </div>
            <div className="business-image-wrap">
              <div className="business-image" role="img" aria-label="Stock photograph of workshop tools and fabrication work" />
              <div className="business-stamp"><span>RADIKWEBO</span><strong>SKH</strong><span>INDUSTRIES & PROJECTS</span></div>
              <p className="image-note">Illustrative stock photography — not a completed company project.</p>
            </div>
          </div>
          <div className="page-shell form-shell dark-form" id="business-enquiry">
            <EnquiryForm
              id="business-form"
              title="Business project enquiry"
              description="Share your project requirements and the best way to contact you."
              recipient={profile.businessEmail}
              types={["Steel works & fabrication", "Carpentry & woodwork", "Construction services", "Project services", "Business development", "Other"]}
            />
          </div>
        </section>

        <section className="section qualifications-section" id="qualifications">
          <div className="page-shell">
            <div className="section-heading">
              <div><span className="eyebrow">LEARNING & DEVELOPMENT</span><h2>Grounded in learning.<br /><em>Focused on growth.</em></h2></div>
              <p>Professional development is an ongoing journey. Details below reflect the information supplied and can be updated as further records are confirmed.</p>
            </div>
            <div className="qualification-grid">
              <article><span className="qualification-icon">01</span><div><h3>Business education</h3><p>Business course qualifications.</p></div></article>
              <article><span className="qualification-icon">02</span><div><h3>Entrepreneurship</h3><p>Higher Advanced Certificates in Entrepreneurship from the University of Pretoria, as supplied.</p></div></article>
              <article><span className="qualification-icon">03</span><div><h3>Rugby coaching</h3><p>Coaching development, with Level 2 coaching qualifications currently being pursued.</p></div></article>
              <article><span className="qualification-icon">04</span><div><h3>Technical table</h3><p>Technical table experience and related qualifications.</p></div></article>
            </div>
            <p className="small-note qualification-note">Specific course titles, dates and registrations are not listed unless confirmed.</p>
          </div>
        </section>

        <section className="section timeline-section">
          <div className="page-shell timeline-layout">
            <div><span className="eyebrow eyebrow-gold">THE JOURNEY SO FAR</span><h2>Progress,<br /><em>step by step.</em></h2><p className="timeline-intro">A story of service, sport and enterprise — growing through experience and shaped by community.</p></div>
            <ol className="timeline-list">
              {milestones.map(([title, detail], index) => <li key={title}><span className="timeline-index">0{index + 1}</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}
            </ol>
          </div>
        </section>

        <section className="section gallery-section" aria-labelledby="gallery-heading">
          <div className="page-shell">
            <div className="gallery-heading"><div><span className="eyebrow">A LIFE IN ACTION</span><h2 id="gallery-heading">Sport. Service.<br /><em>Progress.</em></h2></div><p>A collection of your personal, community, education and sports moments. Select any photograph to view it larger.</p></div>
            <PhotoGallery />
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-shell contact-layout">
            <div className="contact-copy">
              <span className="eyebrow eyebrow-gold">LET'S CONNECT</span>
              <h2>Good things<br />start with a<br /><em>conversation.</em></h2>
              <p>Whether you are interested in sports development, community partnerships or business services, get in touch.</p>
              <div className="contact-details">
                <div><span className="contact-label">EMAIL</span><a href={`mailto:${profile.personalEmail}`}>{profile.personalEmail}</a><a href={`mailto:${profile.businessEmail}`}>{profile.businessEmail}</a></div>
                <div><span className="contact-label">TELEPHONE</span>{profile.phones.map((phone) => <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>)}</div>
                <div><span className="contact-label">LOCATION</span><span>{profile.location}</span></div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-top"><span className="brand-mark">SKH</span><span>PERSONAL & BUSINESS ENQUIRIES</span></div>
              <h3>{profile.name}</h3>
              <p>{profile.title}</p>
              <div className="contact-card-rule" />
              <p className="contact-prompt">Choose the right inbox for your enquiry.</p>
              <a className="contact-option" href={`mailto:${profile.personalEmail}`}><span><small>PARTNERSHIPS & COMMUNITY</small>{profile.personalEmail}</span><b aria-hidden="true">↗</b></a>
              <a className="contact-option" href={`mailto:${profile.businessEmail}`}><span><small>BUSINESS PROJECTS</small>{profile.businessEmail}</span><b aria-hidden="true">↗</b></a>
              <a className="privacy-link" href="./privacy.html">Privacy information <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-main">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">SKH</span><span className="brand-copy"><strong>SK HERMANUS</strong><small>LEADERSHIP · LEGACY · OPPORTUNITY</small></span></a>
          <p>Building people. Developing sport.<br />Creating opportunities.<br /><a href={`mailto:${profile.personalEmail}`}>{profile.personalEmail}</a><br /><a href={`mailto:${profile.businessEmail}`}>{profile.businessEmail}</a></p>
          <nav aria-label="Footer navigation">{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        </div>
        <div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} SK Hermanus. All rights reserved.</span><a href="./privacy.html">Privacy policy</a><span>Mamelodi · Tshwane · South Africa</span></div>
      </footer>
    </>
  );
}

export default App;
