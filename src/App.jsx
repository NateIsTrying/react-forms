import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import { useState } from 'react'

const App = () => {
  const [token, setToken] = useState(null)
  

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />      
    </>
  )
}

export default App
