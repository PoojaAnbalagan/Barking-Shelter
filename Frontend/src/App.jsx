import { Routes, Route,Outlet }  from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import PetCareGuide from './components/PetCareGuide/PetCareGuide'
import Vet from './components/VeterinaryDirectory/Vet'
import HowToSell from './components/HowToSell/HowToSell'
import CommissionPack from './components/CommissionPack/CommissionPack'
import ContactUs from './components/ContactUs/ContactUs'
import PetForm from './components/PetForm/PetForm'
import NotFound from "./components/NotFound/NotFound"
import Login from './components/Login/Login'
import Register from './components/Register/Register';
import ProtectecdRoute from "./components/ProtectedRoute"
import PetDogForm from './components/PetDogForm/PetDogForm'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';




function Logout() {
  localStorage.clear()
  return <Login />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

const ProtectedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This is where nested routes will render */}
      <Footer />
      <ScrollToTop /> 
    </>
  )
}


const App = () => {
  return (
    <div>
      <main>
        <Routes>
          {/* Protected routes */}
          <Route path="/" element={
            <ProtectecdRoute>
              <ProtectedLayout />
            </ProtectecdRoute>
          }>
            <Route index element={<Hero />} />
            <Route path="about" element={<About />} />
            <Route path="petdogform" element={<PetDogForm />} />
            <Route path="petcareguide" element={<PetCareGuide />} />
            <Route path="vet" element={<Vet />} />
            <Route path="howtosell" element={<HowToSell />} />
            <Route path="commissionpack" element={<CommissionPack />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="petform" element={<PetForm />} />
          </Route>

          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App