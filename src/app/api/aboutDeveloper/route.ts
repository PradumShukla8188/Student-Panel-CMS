
import { TestimonialType } from "@/app/types/testimonial"
import { NextResponse } from "next/server"


const developerData: TestimonialType[] = [
  {
    profession: 'Full Stack Developer',
    name: 'Pradumn Shukla',
    imgSrc: '/images/testimonial/user-1.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "I have been a Full Stack Developer for more than 3 years, working with technologies like HTML, CSS, JavaScript, Angular, React, Next.js, Node.js, NestJS, Express, and Spring Boot. Throughout my career, I’ve faced many real-world challenges and learned effective, practical solutions. In this course, I share those experiences so you can avoid the same struggles and master full-stack development faster. That’s what makes this course truly valuable.",
  },
  {
    profession: 'Full Stack Developer',
    name: 'Abhishek',
    imgSrc: '/images/testimonial/user-2.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "I have spent over 2 years as a Full Stack Developer, working across both frontend and backend technologies including HTML, CSS, JavaScript, Angular, React, Next.js, Node.js, NestJS, and Express. Over the years, I’ve solved countless real-world problems — from performance issues to complex architecture decisions. In this course, I break down those challenges and show you the exact approaches that worked for me, making your learning faster and more practical.",
  },
  {
    profession: 'Full Stack Developer',
    name: 'Gagandeep Singh',
    imgSrc: '/images/testimonial/user-3.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "For over more than 5 years, I’ve been building full-stack applications using HTML, CSS, JavaScript, Angular, React, Next.js, Node.js, NestJS, and Express. I know exactly where developers struggle — because I struggled there too. This course isn’t just theory; it’s a collection of real problems I faced and the solutions that helped me grow into a confident full-stack engineer. That’s why this course delivers practical, real-world learning that actually makes you job-ready.",
  },

]



export const GET = () => {
  return NextResponse.json({ developerData })
}