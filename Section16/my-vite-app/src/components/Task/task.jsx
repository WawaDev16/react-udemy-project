import TaskItem from "./TaskItem";

const Tasks = (props) => {
  console.log("props", props.items);
  let taskList = <h2>No Task Found</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }
  let content = taskList;
  if (props.error) {
    content = <button onClick={props.onFetch}>Try Again</button>;
  }

  if (props.loading) {
    content = "Loading tasks...";
  }
  return <div>{content}</div>;
};

export default Tasks;
