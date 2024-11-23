import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import JoditEditor from "jodit-react";

function AdminEditNews() {
  const { category, _id } = useParams(); // Access the category and news ID from the URL
  const location = useLocation(); // Access state passed from the Edit button
  const navigate = useNavigate();

  const { upload } = location.state || {}; // Access news data from state
  const editor = useRef(null);

  const [content, setContent] = useState(""); // Manage content state
  const [isLoading, setIsLoading] = useState(false); // Manage loading state
  const [error, setError] = useState(null); // Manage error state

  // Pre-fill editor content or fetch from API if unavailable
  useEffect(() => {
    if (upload) {
      setContent(upload.content);
    } else {
      // Fetch news data from the backend if not passed via state
      setIsLoading(true);
      axios
        .get(`http://localhost:3004/admin/${category}/${_id}`)
        .then((response) => {
          setContent(response.data.content || ""); // Set content or fallback
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching news data:", error);
          setError("Failed to load news content. Please try again.");
          setIsLoading(false);
        });
    }
  }, [upload, _id, category]);

  // Save the updated content
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3004/admin/edit/${_id}`,
        { content }
      );
      if (response.status === 200) {
        alert("News updated successfully!");
        navigate(-1); // Navigate back to the previous page
      }
    } catch (err) {
      console.error("Failed to update news:", err);
      alert("Error updating news. Please try again.");
    }
  };

  return (
    <div className="jodi-container">
      <h1>Edit News</h1>

      {isLoading ? (
        <p>Loading news content...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <form onSubmit={handleSave}>
          <JoditEditor
            ref={editor}
            value={content} // Pre-fill with current content
            onChange={(newContent) => setContent(newContent)} // Update state on change
            config={{
              readonly: false, // Allows editing
              toolbarSticky: true,
              height: 400,
            }}
          />
          <button type="submit" className="button" disabled={!content.trim()}>
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
}

export default AdminEditNews;
