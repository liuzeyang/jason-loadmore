import { useState } from 'react'
import './App.css'
import { LoadMore } from '../../src/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LoadMore 
        loadMore={(entry) => {
          console.log(entry)
        }}
        LoadingComponent={() => <div>Loading...</div>}
      >
        <div id='container'>
        {
          new Array(100).fill(0).map((_, i) => {
            return <div className='item'>
              {i}
            </div>
          })
        }
        </div>
      </LoadMore>
    </div>
  )
}

export default App
