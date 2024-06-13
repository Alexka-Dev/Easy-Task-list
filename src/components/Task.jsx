import Options from "./Options";
import { taskDone } from "./helpers/taskDone";

const Task = ({ item, tasks, setTasks }) => {
  const handleDone = () => {
    setTasks(taskDone(item.id, tasks));
  };
  return (
    <div className="flex items-center my-4">
      <span className="cursor-pointer flex items-center">
        <input
          type="checkbox"
          className="checkbox"
          onClick={(e) => handleDone(e)}
          defaultChecked={item.done}
        />
      </span>
      <p className="grow text-left ps-2">{item.tasks}</p>
      <span className="cursor-pointer">
        <Options idTask={item.id} tasks={tasks} setTasks={setTasks} />
      </span>
    </div>
  );
};

export default Task;
