import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import JoditEditor from "jodit-react";

function RichTextEditor() {
  const { category } = useParams(); // Access the current category
  const editor = useRef(null);
  const [content, setContent] = useState("");
const navigate =useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3004/admin/${category}/text`, { content })
      .then((result) => {
        console.log(result.data);
        alert("Post created successfully!");
        navigate(`/admin/${category}`);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to create post.");

      });
  };

  return (
    <div className="jodi-container">
      <div className="form-container">
        <div className="jodi-form-box" id="signin-box">
          
        <form  onSubmit={handleSubmit}>
      <h1 className="form-title">Create Your Post</h1>

      <JoditEditor
        className="jodit-editor"
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
        
      />

      <button className="submit-button" type="submit">
        Create Post
      </button>
    </form>
        </div>
      </div>
    </div>
  );
}

export default RichTextEditor;
