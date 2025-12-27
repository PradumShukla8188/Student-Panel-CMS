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
                        SST COMPUTER & WELL KNOWLEDGE INSTITUTE
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
            </div>
        </div>
    );
}
