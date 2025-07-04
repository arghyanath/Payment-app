
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { UnprotectedRoutes } from './components/auth/UnprotectedRoutes'
import { ProtectedRoutes } from './components/auth/ProtectedRoutes'

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/signin' element={<UnprotectedRoutes><Signin /></UnprotectedRoutes>} />
            <Route path='/signup' element={<UnprotectedRoutes><Signup /></UnprotectedRoutes>} />
            <Route path='/dashboard' element={<ProtectedRoutes> <Dashboard /></ProtectedRoutes>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
