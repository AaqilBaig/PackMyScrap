import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import Bookings from './pages/Bookings';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import { useAuthContext } from './hooks/useAuthContext'
import FloatingButton from './components/FloatingButton';
import BookingForm from './pages/BookingForm'

function App() {
  
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
            <Routes>
              <Route 
                path='/'
                element={<Home/>}
              />
              <Route 
                path='/mybookings'
                element={user ? <Bookings /> : <Navigate to={'/login'}/>}
              />
              <Route 
                path='/newbooking'
                element={user ? <BookingForm /> : <Navigate to={'/login'}/>}
              />
              <Route 
                path='/signup'
                element={!user ? <Signup /> : <Navigate to={'/mybookings'}/>}
              />
              <Route 
                path='/login'
                element={!user ? <Login /> : <Navigate to={'/mybookings'}/>}
              />
              <Route 
                path='/aboutus'
                element={<AboutUs />}
              />
              <Route 
                path='/contactus'
                element={<ContactUs />}
              />
            </Routes>
        <Footer />
        <FloatingButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
