import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
    return (
      <UserProvider>
          <h1>MainApp</h1>
          <Navbar />
          <hr />          
          <Outlet />
      </UserProvider>
    )
  }
  