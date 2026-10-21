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
            <span className="gallery-count">12 ORIGINAL PHOTOS</span>
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
