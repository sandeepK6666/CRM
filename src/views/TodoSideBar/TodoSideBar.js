import React from "react";
import "./TodoSideBar.scss";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import TodoTabs from "./TodoTabs/TodoTabs";

function TodoSideBar() {
  const tabLabels = ["All", "Notes & Calls", "Tasks", "Meetings", "Files"];

  const tabComponents = [
    {
      component: TodoTabs,
      props: {},
    },
  ];
  return (
    <div className="todo-sidebar">
      <div className="side-task-bar">
        <img className="task-bar" src="/images/note-b.svg" />
        <img className="task-bar" src="/images/tick.svg" />
        <img className="task-bar" src="/images/phone-b.svg" />
        <img className="task-bar" src="/images/cal-b.svg" />
      </div>
      <CustomTabs
        tabLabels={tabLabels}
        tabComponents={tabComponents}
        tabsClassname="todo-tabs"
      />
    </div>
  );
}

export default TodoSideBar;
