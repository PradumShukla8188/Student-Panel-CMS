'use client';

// import React from 'react';
import { Award, Shield } from 'lucide-react';

interface Student {
  rollNumber: string;
  name: string;
  fatherName: string;
  dateOfBirth: string;
  course: string;
  duration: string;
  grade: string;
  percentage: string;
  issueDate: string;
  registrationNumber: string;
}

interface CertificateProps {
  student: Student;
}

export function Certificate({ student }: CertificateProps) {
  return (
    <div
      id="certificate"
      className="relative w-[1000px] h-[700px] bg-white shadow-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f5f0 100%)'
      }}
    >
      <div className="absolute inset-0 border-[20px] border-amber-700"></div>
      <div className="absolute inset-[20px] border-[3px] border-amber-400"></div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(135deg, #78350f 0%, #92400e 50%, #78350f 100%)'
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-8"
          style={{
            background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #fbbf24 100%)'
          }}
        ></div>
      </div>

      <div className="relative z-10 p-12 flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-amber-900 leading-tight">
                SST COMPUTER INSTITUTE
              </h1>
              <h2 className="text-lg font-bold text-amber-800">
                EDUCATION PVT.LTD.
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Regd. Office: Main Road, Education Hub, India
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-16 h-16 bg-gray-200 border-2 border-gray-400"></div>
            <Award className="w-16 h-16 text-amber-600" />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <h3
                className="text-6xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'serif'
                }}
              >
                Diploma
              </h3>
              <div className="h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            </div>

            <p className="text-lg text-gray-700">
              This is to Certify that <span className="font-semibold">Mr./Ms.</span>
            </p>

            <div>
              <h4 className="text-3xl font-bold text-gray-900 mb-1">
                {student.name}
              </h4>
              <div className="h-0.5 w-96 mx-auto bg-gray-400"></div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-left max-w-2xl mx-auto">
              <div>
                <span className="text-sm text-gray-600">Son/Daughter of:</span>
                <p className="font-semibold text-gray-900">{student.fatherName}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Date of Birth:</span>
                <p className="font-semibold text-gray-900">{student.dateOfBirth}</p>
              </div>
              <div className="col-span-2">
                <span className="text-sm text-gray-600">Successfully completed the course:</span>
                <p className="font-bold text-lg text-amber-900">{student.course}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Duration:</span>
                <p className="font-semibold text-gray-900">{student.duration}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Grade:</span>
                <p className="font-semibold text-gray-900">{student.grade}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Roll Number:</span>
                <p className="font-semibold text-gray-900">{student.rollNumber}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Certificate Date:</span>
                <p className="font-semibold text-gray-900">{student.issueDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end mt-auto mb-20">
          <div className="text-center">
            <div className="w-32 h-16 bg-gray-100 rounded mb-2 flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            </div>
            <div className="h-px w-40 bg-gray-400 mb-1"></div>
            <p className="text-sm font-semibold">Director</p>
            <p className="text-xs text-gray-600">Dheeraj.</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 border-2 border-gray-400 mb-2 bg-gray-50 flex items-center justify-center">
              <span className="text-xs text-gray-500">QR</span>
            </div>
            <p className="text-xs text-gray-600">Verify Certificate</p>
          </div>

          <div className="text-center">
            <div className="w-40 h-16 mb-2 flex items-center justify-center">
              <div className="text-4xl font-bold text-amber-600" style={{ fontFamily: 'cursive' }}>
                Signature
              </div>
            </div>
            <div className="h-px w-40 bg-gray-400 mb-1"></div>
            <p className="text-sm font-semibold">Principal</p>
            <p className="text-xs text-gray-600">SSTCI Pvt. Ltd.</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20">
        <div className="w-24 h-24 rounded-full bg-amber-500 border-4 border-amber-700 flex items-center justify-center shadow-lg">
          <div className="text-center">
            <Award className="w-8 h-8 text-white mx-auto mb-1" />
            <span className="text-xs font-bold text-white"> {new Date().getFullYear()} </span>
          </div>
        </div>
      </div>
    </div>
  );
}
