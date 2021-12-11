import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import {Container} from '@mui/material'
import Menu from "./components/NavBar"

export default function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Container>
      <Routes>
        <Route path='/' element={<TaskList/>}/>
        <Route path='/tasks/new' element={<TaskForm/>}/>
        

      </Routes>
      </Container>
    </BrowserRouter>
  )
}
