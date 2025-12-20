import { CourseDetailType } from "@/app/types/coursedetail";
import { NextResponse } from "next/server";

const CourseDetailData: CourseDetailType[] = [
  {
    course: 'ADCA',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Advanced Diploma in Computer Applications',
    price: '3200',
    category: 'basiccomputer',
    duration: '12 Months'
  },
  {
    course: 'DCA',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Diploma in Computer Applications',
    price: '2600',
    category: 'basiccomputer',
    duration: '6 Months'
  },
  {
    course: 'Basic Computer',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Basic Computer Skills Training',
    price: '1200',
    category: 'basiccomputer',
    duration: '2 Months'
  },
  {
    course: 'Photoshop',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Graphic Design with Adobe Photoshop',
    price: '2200',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    course: 'Corel Draw',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Vector Graphic Design using Corel Draw',
    price: '2200',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    course: 'Fundamental Programme',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Computer Fundamentals Training',
    price: '800',
    category: 'basiccomputer',
    duration: '1 Month'
  },
  {
    course: 'HTML',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'HTML Web Development',
    price: '1500',
    category: 'basiccomputer',
    duration: '2 Months'
  },
  {
    course: 'DHTML',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Dynamic HTML Web Development',
    price: '1800',
    category: 'basiccomputer',
    duration: '2 Months'
  },
  {
    course: 'Basic Computer Hardware',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Computer Hardware & Maintenance',
    price: '2400',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    course: 'Tally ERP',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Accounting with Tally ERP',
    price: '2500',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    course: 'Excel',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Microsoft Excel Professional Training',
    price: '1400',
    category: 'basiccomputer',
    duration: '2 Months'
  },
  {
    course: 'Hindi Typing',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Hindi Typing Skills',
    price: '900',
    category: 'basiccomputer',
    duration: '1 Month'
  },
  {
    course: 'English Typing',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'English Typing Skills',
    price: '900',
    category: 'basiccomputer',
    duration: '1 Month'
  },
  {
    course: 'DTP',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Desktop Publishing Professional',
    price: '2400',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    course: 'MS Office (Short Term)',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Microsoft Office Productivity Training',
    price: '1200',
    category: 'basiccomputer',
    duration: '1 Month'
  },
  {
    course: 'Tally Basic',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Basic Accounting with Tally',
    price: '1800',
    category: 'basiccomputer',
    duration: '2 Months'
  },
  {
    course: 'Format PC',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Computer Formatting & OS Installation',
    price: '800',
    category: 'basiccomputer',
    duration: '15 Days'
  },
  {
    course: 'Install & Uninstall Program',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Software Installation & Removal Training',
    price: '800',
    category: 'basiccomputer',
    duration: '15 Days'
  },
  {
    course: 'MDCA',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Master Diploma in Computer Applications',
    price: '3600',
    category: 'basiccomputer',
    duration: '12 Months'
  },
  {
    course: 'Personality Development',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Personality & Soft Skills Development',
    price: '1500',
    category: 'basiccomputer',
    duration: '2 Months'
  },
  {
    course: 'English Speaking',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Spoken English & Communication Skills',
    price: '2000',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    course: 'APDCA',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Advanced Professional Diploma in Computer Applications',
    price: '3500',
    category: 'basiccomputer',
    duration: '12 Months'
  },
  {
    course: 'CCC',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Course on Computer Concepts (CCC)',
    price: '1800',
    category: 'basiccomputer',
    duration: '3 Months'
  },
  {
    course: 'B-Level',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Advanced Computer Programming (B-Level)',
    price: '3600',
    category: 'basiccomputer',
    duration: '15 Months'
  },
  {
    course: 'CFA',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Computer Financial Accounting',
    price: '2200',
    category: 'basiccomputer',
    duration: '4 Months'
  },
  {
    course: 'HTML, CSS, JS',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'HTML, CSS, Javascript Development',
    price: '40',
    category: 'webdevelopment',
    duration: '2 Months'
  },
  {
    course: 'Node.js',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Backend with Node.js and Express.js',
    price: '21',
    category: 'webdevelopment',
    duration: '2 Months'
  },
  {
    course: 'Database',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Learn Mongodb with Mongoose',
    price: '21',
    category: 'webdevelopment',
    duration: '1 Months'
  },
  {
    course: 'React.js',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Learn React with Redux toolkit',
    price: '99',
    category: 'webdevelopment',
    duration: '2 Months'
  },
  {
    course: 'React Native',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Learn React Native with Node.js',
    price: '89',
    category: 'mobiledevelopment',
    duration: '2 Months'
  },
  {
    course: 'Swift',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Learn Swift from Scratch',
    price: '89',
    category: 'mobiledevelopment',
    duration: '2 Months'
  },
  {
    course: 'Flutter',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Flutter App Development',
    price: '69',
    category: 'mobiledevelopment',
    duration: '2 Months'
  },
  {
    course: 'Onsen UI',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Learn Onsen Ui with HTML, CSS',
    price: '69',
    category: 'mobiledevelopment',
    duration: '2 Months'
  },
  {
    course: 'TensorFlow',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Learn TensorFlow with SQL',
    price: '99',
    category: 'datascience',
    duration: '2 Months'
  },
  {
    course: 'AWS',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'AWS Deep Learning AMI',
    price: '99',
    category: 'datascience',
    duration: '2 Months'
  },
  {
    course: 'Bokeh',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Learn Bokeh with Python',
    price: '99',
    category: 'datascience',
    duration: '2 Months'
  },
  {
    course: 'Scikit',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Scikit with Python Development',
    price: '89',
    category: 'datascience',
    duration: '2 Months'
  },
  {
    course: 'Laas',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Infra-as-a-Service',
    price: '21',
    category: 'cloudcomputing',
    duration: '2 Months'
  },
  {
    course: 'Iaas',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Info-as-a-Service',
    price: '29',
    category: 'cloudcomputing',
    duration: '2 Months'
  },
  {
    course: 'Paas',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Platform-as-a-Service',
    price: '99',
    category: 'cloudcomputing',
    duration: '2 Months'
  },
  {
    course: 'Saas',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Software-as-a-Service',
    price: '58',
    category: 'cloudcomputing',
    duration: '2 Months'
  },
]

export const GET=()=>{
    return NextResponse.json({CourseDetailData})
}