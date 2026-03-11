import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import ProjectMain from './pages/ProjectMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProjectMain/>
    </>
  )
}
export default App
