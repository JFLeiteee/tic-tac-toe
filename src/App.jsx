import { useContext, useState } from 'react'
import Score from './components/Score'
import { Context } from './context/Context'
import Choice from './components/Choice'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
  const [nextPage, setNextPage] = useState(1)

  const {userChoice} = useContext(Context)

  const navigate = useNavigate()

  return (
    <div className='main-container'>
      <Outlet />
    </div>
  )
}

export default App
