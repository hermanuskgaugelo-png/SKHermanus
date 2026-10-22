import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const photos = [
  {
    src: "/images/IMG_20241123_165304_121635.jpg",
    alt: "Stephanus Hermanus speaking at a podium.",
    caption: "Speaking at a podium",
  },
  {
    src: "/images/IMG_20241207_155925.jpg",
    alt: "Two people holding certificates at a club recognition event.",
    caption: "Club recognition",
  },
  {
    src: "/images/Screenshot_20250106_181945_com_android_keyguard_.jpg",
    alt: "Original phone screenshot showing a podium photograph.",
    caption: "Podium photo — original phone screenshot",
  },
  {
    src: "/images/FB_IMG_1769711657021.jpg",
    alt: "Stephanus Hermanus wearing graduation attire outside.",
    caption: "Graduation portrait",
  },
  {
    src: "/images/IMG-20240811-WA0015_084513.jpg",
    alt: "Stephanus Hermanus standing on a field.",
    caption: "On the field",
  },
  {
    src: "/images/FB_IMG_1673541653628.jpg",
    alt: "Portrait of Stephanus Hermanus in a suit and hat.",
    caption: "Portrait",
  },
  {
    src: "/images/Screenshot_20250213_150033_com_android_keyguard_.jpg",
    alt: "Original phone screenshot showing the podium photograph.",
    caption: "Podium photo — original phone screenshot",
  },
  {
    src: "/images/FB_IMG_1769711579958.jpg",
    alt: "Stephanus Hermanus wearing graduation attire.",
    caption: "Graduation portrait",
  },
  {
    src: "/images/IMG_20241015_102628_122019.jpg",
    alt: "Stephanus Hermanus speaking at a Global Handwashing Day 2024 event.",
    caption: "Global Handwashing Day 2024",
  },
  {
    src: "/images/IMG-20240811-WA0016_084517.jpg",
    alt: "Stephanus Hermanus standing on an open sports field.",
    caption: "On the field",
  },
  {
    src: "/images/Collage_20250127_200215.jpg",
    alt: "Collage of personal, rugby, and community photographs.",
    caption: "Personal, rugby, and community moments",
  },
  {
    src: "/images/20240618130348_IMG_8474_125800.JPG",
    alt: "Stephanus Hermanus wearing a colourful scarf.",
    caption: "Community moment",
  },
  ...([
    ["InShot_20251229_202217205.jpg", "Portrait in a suit and hat"],
    ["received_988412160599144.jpeg", "Community rugby field visit"],
    ["received_1569571551272183.jpeg", "Meeting at a community project site"],
    ["received_1741583716865589.jpeg", "Conversation on the rugby field"],
    ["FB_IMG_1611130187648-COLLAGE.jpg", "Family, education and life moments"],
    ["FB_IMG_1763717885839.jpg", "Blue Bulls rugby recognition event"],
    ["FB_IMG_1769711464585.jpg", "Working on a community garden"],
    ["FB_IMG_1769711489166.jpg", "A family and community moment"],
    ["FB_IMG_1769711540786.jpg", "Preparing food for customers"],
    ["FB_IMG_1769711549406.jpg", "Cooking and community enterprise"],
    ["FB_IMG_1769711560498.jpg", "At work in a shop"],
    ["FB_IMG_1769711569995.jpg", "At work in a shop"],
    ["FB_IMG_1769711693007.jpg", "Graduation day"],
    ["FB_IMG_1769711800318.jpg", "Working at a computer"],
    ["FB_IMG_1769712020167.jpg", "Blue Bulls rugby gathering"],
    ["FB_IMG_630252900084173853.jpg", "A red-and-white sports outfit"],
    ["FB_IMG_5747160152060349904.jpg", "Traditional attire at a celebration"],
    ["FB_IMG_9150340083739161754.jpg", "Rugby silhouettes"],
    ["IMG_20250809_150851.jpg", "At a rugby ground"],
    ["IMG_20250823_142240.jpg", "Community rugby team"],
    ["IMG_20250823_142244(2).jpg", "Community rugby team together"],
    ["IMG_20251026_125924.jpg", "Graduation celebration"],
    ["IMG_20260123_154700.jpg", "Rugby team collage"],
    ["IMG_20260401_134603.jpg", "Rugby profile portrait"],
    ["IMG_20260416_185234.jpg", "Radikwebo SKH Industries and Projects logo"],
    ["IMG_1762337907651.jpg", "Blue Bulls women's rugby social post"],
    ["IMG-20260825-WA0004.jpg", "Walking with a community elder"],
    ["IMG20250821143017.jpg", "At a Blue Bulls rugby event"],
    ["IMG20250821143021.jpg", "Portrait at a Blue Bulls rugby event"],
    ["IMG20250821143022.jpg", "Portrait at a Blue Bulls rugby event"],
    ["IMG20250821143414.jpg", "Community rugby event with a rugby ball"],
    ["IMG20251118200311.jpg", "Blue Bulls rugby award ceremony"],
    ["IMG20251118201021.jpg", "Receiving a rugby certificate"],
    ["IMG20251118201025.jpg", "Speaking at a rugby event"],
    ["IMG20251118201028.jpg", "At a rugby event"],
    ["IMG20260421154207.jpg", "Community recognition and certificate"],
    ["IMG20260421154208.jpg", "Community recognition and certificate"],
    ["IMG20260509142922.jpg", "Rugby players on the field"],
    ["IMG20260509171535.jpg", "Rugby team after a match"],
    ["IMG20260509171541.jpg", "Rugby team together on the field"],
    ["IMG20260613131853.jpg", "Community children meet a rugby mascot"],
    ["IMG20260613131854.jpg", "Community children meet a rugby mascot"],
    ["IMG20260613132617.jpg", "Young rugby players at the stadium"],
    ["IMG20260814094251.jpg", "Meeting the Blue Bulls mascot"],
    ["IMG20260814094253.jpg", "Meeting the Blue Bulls mascot"],
    ["IMG20260814094255.jpg", "Meeting the Blue Bulls mascot"],
    ["IMG20260814094257.jpg", "Meeting the Blue Bulls mascot"],
    ["IMG20260814123857.jpg", "Blue Bulls rugby community moment"],
    ["IMG20260905152706.jpg", "Team talk with rugby players"],
    ["IMG20260905153615.jpg", "Rugby team gathering"],
    ["IMG20260905153618.jpg", "Rugby team gathering"],
    ["IMG20260905153636.jpg", "Rugby team gathering"],
    ["IMG20260926180917.jpg", "Rugby and community moment"],
    ["IMG20261003131619.jpg", "Rugby and community moment"],
  ] as const).map(([filename, caption]) => ({
    src: `/images/${filename}`,
    alt: caption,
    caption,
  })),
];

