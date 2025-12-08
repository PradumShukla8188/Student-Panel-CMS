'use client';

import Link from 'next/link';
import { Award, FileText, Search, Download } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                            <Award className="w-12 h-12 text-white" />
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        SST COMPUTER INSTITUTE
                    </h1>
                    <p className="text-xl text-gray-600 mb-2">
                        Certificate & Marksheet Verification Portal
                    </p>
                    <p className="text-gray-500">
                        Official document verification and download system
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="p-8 shadow-2xl mb-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Access Your Documents
                            </h2>
                            <p className="text-gray-600">
                                Search and download your certificates and marksheets instantly
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center p-6 bg-blue-50 rounded-lg">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Easy Search</h3>
                                <p className="text-sm text-gray-600">
                                    Search by roll number or name
                                </p>
                            </div>

                            <div className="text-center p-6 bg-amber-50 rounded-lg">
                                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">View Documents</h3>
                                <p className="text-sm text-gray-600">
                                    Preview certificates and marksheets
                                </p>
                            </div>

                            <div className="text-center p-6 bg-green-50 rounded-lg">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Download className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Download</h3>
                                <p className="text-sm text-gray-600">
                                    Download high-quality documents
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link href="/certificates">
                                <Button size="lg" className="px-8 py-6 text-lg text-white shadow-lg cursor-pointer">
                                    <FileText className="w-6 h-6 mr-2" />
                                    Go to Certificate Portal
                                </Button>
                            </Link>
                        </div>
                    </Card>

                    <Card className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Available Students</h3>
                                <p className="text-blue-100 text-sm mb-3">
                                    Currently 5 students can search their certificates
                                </p>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="bg-white/10 rounded px-3 py-2">
                                        <span className="font-semibold">Roll Numbers:</span>
                                        <p className="text-xs mt-1">PTCE/2024/001 to PTCE/2024/005</p>
                                    </div>
                                    <div className="bg-white/10 rounded px-3 py-2">
                                        <span className="font-semibold">Search by Name:</span>
                                        <p className="text-xs mt-1">Rajesh, Priya, Amit, Sneha, Vikram</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <footer className="text-center mt-16 text-gray-600 text-sm">
                    <p>© 2024 Pratagdas Temar Computer Education Pvt. Ltd.</p>
                    <p className="mt-2">All Rights Reserved | ISO 9001:2015 Certified</p>
                </footer>
            </div>
        </div>
    );
}



// "use client";

// import { useState } from "react";
// import { Download } from "lucide-react";
// import { motion } from "framer-motion";

// export default function ResultSearchPage() {
//     const [roll, setRoll] = useState("");
//     const [name, setName] = useState("");
//     const [dob, setDob] = useState("");
//     const [result, setResult] = useState<any>(null);

//     const dummyResult = {
//         roll: "102394",
//         name: "Pradumn Kumar",
//         dob: "2001-05-16",
//         course: "Diploma in Computer Application",
//         year: "2024",
//         status: "Pass",
//         marks: 488,
//         division: "First Division",
//         profileImage: "/profile.jpg",
//         pdfCertificate: "public/certificate.pdf",
//         pdfMarksheet: "public/marksheet.pdf",

//         subjects: [
//             { name: "Mathematics", marks: 98 },
//             { name: "Science", marks: 96 },
//             { name: "English", marks: 92 },
//             { name: "Computer", marks: 100 },
//             { name: "Social Studies", marks: 102 },
//         ]
//     };

//     const handleSearch = () => {
//         if (
//             roll === dummyResult.roll &&
//             name.toLowerCase() === dummyResult.name.toLowerCase() &&
//             dob === dummyResult.dob
//         ) {
//             setResult(dummyResult);
//         } else {
//             setResult({ error: "No matching record found." });
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center p-4">
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="w-full max-w-xl"
//             >
//                 {/* SEARCH BOX */}
//                 <div className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-blue-700">
//                     <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
//                         Search Your Result
//                     </h1>

//                     <div className="space-y-4">
//                         <input
//                             type="text"
//                             placeholder="Enter Roll Number"
//                             value={roll}
//                             onChange={(e) => setRoll(e.target.value)}
//                             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600"
//                         />

//                         <input
//                             type="text"
//                             placeholder="Enter Full Name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600"
//                         />

//                         <input
//                             type="date"
//                             value={dob}
//                             onChange={(e) => setDob(e.target.value)}
//                             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600"
//                         />

//                         <button
//                             onClick={handleSearch}
//                             className="w-full bg-blue-600 text-white rounded-xl py-3 text-lg hover:bg-blue-700"
//                         >
//                             Search Result
//                         </button>
//                     </div>

//                     {/* RESULT FOUND */}
//                     {result && !result.error && (
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             className="mt-8 bg-white rounded-xl p-5 border shadow-lg"
//                         >
//                             <h2 className="text-xl font-bold text-center text-blue-700 mb-4">
//                                 🎓 Student Result Verified
//                             </h2>

//                             {/* DIPLOMA STYLE HEADER */}
//                             <div className="bg-yellow-50 border-2 border-yellow-600 rounded-xl p-4 mb-4">
//                                 <h3 className="text-center text-2xl font-bold text-red-700 uppercase">
//                                     Social Study Computer Institute
//                                 </h3>
//                                 <p className="text-center text-gray-700">
//                                     (Registered Under Government of India)
//                                 </p>
//                             </div>

//                             {/* Student details */}
//                             <div className="flex justify-between">
//                                 <div>
//                                     <p><strong>Name:</strong> {result.name}</p>
//                                     <p><strong>Roll No:</strong> {result.roll}</p>
//                                     <p><strong>Course:</strong> {result.course}</p>
//                                     <p><strong>Year:</strong> {result.year}</p>
//                                     <p><strong>Status:</strong> {result.status}</p>
//                                     <p><strong>Division:</strong> {result.division}</p>
//                                 </div>

//                                 <img
//                                     src="/student-photo.png"
//                                     alt="student"
//                                     className="w-20 h-24 object-cover border rounded-md"
//                                 />
//                             </div>

//                             {/* SUBJECT TABLE */}
//                             <div className="mt-5">
//                                 <h3 className="font-semibold text-lg mb-2">Subject-wise Marks</h3>
//                                 <table className="w-full border text-sm">
//                                     <thead className="bg-blue-600 text-white">
//                                         <tr>
//                                             <th className="p-2 border">Subject</th>
//                                             <th className="p-2 border">Marks</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {result.subjects.map((sub: any, i: number) => (
//                                             <tr key={i} className="text-center">
//                                                 <td className="border p-2">{sub.name}</td>
//                                                 <td className="border p-2 font-bold">{sub.marks}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>

//                             {/* DOWNLOAD BUTTONS */}
//                             <div className="mt-6 flex flex-col gap-3">
//                                 <a
//                                     href={result.pdfCertificate}
//                                     target="_blank"
//                                     className="flex items-center justify-center bg-yellow-600 text-white py-3 rounded-xl font-medium hover:bg-yellow-700"
//                                 >
//                                     <Download className="mr-2" /> Download Certificate
//                                 </a>

//                                 <a
//                                     href={result.pdfMarksheet}
//                                     target="_blank"
//                                     className="flex items-center justify-center bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700"
//                                 >
//                                     <Download className="mr-2" /> Download Marksheet
//                                 </a>
//                             </div>
//                         </motion.div>
//                     )}

//                     {/* ERROR MESSAGE */}
//                     {result?.error && (
//                         <p className="mt-6 text-center text-red-600 font-medium">
//                             {result.error}
//                         </p>
//                     )}
//                 </div>
//             </motion.div>
//         </div>
//     );
// }