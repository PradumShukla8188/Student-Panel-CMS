import { CourseDetailType } from "@/app/types/coursedetail";
import { NextResponse } from "next/server";

const CourseDetailData: CourseDetailType[] = [
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