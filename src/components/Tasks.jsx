import React from "react";
import Task from "./Task";

export default function Tasks({ tasks, showActive, showCompleted }) {
  const activeTasks = [];
  const completedTasks = [];
  const otherTasks = [];
  tasks.map((task) => {
    const { name, status } = task || {};
    if (status === "active") {
      activeTasks.push(task);
    } else if (status === "completed") {
      completedTasks.push(task);
    } else {
      otherTasks.push(task);
    }
  });

  // Show only active
  if (showCompleted) {
    return <Task arr={completedTasks} />;
  }
  // Show only completed
  if (showActive) {
    return <Task arr={activeTasks} />;
  }
  // Show all
  return (
    <>
      <Task arr={activeTasks} />
      <Task arr={completedTasks} />
      <Task arr={otherTasks} />
    </>
  );
}
