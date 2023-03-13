import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const AddBlog = () => {
  return (
    <div>
      <input
        // value={inputVal}
        // onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Title"
      />
      <input
        // value={inputVal}
        // onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Description"
      />
      <input
        // value={inputVal}
        // onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Image"
      />
      <input
        // value={inputVal}
        // onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="IMDb rating"
      />
    </div>
  );
};

export default AddBlog;
