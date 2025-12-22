import { CourseDetailType } from "@/app/types/coursedetail";
import { NextResponse } from "next/server";

const CourseDetailData: CourseDetailType[] = [
  {
    id: 1,
    course: 'ADCA',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Advanced Diploma in Computer Applications',
    price: '3200',
    category: 'basiccomputer',
    duration: '12 Months'
  },
  {
    id: 2,
    course: 'DCA',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Diploma in Computer Applications',
    price: '2600',
    category: 'basiccomputer',
    duration: '6 Months'
  },
  {
    id: 3,
    course: 'Basic Computer',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Basic Computer Skills Training',
    price: '1200',
    category: 'basiccomputer',
    duration: '2 Months'
  },
  {
    id: 4,
    course: 'Photoshop',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Graphic Design with Adobe Photoshop',
    price: '2200',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    id: 5,
    course: 'Corel Draw',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Vector Graphic Design using Corel Draw',
    price: '2200',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    id: 6,
    course: 'Fundamental Programme',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Computer Fundamentals Training',
    price: '800',
    category: 'basiccomputer',
    duration: '1 Month'
  },
  {
    id: 7,
    course: 'HTML',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'HTML Web Development',
    price: '1500',
    category: 'basiccomputer',
    duration: '2 Months'
  },
  {
    id: 8,
    course: 'DHTML',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Dynamic HTML Web Development',
    price: '1800',
    category: 'basiccomputer',
    duration: '2 Months'
  },
  {
    id: 9,
    course: 'Basic Computer Hardware',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Computer Hardware & Maintenance',
    price: '2400',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    id: 10,
    course: 'Tally ERP',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Accounting with Tally ERP',
    price: '2500',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    id: 11,
    course: 'Excel',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Microsoft Excel Professional Training',
    price: '1400',
    category: 'basiccomputer',
    duration: '2 Months'
  },
  {
    id: 12,
    course: 'Hindi Typing',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Hindi Typing Skills',
    price: '900',
    category: 'basiccomputer',
    duration: '1 Month'
  },
  {
    id: 13,
    course: 'English Typing',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'English Typing Skills',
    price: '900',
    category: 'basiccomputer',
    duration: '1 Month'
  },
  {
    id: 14,
    course: 'DTP',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Desktop Publishing Professional',
    price: '2400',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    id: 15,
    course: 'MS Office (Short Term)',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Microsoft Office Productivity Training',
    price: '1200',
    category: 'basiccomputer',
    duration: '1 Month'
  },
  {
    id: 16,
    course: 'Tally Basic',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Basic Accounting with Tally',
    price: '1800',
    category: 'basiccomputer',
    duration: '2 Months'
  },
  {
    id: 17,
    course: 'Format PC',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Computer Formatting & OS Installation',
    price: '800',
    category: 'basiccomputer',
    duration: '15 Days'
  },
  {
    id: 18,
    course: 'Install & Uninstall Program',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Software Installation & Removal Training',
    price: '800',
    category: 'basiccomputer',
    duration: '15 Days'
  },
  {
    id: 19,
    course: 'MDCA',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Master Diploma in Computer Applications',
    price: '3600',
    category: 'basiccomputer',
    duration: '12 Months'
  },
  {
    id: 20,
    course: 'Personality Development',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Personality & Soft Skills Development',
    price: '1500',
    category: 'basiccomputer',
    duration: '2 Months'
  },
  {
    id: 21,
    course: 'English Speaking',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Spoken English & Communication Skills',
    price: '2000',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    id: 22,
    course: 'APDCA',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Advanced Professional Diploma in Computer Applications',
    price: '3500',
    category: 'basiccomputer',
    duration: '12 Months'
  },
  {
    id: 23,
    course: 'CCC',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Course on Computer Concepts (CCC)',
    price: '1800',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    id: 24,
    course: 'B-Level',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Advanced Computer Programming (B-Level)',
    price: '3600',
    category: 'basiccomputer',
    duration: '15 Months'
  },
  {
    id: 25,
    course: 'CFA',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Computer Financial Accounting',
    price: '2200',
    category: 'basiccomputer',
    duration: '4 Months'
  },
  {
    id: 26,
    course: 'HTML, CSS, JS',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'HTML, CSS, Javascript Development',
    price: '40',
    category: 'webdevelopment',
    duration: '2 Months'
  },
  {
    id: 27,
    course: 'Node.js',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Backend with Node.js and Express.js',
    price: '21',
    category: 'webdevelopment',
    duration: '2 Months'
  },
  {
    id: 28,
    course: 'Database',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Learn Mongodb with Mongoose',
    price: '21',
    category: 'webdevelopment',
    duration: '1 Months'
  },
  {
    id: 29,
    course: 'React.js',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Learn React with Redux toolkit',
    price: '99',
    category: 'webdevelopment',
    duration: '2 Months'
  },
  {
    id: 30,
    course: 'React Native',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Learn React Native with Node.js',
    price: '89',
    category: 'mobiledevelopment',
    duration: '2 Months'
  },
  {
    id: 31,
    course: 'Swift',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Learn Swift from Scratch',
    price: '89',
    category: 'mobiledevelopment',
    duration: '2 Months'
  },
  {
    id: 32,
    course: 'Flutter',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Flutter App Development',
    price: '69',
    category: 'mobiledevelopment',
    duration: '2 Months'
  },
  {
    id: 33,
    course: 'Onsen UI',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Learn Onsen Ui with HTML, CSS',
    price: '69',
    category: 'mobiledevelopment',
    duration: '2 Months'
  },
  {
    id: 34,
    course: 'TensorFlow',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Learn TensorFlow with SQL',
    price: '99',
    category: 'datascience',
    duration: '2 Months'
  },
  {
    id: 35,
    course: 'AWS',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'AWS Deep Learning AMI',
    price: '99',
    category: 'datascience',
    duration: '2 Months'
  },
  {
    id: 36,
    course: 'Bokeh',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Learn Bokeh with Python',
    price: '99',
    category: 'datascience',
    duration: '2 Months'
  },
  {
    id: 37,
    course: 'Scikit',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Scikit with Python Development',
    price: '89',
    category: 'datascience',
    duration: '2 Months'
  },
  {
    id: 38,
    course: 'Laas',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Infra-as-a-Service',
    price: '21',
    category: 'cloudcomputing',
    duration: '2 Months'
  },
  {
    id: 39,
    course: 'Iaas',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Info-as-a-Service',
    price: '29',
    category: 'cloudcomputing',
    duration: '2 Months'
  },
  {
    id: 40,
    course: 'Paas',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Platform-as-a-Service',
    price: '99',
    category: 'cloudcomputing',
    duration: '2 Months'
  },
  {
    id: 41,
    course: 'Saas',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Software-as-a-Service',
    price: '58',
    category: 'cloudcomputing',
    duration: '2 Months'
  }
]

export default CourseDetailData


export const GET=()=>{
    return NextResponse.json({CourseDetailData})
}