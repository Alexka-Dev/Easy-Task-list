import { getWeekTasks } from "./helpers/getWeekTasks";

const Week = ({ tasks }) => {
  const weekTask = getWeekTasks(tasks);

  return (
    <section className="w-4/5 p-4 ">
      {weekTask.map((item) => (
        <div
          key={item.id}
          className="border border-black rounded bg-gray-900 p-2 mb-2 flex flex-wrap justify-between"
        >
          <div className="flex flex-col p-1 rounded min-w-1/4 text-center h-fit">
            <span> {item.day} </span>
            <div className="flex justify-center items-center">
              <span className="text-4xl"> {item.numDay} </span>
              <span
                style={{ writingMode: "vertical-lr" }}
                className="text-xs font-medium"
              >
                {item.month}
              </span>
            </div>
          </div>
          <div className=" flex flex-wrap pl-7 gap-1 justify-end">
            {item.tasks.map((task) => (
              <span
                key={task.id}
                className={`border border-black px-2 rounded inline-block h-fit text-xs ${
                  task.done ? "bg-green-600 text-gray-200" : "bg-gray-700"
                }`}
              >
                {task.tasks}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Week;
