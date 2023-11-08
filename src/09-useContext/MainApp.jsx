import { Navigate, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { Navbar, AboutPage, HomePage, LoginPage } from './';

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="*" element={ <Navigate to="/login" /> } />
      </Routes>
    </UserProvider>
  )
}