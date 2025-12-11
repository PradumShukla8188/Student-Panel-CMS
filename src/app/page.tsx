import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Companies from '@/app/components/Home/Companies'
import NamesList from '@/app/components/Home/Courses'
import Mentor from '@/app/components/Home/Mentor'
import Testimonial from '@/app/components/Home/Testimonial'
import Newsletter from '@/app/components/Home/Newsletter'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'
import NoticeBoard from './components/NoticeBoard'
import ActionButtons from './components/ActionButtons'
import StudentShowcase from './components/StudentShowcase'
import { BookOpen } from 'lucide-react'
import HeroSlider from './components/HeroSlider'
import AboutDeveloper from './components/public/AboutDeveloper/AboutDeveloper'
// import Header from './components/Header'
export const metadata: Metadata = {
  title: 'SSTCI',
}

export default function Home() {
  return (
    <main>
      {/* <Hero />
      <Companies />
      <NamesList />
      <Mentor />
      <Testimonial />
      <ContactForm />
      <Newsletter /> */}
      <div className="min-h-screen bg-gray-50">
        {/* <Header /> */}

        <HeroSlider />

        <main className="container mx-auto px-4 py-12">
          <section className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="h-8 w-8 text-cyan-600" />
              <h2 className="text-4xl font-bold text-cyan-600">
                WELCOME TO SST COMPUTER INSTITUTE
              </h2>
            </div>

            <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-justify space-y-4">
              <p>
                A computer institute serves as a hub for individuals seeking to acquire a comprehensive understanding of computers and their applications. These institutes offer a diverse range of courses, catering to various levels of expertise, from beginners to experienced professionals. Curriculum typically encompasses fundamental concepts such as computer hardware and software, operating systems, programming languages, web development, graphic design, cyber security, and data analytics. Instructors, often industry professionals, guide students through hands-on training sessions, fostering both theoretical and practical skills.
              </p>
              <p>
                In an era dominated by technology, the demand for computer education continues to grow, making these institutes essential in nurturing a digitally literate workforce. Moreover, these institutes often offer career guidance and job placement services, connecting graduates with potential employers in the competitive tech industry. The nurturing environment, structured learning programs, and industry-relevant training make computer institutes valuable platforms for individuals seeking to unlock their potential and embark on successful careers in the dynamic field of computer science.
              </p>
            </div>
          </section>

          <StudentShowcase />

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <ActionButtons />
            </div>

            <div>
              <NoticeBoard />

              <div className="mt-6 bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">
                  Welcome to SST COMPUTER INSTITUTE
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="leading-relaxed">
                    हमारे संस्थान में 100 से अधिक छात्र हैं, और Franchise Desk के द्वारा 100 से अधिक है। जो नहीं है वह है।
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                    <p className="font-semibold text-amber-900 mb-2">
                      100% PASSED STUDENTS OF OUR INSTITUTE
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Software Courses</li>
                      <li>✓ Hardware Courses - Web Design Courses</li>
                      <li>✓ Graphic design Courses Etc.</li>
                    </ul>
                  </div>
                  <p className="text-sm leading-relaxed">
                    आपके संस्थान से (DCIO) Morning & Evening (Morning की Classes सुबह 8 से 2 बजे तक चलती है) (Evening की classes शाम 2 से 8 बजे तक चलती है) और दूसरी है और बच्चों को अच्छी तरह से Computer & Internet की शिक्षा दी जाती है।
                  </p>
                  <p className="text-sm font-semibold text-amber-800">
                    हमारी मेहनत और हमारे हुनर का फल है कि इससे अब तक सैकड़ों बच्चे सफल बन चुके हैं।
                  </p>
                </div>
              </div>
            </div>
           
          </div>

           <AboutDeveloper />
        </main>
      </div>
    </main>
  )
}
