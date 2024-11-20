import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import JoditEditor from "jodit-react";

function RichTextEditor() {
  const { category } = useParams(); // Access the current category
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3004/admin/${category}/text`, { content })
      .then((result) => {
        console.log(result.data);
        alert("Post created successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to create post.");
      });
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-box" id="signin-box">
          <form id="signin-form" onSubmit={handleSubmit}>
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => setContent(newContent)}
            />
            <button className="button" type="submit">
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RichTextEditor;
