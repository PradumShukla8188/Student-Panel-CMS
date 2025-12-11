'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import students from '@/data/recent-students.json';

export default function StudentShowcase() {
  const studentList = students.filter(s => s.type === 'student');
  const centerList = students.filter(s => s.type === 'center');

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="space-y-4">
        <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-6 text-lg rounded-lg shadow-lg">
          Recently Join Student List
        </Button>

        <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-6 shadow-lg">
          <div className="grid grid-cols-2 gap-4">
            {studentList.map((student) => (
              <div
                key={student.id}
                className="bg-amber-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-40">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-amber-800 p-3 text-center text-white">
                  <h4 className="font-bold text-sm">{student.name}</h4>
                  <p className="text-xs text-amber-200">{student.code}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-6 text-lg rounded-lg shadow-lg">
          Recently Join Center List
        </Button>

        <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-6 shadow-lg">
          <div className="grid grid-cols-3 gap-4">
            {centerList.map((center) => (
              <div
                key={center.id}
                className="bg-gradient-to-br from-lime-400 to-lime-500 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-32">
                  <Image
                    src={center.image}
                    alt={center.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-amber-800 p-2 text-center text-white">
                  <h4 className="font-bold text-xs">{center.name}</h4>
                  <p className="text-xs text-amber-200">{center.code}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
