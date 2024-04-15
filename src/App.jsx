import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useEffect } from 'react';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  useEffect(() => {
    let currentRoute = location.pathname;
    if(currentRoute == '/') {
      currentRoute = '';
    }
    const modifiedRoute =  currentRoute.replace('/', "|");
    const capitalizedRoute = modifiedRoute.charAt(0)  + " " + modifiedRoute.charAt(1).toUpperCase() + modifiedRoute.slice(2);
    document.title = `Samir's Commercial ${capitalizedRoute}`
  }, [location])

  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
