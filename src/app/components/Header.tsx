'use client';

import Link from 'next/link';
import { Mail, Menu, Phone, UserCog, X } from 'lucide-react';
import { Button } from './ui/button';
import Logo from './Layout/Header/Logo';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-1">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="whitespace-nowrap">
                EMAIL: SSTCOMPUTER@GMAIL.COM
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="whitespace-nowrap">
                CALL: 9519222486, 7376486686
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-amber-700"
            >
              <UserCog className="h-4 w-4 mr-2" />
              CENTER ADMIN
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-amber-700"
            >
              ADMIN LOGIN
            </Button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold">
              <li><Link href="/" className="hover:text-amber-600 transition-colors">HOME</Link></li>
              <li><Link href="/about" className="hover:text-amber-600 transition-colors">ABOUT</Link></li>
              {/* COURSES DROPDOWN */}
              <li className="relative group">
                <button className="hover:text-amber-600 transition-colors">
                  COURSES
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 mt-2 bg-white shadow-md rounded-lg w-48 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
                  <ul className="py-2 text-sm">
                    <li><Link href="/courses/hardware" className="block px-4 py-2 hover:bg-amber-50">Hardware Courses</Link></li>
                    <li><Link href="/courses/software" className="block px-4 py-2 hover:bg-amber-50">Software Courses</Link></li>
                    <li><Link href="/courses/online" className="block px-4 py-2 hover:bg-amber-50">Online Courses</Link></li>
                    <li><Link href="/courses/english" className="block px-4 py-2 hover:bg-amber-50">Spoken English</Link></li>
                    <li><Link href="/courses/account" className="block px-4 py-2 hover:bg-amber-50">Accounting</Link></li>
                  </ul>
                </div>
              </li>

              {/* DOWNLOAD DROPDOWN */}
              <li className="relative group">
                <button className="hover:text-amber-600 transition-colors">
                  DOWNLOAD
                </button>

                <div className="absolute left-0 mt-2 bg-white shadow-md rounded-lg w-48 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
                  <ul className="py-2 text-sm">
                    <li><Link href="/download/admin-card" className="block px-4 py-2 hover:bg-amber-50">Admin Card</Link></li>
                    <li><Link href="/download/student-result" className="block px-4 py-2 hover:bg-amber-50">Student Result</Link></li>
                    <li><Link href="/download/forms" className="block px-4 py-2 hover:bg-amber-50">Center Forms</Link></li>
                    <li><Link href="/download/prospectus" className="block px-4 py-2 hover:bg-amber-50">Prospectus</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link href="/gallery" className="hover:text-amber-600 transition-colors">GALLERY</Link></li>
              <li><Link href="/student" className="hover:text-amber-600 transition-colors">STUDENT</Link></li>
              <li><Link href="/franchise" className="hover:text-amber-600 transition-colors">FRANCHISE</Link></li>
              <li><Link href="/staff-login" className="hover:text-amber-600 transition-colors">STAFF LOGIN</Link></li>
              <li><Link href="/contact" className="hover:text-amber-600 transition-colors">CONTACT</Link></li>
            </ul>

            {/* Mobile Toggle Button */}
            <button
              className="lg:hidden p-2 text-amber-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t px-4 pb-4 animate-fade-in">
            <ul className="flex flex-col gap-4 text-sm font-semibold py-4">
              <li><Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-amber-600">HOME</Link></li>
              <li><Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-amber-600">ABOUT</Link></li>
              {/* COURSES (Mobile Dropdown) */}
              <li>
                <details className="group">
                  <summary className="cursor-pointer py-2 hover:text-amber-600">
                    COURSES
                  </summary>
                  <ul className="ml-4 mt-2 space-y-2 text-sm">
                    <li><Link href="/courses/hardware" onClick={() => setMobileOpen(false)} className="block">Hardware Courses</Link></li>
                    <li><Link href="/courses/software" onClick={() => setMobileOpen(false)} className="block">Software Courses</Link></li>
                    <li><Link href="/courses/online" onClick={() => setMobileOpen(false)} className="block">Online Courses</Link></li>
                    <li><Link href="/courses/english" onClick={() => setMobileOpen(false)} className="block">Spoken English</Link></li>
                    <li><Link href="/courses/account" onClick={() => setMobileOpen(false)} className="block">Accounting</Link></li>
                  </ul>
                </details>
              </li>

              {/* DOWNLOAD (Mobile Dropdown) */}
              <li>
                <details className="group">
                  <summary className="cursor-pointer py-2 hover:text-amber-600">
                    DOWNLOAD
                  </summary>
                  <ul className="ml-4 mt-2 space-y-2 text-sm">
                    <li><Link href="/download/admin-card" onClick={() => setMobileOpen(false)} className="block">Admin Card</Link></li>
                    <li><Link href="/download/student-result" onClick={() => setMobileOpen(false)} className="block">Student Result</Link></li>
                    <li><Link href="/download/forms" onClick={() => setMobileOpen(false)} className="block">Center Forms</Link></li>
                    <li><Link href="/download/prospectus" onClick={() => setMobileOpen(false)} className="block">Prospectus</Link></li>
                  </ul>
                </details>
              </li>

              <li><Link href="/gallery" onClick={() => setMobileOpen(false)} className="hover:text-amber-600">GALLERY</Link></li>
              <li><Link href="/student" onClick={() => setMobileOpen(false)} className="hover:text-amber-600">STUDENT</Link></li>
              <li><Link href="/franchise" onClick={() => setMobileOpen(false)} className="hover:text-amber-600">FRANCHISE</Link></li>
              <li><Link href="/staff-login" onClick={() => setMobileOpen(false)} className="hover:text-amber-600">STAFF LOGIN</Link></li>
              <li><Link href="/contact" onClick={() => setMobileOpen(false)} className="hover:text-amber-600">CONTACT</Link></li>
            </ul>

            <div className="flex flex-col gap-2">
              <Button variant="ghost" className="text-amber-700 border hover:bg-amber-100">
                CENTER ADMIN
              </Button>
              <Button variant="ghost" className="text-amber-700 border hover:bg-amber-100">
                ADMIN LOGIN
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
