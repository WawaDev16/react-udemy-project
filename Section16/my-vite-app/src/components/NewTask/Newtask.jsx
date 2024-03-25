import useHttp from "../hooks/use-Https";
import TaskForm from "./TaskForms";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = (taskText) => {
    sendTaskRequest(
      {
        url: "https://react-usehttp-394fc-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <div>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default NewTask;
