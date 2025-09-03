import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import io from "socket.io-client";
import ImageUpload from "./ImageUpload";
import "./gallery.css"; // make sure to import your CSS

const ImageGallery = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const socketRef = useRef(null);

  const fetchMedia = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/images");
      setMediaItems(res.data);
    } catch (err) {
      console.error("Error fetching media:", err);
    }
  };

  useEffect(() => {
    fetchMedia();

    socketRef.current = io("http://localhost:5000");

    socketRef.current.on("receive-comment", ({ imageId, comment }) => {
      setMediaItems((prev) =>
        prev.map((item) =>
          item._id === imageId
            ? { ...item, comments: [...item.comments, comment] }
            : item
        )
      );
    });

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, []);

  const handleComment = async (id, text) => {
    const username = "Guest";
    try {
      await axios.post(`http://localhost:5000/api/images/${id}/comment`, {
        username,
        text,
      });

      socketRef.current.emit("new-comment", {
        imageId: id,
        comment: { username, text },
      });
    } catch (err) {
      console.error("Error sending comment:", err);
    }
  };

  return (
    <div className="container gallery-container">
      <h2 className="text-center mb-4 text-primary fw-bold">📁 Media Gallery</h2>

      <ImageUpload onUploadSuccess={fetchMedia} />

      <div className="row gy-4 mt-4">
        {mediaItems.map((item) => (
          <div key={item._id} className="col-md-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <div className="mb-3 text-center">
                  {item.mediaType === "video" ? (
                    <video
                      src={item.mediaUrl}
                      className="w-100 rounded"
                      controls
                    />
                  ) : (
                    <img
                      src={item.mediaUrl}
                      alt={item.description || ""}
                      className="img-fluid rounded"
                    />
                  )}
                </div>
                <p>
                  <strong>Description:</strong> {item.description}
                </p>
                <div
                  className="bg-light rounded p-3 mb-3"
                  style={{ maxHeight: "150px", overflowY: "auto" }}
                >
                  <h6 className="text-muted mb-2">💬 Comments:</h6>
                  {item.comments.length > 0 ? (
                    item.comments.map((c, i) => (
                      <div key={`${item._id}-comment-${i}`} className="mb-1">
                        <strong>{c.username}:</strong> {c.text}
                      </div>
                    ))
                  ) : (
                    <p className="text-muted">No comments yet.</p>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Write a comment and press Enter"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim()) {
                      handleComment(item._id, e.target.value.trim());
                      e.target.value = "";
                    }
                  }}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
