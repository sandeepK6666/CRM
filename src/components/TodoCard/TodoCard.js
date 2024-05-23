import React from "react";
import "./TodoCard.scss";

function TodoCard({ label, count }) {
  return (
    <div className="todo-wrapper">
      <div className="todo-title">
        <div className="flex-align-center gap-5">
          <img src="/images/note.svg" />
          <div className="blue-1 label"> Note</div>
        </div>
        <div className="tag">To Do</div>
      </div>
      <div className="todo-desc">{label}</div>
      <div className="blue-1 label">{count} Association(s)</div>
      <div className="todo-user">
        <div className="flex-align-center gap-5">
          <img src="/images/user.svg" />
          <div> John Doe</div>
        </div>
        <div className="flex-align-center gap-5">
          <img src="/images/clock.svg" />
          <div> Jul 12, 2023, 11:54 am </div>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
