'use client';

import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import notices from '@/data/notices.json';

export default function NoticeBoard() {
  const [currentNotice, setCurrentNotice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotice((prev) => (prev + 1) % notices.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-amber-600 text-white p-2 rounded-full">
          <Bell className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold text-amber-900">Notice Board/Update News</h3>
      </div>

      <div className="relative h-64 overflow-hidden">
        {notices.map((notice, index) => (
          <div
            key={notice.id}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentNotice
                ? 'opacity-100 translate-y-0'
                : index < currentNotice
                ? 'opacity-0 -translate-y-full'
                : 'opacity-0 translate-y-full'
            }`}
          >
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-amber-600 h-full flex flex-col justify-center">
              <p className="text-gray-800 text-lg leading-relaxed mb-3">
                {notice.text}
              </p>
              <p className="text-sm text-gray-500">Date: {notice.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {notices.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentNotice(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentNotice ? 'bg-amber-600 w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
