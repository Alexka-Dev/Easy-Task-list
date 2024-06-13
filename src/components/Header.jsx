const Header = ({ tab, setTab }) => {
  return (
<header className='border-b border-gray-500 mb-4 w-full flex justify-center'>
    <nav>
        <ul className='flex justify-around gap-10 items-center text-gray02   [&>li]: py-2 [&>li]: list-none [&>li]: cursor-pointer '>
        <li 
            className={tab==='day'?'current':''}
            onClick={e=>setTab('day')}
          >Day</li>
          <li
            className={tab==='week'?'current':''}
            onClick={e=>setTab('week')}
          >Week</li>
          <li
            className={tab==='month'?'current':''}
            onClick={e=>setTab('month')}
          >Month</li>
             </ul>
    </nav>
</header>
  )
}

export default Header