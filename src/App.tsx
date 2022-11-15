import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Container className='my-4'>
      <Routes>
        <Route path='/' element={} />
        <Route path='/new' element={} />
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
