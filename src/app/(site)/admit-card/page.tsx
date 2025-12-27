"use client"

import Image from "next/image"
import { useState } from "react"
import { useRef } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"


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
    examDate: "25 March 2026",
    examTime: "10:00 AM - 1:00 PM",
    center: "SST Computer Institute, Main Campus",
    photo: "/images/student-photo.jpg"
  },
  {
    rollNumber: "27",
    name: "Pradum Shukla",
    course: "O Level",
    examDate: "27 March 2026",
    examTime: "10:00 AM - 1:00 PM",
    center: "SST Computer Institute, Main Campus",
    photo: "/images/student-photo.jpg"
  },
  {
    rollNumber: "28",
    name: "Abhisekh",
    course: "CCC",
    examDate: "29 March 2026",
    examTime: "10:00 AM - 1:00 PM",
    center: "SST Computer Institute, Main Campus",
    photo: "/images/student-photo.jpg"
  }
]

export default function AdmitCardPage() {
  const cardRef = useRef<HTMLDivElement | null>(null)

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


  const handleDownload = async () => {
    if (!cardRef.current) return;

    window.scrollTo(0, 0);

    const images = cardRef.current.querySelectorAll("img");
    await Promise.all(
      Array.from(images).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) resolve(true);
            else img.onload = () => resolve(true);
          })
      )
    );

    const canvas = await html2canvas(cardRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      scrollX: 0,
      scrollY: -window.scrollY,
      windowWidth: cardRef.current.scrollWidth,
      windowHeight: cardRef.current.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 10;

    const imgWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", margin, margin, imgWidth, imgHeight);
    pdf.save(`Admit-Card-${card?.rollNumber}.pdf`);
  };

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
          <>
            <div
              ref={cardRef}
              className="admit-card"
              style={{
                width: "794px",
                padding: "20px",
                backgroundColor: "#ffffff",
                color: "#000000",
                border: "4px solid #92400e",
                fontFamily: "Arial, sans-serif",
              }}
            >
              {/* Header */}


              <div
                style={{
                  textAlign: "center",
                  paddingBottom: "10px",
                  borderBottom: "2px solid #92400e",
                  marginBottom: "15px",
                }}
              >
                <div className="top-header-wrapper">
                  <Image
                    src="/images/logo/SST-logo.png"
                    alt="logo"
                    width={75}
                    height={50}
                    quality={100}
                  />
                  <div>
                    <h1 style={{ fontSize: "22px", fontWeight: "700", margin: 0 }}>
                      SST Computer Institute
                    </h1>
                    <p style={{ fontSize: "12px", margin: "2px 0" }}>
                      Authorised Computer Training Centre
                    </p>
                  </div>
                </div>
                <h2 style={{ fontSize: "16px", fontWeight: "600", margin: "5px 0" }}>
                  ADMIT CARD
                </h2>
              </div>



              {/* Student Info + Photo */}
              <div >
                <div >
                  <table className="outer-table">
                    <tr>
                      <td>
                        <table className="inner-table">
                          <tbody className="table-body">
                            <tr>
                              <td style={{ fontWeight: "600" }}>Name of Candidate</td>
                              <td >{card.name}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: "600", padding: "4px" }}>Roll Number</td>
                              <td style={{ padding: "4px" }}>{card.rollNumber}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: "600", padding: "4px" }}>Course</td>
                              <td style={{ padding: "4px" }}>{card.course}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: "600", padding: "4px" }}>Exam Date</td>
                              <td style={{ padding: "4px" }}>{card.examDate}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: "600", padding: "4px" }}>Exam Time</td>
                              <td style={{ padding: "4px" }}>{card.examTime}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: "600", padding: "4px" }}>Exam Centre</td>
                              <td style={{ padding: "4px" }}>{card.center}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                          <img
                            src="/images/authorised/student.png"
                            alt="Student photo"
                            style={{ width: "128px", height: "160px", border: "2px solid #000", objectFit: "cover" }}
                          />
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>


              </div>

              {/* Instructions */}
              <div style={{ fontSize: "12px", borderTop: "1px solid #92400e", paddingTop: "6px" }}>
                <p style={{ fontWeight: "600" }}>Instructions for the Candidate:</p>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Admit card is mandatory for entry.</li>
                  <li>Bring a valid ID proof.</li>
                  <li>Reporting time is 30 minutes early.</li>
                </ul>
              </div>

              {/* Signatures */}
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px", alignItems: "flex-end" }}>
                <div style={{ textAlign: "center" }}>
                  <p style={{ borderTop: "1px solid #000", width: "150px", margin: "0 auto", paddingTop: "4px" }}>
                    Student Signature
                  </p>
                </div>

                <div style={{ textAlign: "center" }}>
                  <img
                    src="/images/authorised/signature.png"
                    alt="Director Signature"
                    style={{ height: "50px", marginBottom: "4px" }}
                  />
                  <p style={{ borderTop: "1px solid #000", width: "180px", margin: "0 auto", paddingTop: "4px", fontSize: "12px" }}>
                    Authorized Signatory<br />Director
                  </p>
                </div>
              </div>
            </div>


            {/* Footer Buttons */}
            <div className="mt-6 flex gap-4 print:hidden" style={{ marginTop: "20px" }}>
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
          </>
        )}

      </div>
    </div>
  )
}
