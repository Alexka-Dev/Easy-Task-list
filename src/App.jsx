import { useState, useEffect } from "react";
import Header from "./components/Header";
import Day from "./components/Day";
import Form from "./components/Form";
import ListTasks from "./components/ListTasks";
import Week from "./components/Week";
import Month from "./components/Month";

export default function App() {
  const [date, setDate] = useState(new Date());

  const data = JSON.parse(localStorage.getItem("tasks"));

  const [tasks, setTasks] = useState(data ? data : []);
  const [tab, setTab] = useState("day");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main className="w-full h-full p-10 flex justify-center">
      <div className="w-3/4 flex flex-col items-center justify-center bg-gray-800 text-white rounded-xl">
        <Header tab={tab} setTab={setTab} />
        {tab === "day" && (
          <>
            <Day date={date} setDate={setDate} />
            <Form date={date} tasks={tasks} setTasks={setTasks} />
            <ListTasks tasks={tasks} setTasks={setTasks} date={date} />
          </>
        )}
        {tab === "week" && <Week tasks={tasks} />}
        {tab === "month" && <Month tasks={tasks} />}
      </div>
    </main>
  );
}
