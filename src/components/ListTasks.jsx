import Task from "./Task"

import { getTaskDay } from "./helpers/getTaskDay"

const ListTasks = ({ tasks, setTasks, date }) => {
  const currentTasks = getTaskDay(date, tasks)
  
  return (
    <section className='w-4/5 m-auto pb-7 pt-1 px-4'>
      {
        currentTasks.map(item => (
          <Task 
          key={item.id}
          item={item}
          tasks={tasks}
          setTasks={setTasks}
          />
        ))
      }
    </section>
  )

}

export default ListTasks