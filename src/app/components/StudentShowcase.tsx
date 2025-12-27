'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import students from '@/data/recent-students.json';

export default function StudentShowcase() {
  const studentList = students.filter(s => s.type === 'student');
  const centerList = students.filter(s => s.type === 'center');

  return (
    <>
      {/* WRAPPER GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">

        {/* ================================
      STUDENT LIST
  ================================= */}
        <div className="space-y-4">
          <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 sm:py-6 text-base sm:text-lg rounded-lg shadow-lg">
            Recently Join Student List
          </Button>

          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-3 sm:p-6 shadow-lg overflow-hidden">
            <div className="relative w-full overflow-hidden">

              {/* Scrolling container */}
              <div className="flex animate-scroll gap-3 sm:gap-4">

                {/* Repeat list twice to loop */}
                {[...studentList, ...studentList].map((student, index) => (
                  <div
                    key={`${student.id}-${index}`}
                    className="
                min-w-[60%] 
                sm:min-w-[40%] 
                md:min-w-[33%] 
                lg:min-w-[25%]
                bg-amber-700 
                rounded-lg 
                overflow-hidden 
                shadow-md 
                hover:shadow-xl 
                transition-shadow
              "
                  >
                    <div className="relative h-32 sm:h-36 md:h-40">
                      <Image
                        src={student.image}
                        alt={student.name}
                        fill
                        className="object-fill"
                      />
                      {/* className="object-cover" */}
                    </div>

                    <div className="bg-amber-800 p-2 sm:p-3 text-center text-white">
                      <h4 className="font-bold text-xs sm:text-sm">{student.name}</h4>
                      <p className="text-[10px] sm:text-xs text-amber-200">{student.code}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* ================================
      CENTER LIST
  ================================= */}
        <div className="space-y-4">
          <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 sm:py-6 text-base sm:text-lg rounded-lg shadow-lg">
            Recently Join Center List
          </Button>

          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-3 sm:p-6 shadow-lg overflow-hidden">
            <div className="relative w-full overflow-hidden">

              {/* Scrolling container */}
              <div className="flex animate-scroll gap-3 sm:gap-4">

                {[...centerList, ...centerList].map((center, index) => (
                  <div
                    key={`${center.id}-${index}`}
                    className="
                min-w-[60%] 
                sm:min-w-[40%] 
                md:min-w-[33%] 
                lg:min-w-[25%]
                bg-linear-to-br 
                from-lime-400 
                to-lime-500 
                rounded-lg 
                overflow-hidden 
                shadow-md 
                hover:shadow-xl 
                transition-shadow
              "
                  >
                    <div className="relative h-28 sm:h-32 md:h-36">
                      <Image
                        src={center.image}
                        alt={center.name}
                        fill
                        className="object-fill"
                      />
                      {/* className="object-cover" */}
                    </div>

                    <div className="bg-amber-800 p-2 text-center text-white">
                      <h4 className="font-bold text-xs sm:text-sm">{center.name}</h4>
                      <p className="text-[10px] sm:text-xs text-amber-200">{center.code}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}
