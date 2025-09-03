import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({ onUploadSuccess }) => {
  const [media, setMedia] = useState(null);
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!media) return alert("Please choose a file.");

    const formData = new FormData();
    formData.append("media", media);
    formData.append("description", desc);

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/images/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Uploaded successfully");
      setMedia(null);
      setDesc("");
      e.target.reset();

      if (onUploadSuccess) onUploadSuccess(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Upload Media</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="mediaInput">Choose image/video:</label><br />
          <input
            type="file"
            id="mediaInput"
            accept="image/*,video/*"
            onChange={(e) => setMedia(e.target.files[0])}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="descInput">Description:</label><br />
          <input
            type="text"
            id="descInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter description"
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
