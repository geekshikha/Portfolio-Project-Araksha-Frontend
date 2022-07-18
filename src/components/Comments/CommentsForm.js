import React, { useState } from "react";
import BasicRating from "./Rating";
import { FiSend } from "react-icons/fi";

import styled from "styled-components";

const CommentsForm = () => {
  const [commentsArray, setCommentsArray] = useState([]);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const addComment = (name, comment) => {
    const newComment = { id: commentsArray.length + 1, name, comment };
    const newCommentArray = [...commentsArray, newComment];
    setCommentsArray(newCommentArray);
    setName("");
    setComment("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addComment(name, comment);
  };

  return (
    <Container>
      <BasicRating />
      {commentsArray.map((comment) => {
        return (
          <div key={comment.id}>
            <p>
              <b>Name:</b> {comment.name}
            </p>
            <p>
              <b>Comment:</b> {comment.comment}
            </p>
          </div>
        );
      })}
      <h2>Leave a comment:</h2>
      <form onSubmit={handleFormSubmit}>
        Name:{" "}
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <br />
        <br />
        Comment:{" "}
        <textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <br />
        <br />
        <button type="submit">
          {" "}
          <FiSend />
          Send
        </button>
      </form>
    </Container>
  );
};
export default CommentsForm;

const Container = styled.div`
  text-align: center;
`;
