import React from "react";

// Image imports
import GalleryImg1 from "../../assets/images/gallery/g1.jpg";
import GalleryImg3 from "../../assets/images/gallery/g3.jpg";
import GalleryImg4 from "../../assets/images/gallery/g4.jpg";
import GalleryImg6 from "../../assets/images/gallery/g6.jpg";
import GalleryImg7 from "../../assets/images/gallery/g7.jpg";

// Photo metadata
const photos = [
  { src: GalleryImg1, desc: "Mountain Sunrise" },
  { src: GalleryImg3, desc: "Historic Fort, India" },
  { src: GalleryImg6, desc: "Desert Dunes" },
  { src: GalleryImg4, desc: "Jaipur, Rajasthan" },
  { src: GalleryImg7, desc: "Serene Lake" },
  { src: GalleryImg6, desc: "White Rann of Kutch" },
];

const GalleryComponent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-800">📸 Our Travel Moments</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
        className="rounded-2xl shadow-xl p-6 bg-white hover:shadow-2xl transition-all duration-300"
      >
        {photos.map((photo, idx) => (
          <div key={idx} style={{ textAlign: "center" }}>
            <img
              src={photo.src}
              alt={photo.desc}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "8px",
              }}
            />
            <div style={{ fontSize: "1rem", color: "#333" }}>{photo.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
