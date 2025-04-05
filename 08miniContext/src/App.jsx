import { useState } from 'react'

import './App.css'
import Profile from './components/Profile.jsx'
import  UserContextProvider  from './context/UserContextProvider';
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React course with hitesh {count}</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
