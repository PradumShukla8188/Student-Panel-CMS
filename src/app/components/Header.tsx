'use client';

import Link from 'next/link';
import { Mail, Phone, UserCog } from 'lucide-react';
import { Button } from './ui/button';
import Logo from './Layout/Header/Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>EMAIL: SSTCOMPUTER@GMAIL.COM</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>CALL: 9519222486, 7376486686</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-amber-700">
              <UserCog className="h-4 w-4 mr-2" />
              CENTER ADMIN
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-amber-700">
              ADMIN LOGIN
            </Button>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              {/* <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-amber-200 shadow-lg">
                SSTCI
              </div> */}
              <Logo />
            </Link>

            <ul className="flex items-center gap-8 text-sm font-semibold">
              <li><Link href="/" className="hover:text-amber-600 transition-colors">HOME</Link></li>
              <li><Link href="/about" className="hover:text-amber-600 transition-colors">ABOUT</Link></li>
              <li><Link href="/courses" className="hover:text-amber-600 transition-colors">COURSES</Link></li>
              <li><Link href="/download" className="hover:text-amber-600 transition-colors">DOWNLOAD</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-600 transition-colors">GALLERY</Link></li>
              <li><Link href="/student" className="hover:text-amber-600 transition-colors">STUDENT</Link></li>
              <li><Link href="/franchise" className="hover:text-amber-600 transition-colors">FRANCHISE</Link></li>
              <li><Link href="/staff-login" className="hover:text-amber-600 transition-colors">STAFF LOGIN</Link></li>
              <li><Link href="/contact" className="hover:text-amber-600 transition-colors">CONTACT</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
