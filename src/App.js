import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import {
  AdminHome,
  AdminEquipment,
  AdminRooms,
  AdminBookings,
  UserHome,
  UserBookings,
  UserEquipment,
  UserRooms,
  About,
  Login,
  Home,
} from "./Pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="user" element={<Login />} />
        <Route path="admin" element={<Login />} />
        <Route path="user/*" element={<Layout />}>
          <Route path="home" element={<UserHome />} />
          <Route path="bookings" element={<UserBookings />} />
          <Route path="equipment" element={<UserEquipment />} />
          <Route path="rooms" element={<UserRooms />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="admin/*" element={<Layout />}>
          <Route path="home" element={<AdminHome />} />
          <Route path="equipment" element={<AdminEquipment />} />
          <Route path="rooms" element={<AdminRooms />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
