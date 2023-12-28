import Timer from './Timer';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-r from-black via-cyan-900 to-black">
      <div className="max-w-screen-xl max-h-screen mx-auto p-4">
        {/* <h1 className=' font-semibold text-5xl text-white'>hello</h1> */}
        <Timer />
      </div>
    </div>
     
    </>
  )
}

export default App
