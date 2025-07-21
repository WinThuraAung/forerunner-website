// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-12 py-5 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <Link
          to="/"
          className="flex items-center gap-4"
          style={{ textDecoration: 'none' }}
        >
          <img
            src="/images/Forerunner Logo 2.png"
            alt="FRN Logo"
            className="h-16 w-auto"
          />
          <div className="leading-tight">
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '2rem',
                fontWeight: 800,
                color: '#b38a36',
                letterSpacing: '0.02em',
              }}
            >
              Forerunner International Co., Ltd
            </span>
            {/* Optional tagline */}
            <p className="text-xs text-gray-500 tracking-wide">Since 2005 — Yangon, Myanmar</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 text-lg font-medium text-gray-800">
          {[
            ['Home', '/'],
            ['About', '/about'],
            ['Products', '/products'],
            ['Partners', '/partners'],
            ['Contact', '/contact'],
          ].map(([label, path]) => (
            <Link key={label} to={path} className="relative group transition">
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#b38a36] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
