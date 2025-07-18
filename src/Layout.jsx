import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './index.css';

export default function Layout() {
  return (
    <div  className="relative w-screen h-[600px] -ml-37">
        
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
