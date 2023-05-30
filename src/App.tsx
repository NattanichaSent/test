import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
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
      </p> */}
      <div className="App">
      <header className="App-header">
        <div className="SideBar">
          <div>MENU</div>
          <div className="NavButton">
            <button>Batch Data Result</button>
            <button>RD Transaction</button>
            <button>Invoice Payment</button>
            <button>Receive & AS9</button>
            <button>User Management</button>
            <button>Role Management</button>
          </div>
        </div>
        <div className="NavBar">
          <div>Logo</div>
        </div>
        {/*         
        <div className="A">Health Solution1</div>
        <div className="B">Health Solution2</div>
        <div className="C">Health Solution3</div>
        <button className="D">Button 1</button> */}
      </header>
    </div>
    </>
  )
}

export default App
