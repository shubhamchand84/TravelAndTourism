import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "./PublicView.css"

const PublicView = () => {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPublicStories = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          "http://localhost:5000/api/travel-story/public"
        )
        setStories(response.data.stories)
        setLoading(false)
      } catch (error) {
        setError("Failed to fetch travel stories. Please try again later.")
        setLoading(false)
        console.error("Error fetching public stories:", error)
      }
    }

    fetchPublicStories()
  }, [])

  if (loading) {
    return (
      <div className="public-view-container loading">
        <div className="spinner"></div>
        <p>Loading travel stories...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="public-view-container error">
        <h2>Error</h2>
        <p>{error}</p>
        <Link to="/login" className="login-link">
          Login to view your stories
        </Link>
      </div>
    )
  }

  return (
    <div className="public-view-container">
      <div className="public-view-header">
        <h1>Travel Diary Stories</h1>
        <p>Explore amazing travel experiences shared by our users</p>
        <div className="auth-links">
          <Link to="/login" className="login-link">
            Login
          </Link>
          <Link to="/sign-up" className="signup-link">
            Sign Up
          </Link>
        </div>
      </div>

      {stories.length === 0 ? (
        <div className="no-stories">
          <h2>No travel stories available</h2>
          <p>Be the first to share your travel experience!</p>
          <Link to="/sign-up" className="signup-link">
            Sign Up Now
          </Link>
        </div>
      ) : (
        <div className="stories-grid">
          {stories.map((story) => (
            <div key={story._id} className="story-card">
              {story.imageUrl && (
                <div className="story-image">
                  <img src={story.imageUrl} alt={story.title} />
                </div>
              )}
              <div className="story-content">
                <h2>{story.title}</h2>
                <p className="story-author">
                  By {story.userId?.username || "Anonymous"}
                </p>
                <p className="story-location">
                  <span>📍</span> {story.visitedLocation.join(", ")}
                </p>
                <p className="story-date">
                  <span>📅</span>{" "}
                  {new Date(story.visitedDate).toLocaleDateString()}
                </p>
                <p className="story-text">
                  {story.story.length > 150
                    ? `${story.story.substring(0, 150)}...`
                    : story.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PublicView