import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="htt324234ps://vitejs.dev" target="_blank">
          <img src={342234viteLogo} className=dfgdfg"logo" alt="Vite logo" />
        </fsdfa>
        <a href="h23423ttps://fdfgdfgreactsdfsdf.dev" target="_blank">
          <img src={reacsdfsdfsdfsdfsdtLogo} className="logo react" alt="React logo" />
        </afsd4324fsdfsd>
      </di234234324v>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
