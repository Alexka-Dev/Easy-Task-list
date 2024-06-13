import React, { useState } from 'react'
import Text from './Icons/Text'

const Form = ({ date, tasks, setTasks }) => {

  const [value, setValue] = useState('')

  const handleInput = (e) => {
    e.preventDefault()

    const newTask = {
      id: crypto.randomUUID(),
      date: date,
      tasks: value,
      done: false
    }

    setTasks([...tasks, newTask])
    setValue('')
  }

  return (
    <section className='w-4/5  m-auto my-3 px-4'>
      <div className="border border-gray-400 rounded bg-zinc-900 flex items-center p-2">
        <span className='text-gray02 mr-2'><Text /></span>
        <form 
        onSubmit={handleInput}
        className="w-full">
          
          <input 
          className='w-full rounded bg-transparent outline-none' 
          type="text" 
          name="task" 
          id="task" 
          placeholder='Add a task'
          value={value}
          onChange={e => setValue(e.target.value)}
          />
        </form>
      </div>
    </section>
  )
}

export default Form