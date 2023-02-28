import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar'
import { Home, FindBookings, CurrentBookings, ManageBookings, ManageDatabase } from './Pages'

function App() {
  return (
    <>
      <NavBar/>
      <Container className="mb-4">
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/FindBookings'  element={<FindBookings/>} />
          <Route path='/ManageBookings' element={<ManageBookings/>} />
          <Route path='/CurrentBookings' element={<CurrentBookings/>} />
          <Route path='/ManageDatabase' element={<ManageDatabase/>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
