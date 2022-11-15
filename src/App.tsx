import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NewNote } from './components/NewNote'

function App() {
  return (
    <Container className='my-4'>
      <Routes>
        <Route path='/' element={} />
        <Route path='/new' element={<NewNote />} />
        <Route path='/:id'>
          <Route index element={} />
          <Route path='/edit' element={} />
        </Route>
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
    </Container>
  )
}

export default App
