'use client';

// import React from 'react';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';

interface Subject {
  name: string;
  theory: number;
  practical: number;
  total: number;
  grade: string;
}

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
  subjects: Subject[];
}

interface MarksheetProps {
  student: Student;
}

export function Marksheet({ student }: MarksheetProps) {
  const totalMarks = student.subjects.reduce((sum, sub) => sum + sub.total, 0);
  const maxMarks = student.subjects.length * 100;

  return (
    <div
      id="marksheet"
      className="relative w-[800px] min-h-[1000px] bg-white shadow-2xl"
    >
      <div
        className="absolute top-0 left-0 right-0 h-24"
        style={{
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
        }}
      ></div>

      <div
        className="absolute top-24 left-0 right-0 h-16"
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)'
        }}
      ></div>

      <div className="relative z-10 p-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900 leading-tight">
                  SST COMPUTER INSTITUTE
                </h1>
                <h2 className="text-xl font-bold text-blue-800">
                  EDUCATION PVT.LTD.
                </h2>
                <p className="text-xs text-gray-600 mt-1">
                  Affiliated to National Education Board | ISO 9001:2025 Certified
                </p>
                <p className="text-xs text-gray-600">
                  Main Road, Education Hub, India | Ph: +91-XXXXXXXXXX
                </p>
              </div>
            </div>

            <div className="w-24 h-28 border-2 border-gray-300 bg-gray-50 flex items-center justify-center">
              <span className="text-xs text-gray-500">Photo</span>
            </div>
          </div>

          <div className="text-center py-3 bg-blue-600 text-white rounded">
            <h3 className="text-2xl font-bold">MARK SHEET</h3>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-gray-700">Student Name:</span>
              <p className="text-gray-900 font-bold">{student.name}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Roll Number:</span>
              <p className="text-gray-900 font-bold">{student.rollNumber}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Father's Name:</span>
              <p className="text-gray-900">{student.fatherName}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Date of Birth:</span>
              <p className="text-gray-900">{student.dateOfBirth}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Course:</span>
              <p className="text-gray-900">{student.course}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Duration:</span>
              <p className="text-gray-900">{student.duration}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Registration No:</span>
              <p className="text-gray-900">{student.registrationNumber}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Issue Date:</span>
              <p className="text-gray-900">{student.issueDate}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="bg-blue-600 text-white py-2 px-4">
            <h4 className="font-bold text-center">MARKS DETAILS</h4>
          </div>

          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                  S.No
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                  Subject Name
                </th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">
                  Theory (50)
                </th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">
                  Practical (50)
                </th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">
                  Total (100)
                </th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody>
              {student.subjects.map((subject, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-3 px-4 text-sm text-gray-900 border-b">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900 border-b">
                    {subject.name}
                  </td>
                  <td className="py-3 px-4 text-sm text-center text-gray-900 border-b">
                    {subject.theory}
                  </td>
                  <td className="py-3 px-4 text-sm text-center text-gray-900 border-b">
                    {subject.practical}
                  </td>
                  <td className="py-3 px-4 text-sm text-center font-semibold text-gray-900 border-b">
                    {subject.total}
                  </td>
                  <td className="py-3 px-4 text-sm text-center font-semibold text-blue-600 border-b">
                    {subject.grade}
                  </td>
                </tr>
              ))}
              <tr className="bg-blue-50 font-bold">
                <td colSpan={4} className="py-3 px-4 text-sm text-right border-b border-t-2">
                  Grand Total:
                </td>
                <td className="py-3 px-4 text-sm text-center border-b border-t-2">
                  {totalMarks}/{maxMarks}
                </td>
                <td className="py-3 px-4 text-sm text-center border-b border-t-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">Percentage:</span>
                <span className="text-lg font-bold text-blue-600">{student.percentage}%</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-semibold text-gray-700">Overall Grade:</span>
                <span className="text-lg font-bold text-amber-600">{student.grade}</span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-600 mb-2">Result:</p>
              <span className="inline-block px-6 py-2 bg-green-600 text-white font-bold text-lg rounded">
                PASSED
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="text-center">
            <div className="w-16 h-16 border-2 border-gray-400 mb-2 bg-gray-50 flex items-center justify-center">
              <span className="text-xs text-gray-500">QR</span>
            </div>
            <p className="text-xs text-gray-600">Scan to Verify</p>
          </div>

          <div className="text-center">
            <div className="h-16 mb-2 flex items-center justify-center">
              <div className="text-3xl font-bold text-blue-600" style={{ fontFamily: 'cursive' }}>
                Authorized
              </div>
            </div>
            <div className="h-px w-40 bg-gray-400 mb-1"></div>
            <p className="text-sm font-semibold">Authorized Signatory</p>
            <p className="text-xs text-gray-600">PTCE Pvt. Ltd.</p>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500 border-t pt-4">
          <p>This is a computer generated marksheet and does not require physical signature</p>
          <p className="mt-1">For verification, visit www.sst.student.edu.in or scan the QR code</p>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)'
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 right-0 h-8"
        style={{
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
        }}
      ></div>
    </div>
  );
}
