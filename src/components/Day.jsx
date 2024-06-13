import ArrowRight from "./Icons/ArrowRight"
import ArrowLeft from "./Icons/ArrowLeft"
import { getNameDay } from "./helpers/getNameDay"
import { getDate } from "./helpers/getDate"
 

const Day = ({ date, setDate }) => {

  const addDays = (date) => {
    let addDate = new Date(date)
    addDate.setDate(date.getDate() + 1)
    return addDate;
  }
  const restDays = (date) => {
    let restDate = new Date(date)
    restDate.setDate(date.getDate() - 1)
    return restDate;
  }

  const handleRight = () => {
    setDate(addDays(date))
  }

  const handleLeft = () => {
    setDate(restDays(date))
  }

  return (
    <section className='w-4/5 flex justify-center items-center gap-8 my-20 [&>p]:text-gray02'>
      <p 
        onClick={ () => handleLeft() }
        className="cursor-pointer flex justify-start">
        <ArrowLeft/>
      </p>
      <div className="w-4/5 flex flex-col ">
        <h4 className="text-2xl font-bold flex justify-center ">{getNameDay(date)}</h4>
        <p className="text-gray02 text-xs font-thin flex justify-center">{getDate(date)}</p>
      </div>
      <p 
        onClick={ () => handleRight() }
        className="cursor-pointer flex justify-end">
        <ArrowRight/>
      </p>
    </section>
  )
}

export default Day