'use client';

import React, { useState, useRef } from 'react';
import { Search, Download, FileText, Award, X } from 'lucide-react';
import { Certificate } from '../../components/Certificate';
import { Marksheet } from '../../components/Marksheet';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card } from '../../components/ui/card';
import studentsData from '@/data/students.json';

type Student = {
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
  subjects: Array<{
    name: string;
    theory: number;
    practical: number;
    total: number;
    grade: string;
  }>;
};

export default function CertificatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'roll' | 'name'>('roll');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [activeView, setActiveView] = useState<'certificate' | 'marksheet' | null>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  const marksheetRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    const student = studentsData.find((s) => {
      if (searchType === 'roll') {
        return s.rollNumber.toLowerCase() === searchQuery.toLowerCase();
      } else {
        return s.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
    });

    if (student) {
      setSelectedStudent(student as Student);
      setActiveView(null);
    } else {
      alert('Student not found. Please check the roll number or name.');
      setSelectedStudent(null);
    }
  };

  const handleDownload = async (type: 'certificate' | 'marksheet') => {
    const element = type === 'certificate' ? certificateRef.current : marksheetRef.current;

    if (!element || !selectedStudent) return;

    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const link = document.createElement('a');
      link.download = `${selectedStudent.name}_${type}_${selectedStudent.rollNumber}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 w-full overflow-x-hidden">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-10">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-12 h-12 text-blue-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Certificate & Marksheet Portal
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg">
            Search and download your academic certificates and marksheets
          </p>
        </div>

        {/* SEARCH CARD */}
        <Card className="max-w-2xl mx-auto p-6 shadow-lg mb-8">
          <div className="space-y-4">
            {/* Search buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant={searchType === 'roll' ? 'default' : 'outline'}
                onClick={() => setSearchType('roll')}
                className="flex-1"
              >
                Search by Roll Number
              </Button>
              <Button
                variant={searchType === 'name' ? 'default' : 'outline'}
                onClick={() => setSearchType('name')}
                className="flex-1"
              >
                Search by Name
              </Button>
            </div>

            {/* Input + Search button */}
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder={
                    searchType === 'roll'
                      ? 'Enter Roll Number (e.g., PTCE/2024/001)'
                      : 'Enter Student Name'
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="pl-10"
                />
              </div>

              <Button onClick={handleSearch} size="lg" className="w-full sm:w-auto">
                Search
              </Button>
            </div>

            {/* Sample values */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">Sample Search Values:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-medium">Roll Numbers:</span>
                  <p className="text-gray-700">PTCE/2024/001 to PTCE/2024/005</p>
                </div>
                <div>
                  <span className="font-medium">Names:</span>
                  <p className="text-gray-700">Rajesh Kumar, Priya Sharma, etc.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* SELECTED STUDENT DETAILS */}
        {selectedStudent && (
          <div className="space-y-6">
            <Card className="max-w-2xl mx-auto p-6 shadow-lg bg-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedStudent.name}
                  </h2>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><span className="font-semibold">Roll Number:</span> {selectedStudent.rollNumber}</p>
                    <p><span className="font-semibold">Course:</span> {selectedStudent.course}</p>
                    <p>
                      <span className="font-semibold">Grade:</span>{' '}
                      <span className="text-green-600 font-bold">{selectedStudent.grade}</span>{' '}
                      ({selectedStudent.percentage}%)
                    </p>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSelectedStudent(null);
                    setActiveView(null);
                    setSearchQuery('');
                  }}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  onClick={() => setActiveView('certificate')}
                  variant={activeView === 'certificate' ? 'default' : 'outline'}
                  className="h-auto py-4 cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Award className="w-8 h-8" />
                    <span>View Certificate</span>
                  </div>
                </Button>

                <Button
                  onClick={() => setActiveView('marksheet')}
                  variant={activeView === 'marksheet' ? 'default' : 'outline'}
                  className="h-auto py-4 cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-2">
                    <FileText className="w-8 h-8" />
                    <span>View Marksheet</span>
                  </div>
                </Button>
              </div>
            </Card>

            {/* CERTIFICATE VIEW */}
            {activeView === 'certificate' && (
              <div className="flex flex-col items-center space-y-4">
                <Button
                  onClick={() => handleDownload('certificate')}
                  size="lg"
                  className="shadow-lg text-white cursor-pointer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Certificate
                </Button>

                <div
                  ref={certificateRef}
                  className="shadow-2xl overflow-x-auto max-w-full"
                >
                  <Certificate student={selectedStudent} />
                </div>
              </div>
            )}

            {/* MARKSHEET VIEW */}
            {activeView === 'marksheet' && (
              <div className="flex flex-col items-center space-y-4">
                <Button
                  onClick={() => handleDownload('marksheet')}
                  size="lg"
                  className="shadow-lg text-white cursor-pointer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Marksheet
                </Button>

                <div
                  ref={marksheetRef}
                  className="shadow-2xl overflow-x-auto max-w-full"
                >
                  <Marksheet student={selectedStudent} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* NO STUDENT SELECTED */}
        {!selectedStudent && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Student Selected
            </h3>
            <p className="text-gray-500">
              Please search for a student using roll number or name
            </p>
          </div>
        )}
      </div>
    </div>
   
  );
}
