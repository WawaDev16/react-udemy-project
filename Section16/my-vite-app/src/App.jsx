import { useState, useEffect } from "react";
import useHttp from "./components/hooks/use-Https";
import NewTask from "./components/NewTask/Newtask";
import Tasks from "./components/Task/task";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp([]);

  useEffect(() => {
    const transformTask = (taskObj) => {
      const loadedTask = [];

      for (const taskKey in taskObj) {
        loadedTask.push({ id: taskKey, text: taskObj[taskKey].text });
      }
      setTasks(loadedTask);
    };
    fetchTasks(
      {
        url: "https://react-usehttp-394fc-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTask
    );
  }, [fetchTasks]);

  const taskAddhandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <div>
      <NewTask onAddTask={taskAddhandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </div>
  );
}

export default App;
