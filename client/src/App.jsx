import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CreateUser from './components/CreateUser'
import Users from './components/Users'
import UpdateUser from './components/UpdateUser'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
