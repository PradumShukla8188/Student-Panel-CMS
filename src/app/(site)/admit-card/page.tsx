"use client"

import Image from "next/image"
import { useState } from "react"

type AdmitCard = {
  rollNumber: string
  name: string
  course: string
  examDate: string
  examTime: string
  center: string
  photo: string
}

const admitCardData: AdmitCard[] = [
  {
    rollNumber: "26",
    name: "Gagandeep Singh",
    course: "ADCA",
    examDate: "25 March 2025",
    examTime: "10:00 AM - 1:00 PM",
    center: "SST Computer Institute, Main Campus",
    photo: "/images/student-photo.jpg"
  }
]

export default function AdmitCardPage() {
  const [roll, setRoll] = useState("")
  const [card, setCard] = useState<AdmitCard | null>(null)
  const [error, setError] = useState("")

  const handleSearch = () => {
    const found = admitCardData.find(
      item => item.rollNumber === roll
    )

    if (!found) {
      setError("Admit Card not found")
      setCard(null)
      return
    }

    setError("")
    setCard(found)
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    window.print() // Save as PDF
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="w-full max-w-3xl">

        {/* Search */}
        <div className="bg-white p-4 rounded shadow mb-6 print:hidden">
          <h2 className="text-xl font-bold text-center mb-3">
            Download Admit Card
          </h2>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Roll Number"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              className="flex-1 border px-4 py-2 rounded"
            />
            <button
              onClick={handleSearch}
              className="bg-amber-900 text-white px-6 rounded hover:bg-amber-900"
            >
              Search
            </button>
          </div>

          {error && (
            <p className="text-red-600 text-center mt-2">
              {error}
            </p>
          )}
        </div>

        {/* ADMIT CARD */}
        {card && (
          <div className="bg-white border-4 border-amber-700 rounded print:border-black">

            {/* Header with color */}
            <div className="bg-amber-900 text-white text-center py-4 rounded-t">
              <h1 className="text-3xl font-bold uppercase">
                SST Computer Institute
              </h1>
              <p className="text-sm">
                Authorised Computer Training Centre
              </p>
              <h2 className="text-lg font-semibold mt-1 tracking-wide">
                ADMIT CARD
              </h2>
            </div>

            {/* Body */}
            <div className="p-6">

              <div className="grid grid-cols-3 gap-4">

                {/* Student Details */}
                <div className="col-span-2 space-y-2 text-sm">
                  <p><strong>Name:</strong> {card.name}</p>
                  <p><strong>Roll No:</strong> {card.rollNumber}</p>
                  <p><strong>Course:</strong> {card.course}</p>
                  <p><strong>Exam Date:</strong> {card.examDate}</p>
                  <p><strong>Exam Time:</strong> {card.examTime}</p>
                  <p><strong>Exam Centre:</strong> {card.center}</p>
                </div>

                {/* Photo */}
                <div className="flex justify-end">
                  {/* <img
                    src={card.photo}
                    alt="Student Photo"
                    className="w-32 h-40 border-2 border-black object-cover"
                  /> */}
                  <Image
                  src="/images/authorised/student.png"
                  alt="Student photo"
                  className="w-32 h-40 border-2 border-black object-cover"
                  width={32}
                  height={40}
                  />
                </div>

              </div>

              {/* Instructions */}
              <div className="mt-4 border-t pt-3 text-sm">
                <p className="font-semibold">Instructions:</p>
                <ul className="list-disc ml-5">
                  <li>Admit card is mandatory for entry.</li>
                  <li>Bring a valid ID proof.</li>
                  <li>Reporting time is 30 minutes early.</li>
                </ul>
              </div>

              {/* Signatures */}
              <div className="mt-10 flex justify-between items-end">

                <div className="text-center">
                  <p className="border-t border-black w-40 pt-1">
                    Student Signature
                  </p>
                </div>

                <div className="text-center">
                  <img
                    src="/images/authorised/signature.png"
                    alt="Director Signature"
                    className="h-12 mx-auto"
                  />
                  <p className="border-t border-black w-48 pt-1">
                    Authorized Signatory<br />Director
                  </p>
                </div>

              </div>

              {/* Footer Buttons */}
              <div className="mt-6 flex gap-4 print:hidden">
                <button
                  onClick={handleDownload}
                  className="flex-1 bg-green-700 text-white py-2 rounded hover:bg-green-800"
                >
                  Download PDF
                </button>

                <button
                  onClick={handlePrint}
                  className="flex-1 bg-gray-700 text-white py-2 rounded hover:bg-gray-800"
                >
                  Print Admit Card
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}