function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[number] | null>(null);
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
      <a className="skip-link" href="#gallery-main">Skip to gallery</a>
      <header className="site-header gallery-site-header">
        <div className="nav-shell">
          <a className="brand" href="./" aria-label="SK Hermanus home">
            <span className="brand-mark">SKH</span>
            <span className="brand-copy">
              <strong>SK HERMANUS</strong>
              <small>LEADERSHIP · LEGACY · OPPORTUNITY</small>
            </span>
          </a>
          <nav className="gallery-nav" aria-label="Main navigation">
            <a href="./">Home</a>
            <a href="./#about">About</a>
            <a href="./#sports">Rugby & sports</a>
            <a href="./#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="gallery-page" id="gallery-main">
        <div className="page-shell">
          <div className="gallery-page-heading">
            <span className="eyebrow">THE PHOTO ALBUM</span>
            <h1>Moments from<br /><em>the journey.</em></h1>
            <p>Personal, community, education and sports photographs shared by SK Hermanus.</p>
            <span className="gallery-count">{photos.length} PHOTOS</span>
          </div>
          <div className="gallery-grid">
            {photos.map((photo) => (
              <button
                className="gallery-tile gallery-item"
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
                />
                <span className="gallery-item-overlay">
                  <span className="gallery-caption">{photo.caption}</span>
                  <span className="gallery-view">VIEW PHOTO <span aria-hidden="true">↗</span></span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>

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

      <footer className="site-footer">
        <div className="page-shell gallery-footer">
          <a href="./">← Back to SK Hermanus home</a>
          <span>© {new Date().getFullYear()} SK Hermanus</span>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><GalleryPage /></React.StrictMode>,
);
