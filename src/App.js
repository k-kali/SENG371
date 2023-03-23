import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout'
import { AdminHome, AdminEquipment, AdminRooms, AdminBookings, UserHome, UserBookings, UserEquipment, UserRooms } from './Pages';

function App() {


  return (
    <>
        <Routes>
          <Route path='user/*' element={<Layout/>}>
            <Route path='home'  element={<UserHome/>} />
            <Route path='bookings'  element={<UserBookings/>} />
            <Route path='equipment' element={<UserEquipment/>} />
            <Route path='rooms' element={<UserRooms/>}/>
          </Route>
          <Route path='admin/*' element={<Layout/>}>
            <Route path='home' element={<AdminHome/>} />
            <Route path='equipment' element={<AdminEquipment/>} />
            <Route path='rooms' element={<AdminRooms/>} />
            <Route path='bookings' element={<AdminBookings/>} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
