import React from "react";
import "../tutorial-6/Comment.css";

const Comment = ({ createdAt, fullName, text, onRemove, gender, id }) => {
  const formatedDate = createdAt.toLocaleDateString("ru", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return (
    <div>
      <div className="comment">
        <div className="avatar"></div>
        <div className="text-wrapper">
          <div className="nickname">{fullName}</div>
          <div className="gender">{gender}</div>
          <div className="text">{text}</div>
        </div>
        <div onClick={() => onRemove(id)} className="remove">
          X
        </div>
      </div>
      <div className="date">{formatedDate}</div>
    </div>
  );
};
export default Comment;
