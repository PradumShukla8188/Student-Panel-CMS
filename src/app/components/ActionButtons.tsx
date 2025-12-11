'use client';

import { Button } from './ui/button';
import { UserCheck, LogIn, FileCheck, Building2, CheckCircle } from 'lucide-react';

export default function ActionButtons() {
  return (
    <div className="flex flex-col items-center gap-3 mb-8">
      <Button className="w-64 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-6 rounded-lg shadow-lg">
        <UserCheck className="mr-2 h-5 w-5" />
        STUDENT VERIFY
      </Button>

      <Button className="w-64 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-6 rounded-lg shadow-lg">
        <LogIn className="mr-2 h-5 w-5" />
        STUDENT LOGIN
      </Button>

      <Button className="w-64 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-6 rounded-lg shadow-lg">
        <FileCheck className="mr-2 h-5 w-5" />
        STUDENT RESULT VERIFY
      </Button>

      <Button className="w-64 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-6 rounded-lg shadow-lg">
        <Building2 className="mr-2 h-5 w-5" />
        CENTER LOGIN
      </Button>

      <Button className="w-64 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-6 rounded-lg shadow-lg">
        <CheckCircle className="mr-2 h-5 w-5" />
        CENTER VERIFY
      </Button>
    </div>
  );
}
