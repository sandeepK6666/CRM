import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../../../store/actions/todoActions";
import TodoCard from "../../../components/TodoCard/TodoCard";

function LessonsTab() {
  const dispatch = useDispatch();
  const getTodoData = useSelector((state) => state?.todo?.getTodoData?.todos);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(getTodo());
  };

  return (
    <div>
      <div>
        {getTodoData?.map((todoItem, index) => (
          <TodoCard key={index} label={todoItem.todo} count={todoItem.userId} />
        ))}
      </div>
    </div>
  );
}

export default LessonsTab;
