import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../../Components/ForAdmin/AdminHomePage/AdminHeader/AdminHeader";
import "./AdminNational.css";
import useFetch from "../Fetch/useFetch";
import { format } from "date-fns";

function AdminNational() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch(
    `http://localhost:3004/admin/${category}/text`
  );

  const [uploadNews, setUploadNews] = useState([]);

  useEffect(() => {
    setUploadNews(data || []);
  }, [data]);

  // Edit Functionality
  const handleEdit = (upload) => {
    navigate(`/admin/edit/${upload._id}`, { state: { upload } });
  };

  // Delete Functionality
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3004/admin/${category}/${id}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        setUploadNews(uploadNews.filter((news) => news._id !== id));
        alert("News deleted successfully");
      } else {
        throw new Error("Failed to delete the news item.");
      }
    } catch (error) {
      console.error("Failed to delete news:", error);
      alert("Error deleting news. Please try again.");
    }
  };

  // Format Date
  const formattedDate = (upload) => {
    return upload.createdAt
      ? format(new Date(upload.createdAt), "PPpp") // Example: Nov 21, 2024, 2:12 PM
      : "Unknown Date";
  };

  return (
    <div className="products-container">
      <AdminHeader />
      <div style={{ marginTop: "60px" }}>
        <div className="new-post">
          <div className="new-post__links">
            <Link className="links_" to={`/admin/${category}/text`}>Create New News</Link>
          </div>
        </div>
      </div>

      <div className="displayNews">
        <h1 style={{ textAlign: "center", marginTop: "60px" }}>
          Latest News Uploaded
        </h1>
        <section className="products">
          {uploadNews && uploadNews.length > 0 ? (
            uploadNews.map((upload) => (
              <article className="product" key={upload._id}>
                <h6>Published on: {formattedDate(upload)}</h6>
              
                <div
                  dangerouslySetInnerHTML={{
                    __html: upload.content.substring(0, 1200),
                  }}
                />
                <Link
                  className="product__link"
                  to={`/news/${upload._id}`}
                  state={upload}
                >
                  See more
                </Link>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    position: "relative",
                  }}
                >
                  <button
                    onClick={() => handleEdit(upload)}
                    className="product__link"
                    style={{ color: "blue" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(upload._id)}
                    className="product__link"
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))
          ) : (
            <p>No news available</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default AdminNational;
