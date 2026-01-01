"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
//  import { Developer } from '@/app/types/aboutDeveloper';

type Developer = {
  id: number;
  name: string;
  title: string;
  imageSrc: string;
  skills: string[];
  contactNumber: string;
  email: string;
  youtubeLink: string;
  facebookLink: string;
  instagramLink: string;
};

const developers: Developer[] = [
  {
    id: 1,
    name: "Pradum Shukla",
    title: "(Software Engineer) Full-Stack Web Developer",
    imageSrc: "/images/developer/pradum.jpg",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Nest.js", "Angular", "Python", "C", "C++",
      "Html", "Css", "Bootstrap", "Java", "SpringBoot", "Django", "MYSQL", "PostgreSQL"
    ],
    contactNumber: "918188898587",
    email: "pradumshukla1133@gmail.com",
    youtubeLink: "https://www.youtube.com/channel/UCiK5k3hOoDZInVnFYT1u12A",
    facebookLink: "https://www.facebook.com/pradum.shukla.146",
    instagramLink: "https://www.instagram.com/mr_pradum_shukla",
  },
  {
    id: 2,
    name: "Gagandeep Singh",
    title: "(Software Engineer) Full-Stack Web Developer",
    imageSrc: "/images/developer/gagandeep.jfif",
    skills: ["Angular", "React", "Node.js", "Next.js", "MongoDb", "Java", "Html", "Css", "Bootstrap"],
    contactNumber: "919878067890",
    email: "dev.gagandeepsingh@gmail.com",
    youtubeLink: "#",
    facebookLink: "#",
    instagramLink: "#",
  },
  {
    id: 3,
    name: "Abhishek",
    title: "(Software Engineer) Full-Stack Web Developer",
    imageSrc: "/images/developer/abhi.jfif",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Nest.js", "Html", "Css", "Bootstrap", "MYSQL"],
    contactNumber: "918580593778",
    email: "abhishek@gamil.com",
    youtubeLink: "#",
    facebookLink: "#",
    instagramLink: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function AboutDeveloper() {
  return (
    <section className="bg-gray-100 py-20 mt-5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-gray-800">
            👨‍💻 Meet Our Developers
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Need a professional website, web application, or custom software?
            Contact our expert developers to place your order and bring your
            ideas to life.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={dev.imageSrc}
                  alt={dev.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover shadow-md"
                />

                <h3 className="mt-4 text-xl font-semibold text-indigo-700">
                  {dev.name}
                </h3>
                <p className="text-gray-500 text-sm">{dev.title}</p>
                {/* Phone */}
                <a
                  href={`tel:+${dev.contactNumber}`}
                  className="flex items-center justify-center gap-2 text-gray-700 font-medium hover:text-indigo-600 transition"
                >
                  <span className="text-xl">📞</span>
                  <span>+{dev.contactNumber}</span>
                </a>

                {/* Icons */}
                <div className="flex gap-5 text-2xl mt-4">
                  <a
                    href={`https://wa.me/${dev.contactNumber}`}
                    target="_blank"
                    className="text-green-500 hover:scale-110 transition"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href={`mailto:${dev.email}`}
                    className="text-red-500 hover:scale-110 transition"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href={dev.facebookLink}
                    target="_blank"
                    className="text-blue-600 hover:scale-110 transition"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={dev.instagramLink}
                    target="_blank"
                    className="text-pink-500 hover:scale-110 transition"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={dev.youtubeLink}
                    target="_blank"
                    className="text-red-600 hover:scale-110 transition"
                  >
                    <FaYoutube />
                  </a>
                </div>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {dev.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        {/* YouTube Subscribe Section */}
<div className="mt-16 bg-red-600 rounded-2xl p-8 text-center text-white shadow-lg">
  <h3 className="text-2xl font-bold">
    📺 Subscribe Our YouTube Channel
  </h3>
  <p className="mt-3 text-red-100 max-w-2xl mx-auto">
    Learn Web Development, Computer Basics, and Practical Tutorials in Hindi.
    Subscribe now and stay updated with the latest videos.
  </p>

  <a
    href="https://www.youtube.com/channel/UCiK5k3hOoDZInVnFYT1u12A"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 mt-6 bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-red-50 transition"
  >
    <span className="text-2xl">▶</span>
    Subscribe Now
  </a>
</div>
        
        <p className="mt-16 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Developers. All
          Rights Reserved.
        </p>
      </div>
    </section>
  );
}

// 'use client';

// import { motion } from 'framer-motion';
// import type { ReactNode } from 'react';
// import { Developer } from '@/app/types/aboutDeveloper';

// const developers: Developer[] = [
//     {
//         id: 1,
//         name: 'Pradum Shukla',
//         title: 'Full-Stack Web Developer',
//         imageSrc: '/assets/developer/pradum-shukla.jpeg',
//         skills: [
//             'React', 'Next.js', 'Angular', 'TypeScript', 'Node.js', 'Express.js',
//             'MongoDB', 'MySQL', 'Redis', 'TailwindCSS', 'GSAP', 'Framer Motion'
//         ],
//         services: [
//             'Custom Web Apps', 'API Integration', 'Responsive Design', 'Database Design',
//             'Performance Optimization', 'UI/UX Implementation'
//         ],
//         contactNumber: '918188898587',
//         email: 'pradumshukla1133@gmail.com',
//         youtubeLink: 'https://www.youtube.com/channel/UCiK5k3hOoDZInVnFYT1u12A',
//         facebookLink: 'https://www.facebook.com/pradum.shukla.146?mibextid=ZbWKwL',
//         instagramLink: 'https://www.instagram.com/mr_pradum_shukla?igsh=aXFyc2RkYjlpOXdw',
//     },
//      {
//         id: 2,
//         name: 'Gagandeep Singh',
//         title: 'Full-Stack Web Developer',
//         imageSrc: '/assets/developer/pradum-shukla.jpeg',
//         skills: [
//             'React', 'Next.js', 'Angular', 'TypeScript', 'Node.js', 'Express.js',
//             'MongoDB', 'MySQL', 'Redis', 'TailwindCSS', 'GSAP', 'Framer Motion'
//         ],
//         services: [
//             'Custom Web Apps', 'API Integration', 'Responsive Design', 'Database Design',
//             'Performance Optimization', 'UI/UX Implementation'
//         ],
//         contactNumber: '918188898587',
//         email: 'pradumshukla1133@gmail.com',
//         youtubeLink: 'https://www.youtube.com/channel/UCiK5k3hOoDZInVnFYT1u12A',
//         facebookLink: 'https://www.facebook.com/pradum.shukla.146?mibextid=ZbWKwL',
//         instagramLink: 'https://www.instagram.com/mr_pradum_shukla?igsh=aXFyc2RkYjlpOXdw',
//     },
//      {
//         id: 3,
//         name: 'Abhishekh',
//         title: 'Full-Stack Web Developer',
//         imageSrc: '/assets/developer/pradum-shukla.jpeg',
//         skills: [
//             'React', 'Next.js', 'Angular', 'TypeScript', 'Node.js', 'Express.js',
//             'MongoDB', 'MySQL', 'Redis', 'TailwindCSS', 'GSAP', 'Framer Motion'
//         ],
//         services: [
//             'Custom Web Apps', 'API Integration', 'Responsive Design', 'Database Design',
//             'Performance Optimization', 'UI/UX Implementation'
//         ],
//         contactNumber: '918188898587',
//         email: 'pradumshukla1133@gmail.com',
//         youtubeLink: 'https://www.youtube.com/channel/UCiK5k3hOoDZInVnFYT1u12A',
//         facebookLink: 'https://www.facebook.com/pradum.shukla.146?mibextid=ZbWKwL',
//         instagramLink: 'https://www.instagram.com/mr_pradum_shukla?igsh=aXFyc2RkYjlpOXdw',
//     },
// ];

// // Icon Link Component
// const IconLink = ({ href, icon, label, colorClass }: { href: string; icon: ReactNode; label: string; colorClass: string }) => (
//     <a
//         href={href}
//         aria-label={label}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={`${colorClass} text-2xl transition-transform transform hover:scale-110`}
//     >
//         {icon}
//     </a>
// );

// const AboutDeveloper = () => {
//     const dev = developers[0];

//     return (
//         <footer className="bg-gray-100 border-t mt-20">
//             <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//                 <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="text-center"
//                 >
//                     <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                         👨‍💻 About the Developer
//                     </h2>

//                     <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
//                         <img
//                             src={dev.imageSrc}
//                             alt={dev.name}
//                             className="w-32 h-32 rounded-full object-cover shadow-md"
//                         />
//                         <div className="text-center sm:text-left">
//                             <h3 className="text-xl font-semibold text-indigo-700">{dev.name}</h3>
//                             <p className="text-gray-600 mb-2">{dev.title}</p>

//                             <div className="flex justify-center sm:justify-start gap-5 mb-4">
//                                 <IconLink
//                                     href={`https://wa.me/${dev.contactNumber}`}
//                                     icon={<i className="fab fa-whatsapp"></i>}
//                                     label="WhatsApp"
//                                     colorClass="text-green-500 hover:text-green-600"
//                                 />
//                                 <IconLink
//                                     href={`mailto:${dev.email}`}
//                                     icon={<i className="fas fa-envelope"></i>}
//                                     label="Email"
//                                     colorClass="text-red-500 hover:text-red-600"
//                                 />
//                                 <IconLink
//                                     href={dev.facebookLink}
//                                     icon={<i className="fab fa-facebook"></i>}
//                                     label="Facebook"
//                                     colorClass="text-blue-600 hover:text-blue-700"
//                                 />
//                                 <IconLink
//                                     href={dev.instagramLink}
//                                     icon={<i className="fab fa-instagram"></i>}
//                                     label="Instagram"
//                                     colorClass="text-pink-500 hover:text-pink-600"
//                                 />
//                                 <IconLink
//                                     href={dev.youtubeLink}
//                                     icon={<i className="fab fa-youtube"></i>}
//                                     label="YouTube"
//                                     colorClass="text-red-600 hover:text-red-700"
//                                 />
//                             </div>

//                             <div className="mt-4">
//                                 <p className="font-medium text-gray-700 mb-1">Skills:</p>
//                                 <div className="flex flex-wrap justify-center sm:justify-start gap-2">
//                                     {dev.skills.map((skill, i) => (
//                                         <span
//                                             key={i}
//                                             className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full"
//                                         >
//                                             {skill}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <p className="mt-10 text-gray-500 text-sm">
//                         © {new Date().getFullYear()} Hindi Tech Siksha Computer Institute. Developed by{' '}
//                         <span className="font-semibold text-indigo-700">{dev.name}</span>.
//                     </p>
//                 </motion.div>
//             </div>
//         </footer>
//     );
// };

// export default AboutDeveloper;

// "use client";

// import TestimonialSkeleton from "../../Skeleton/Testimonial";
// import { useEffect, useState } from "react";
// import { TestimonialType } from "@/app/types/testimonial";
// import Image from "next/image";
// import dynamic from "next/dynamic";
// import { developerData } from "@/data/developer-data";

// const Slider = dynamic(() => import("react-slick"), { ssr: false });

// const AboutDeveloper = () => {
//   console.log("developerData-->", developerData);
//   const [testimonial, setTestimonial] = useState<TestimonialType[]>(developerData||[]);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);

//     setTimeout(() => {
//       window.dispatchEvent(new Event("resize"));
//     }, 200);
//   }, []);

//   if (!isMounted) return null; // Prevent SSR mismatch

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: false,
//     cssEase: "linear",
//     responsive: [
//       { breakpoint: 1200, settings: { slidesToShow: 2 } },
//       { breakpoint: 800, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <main>
//       <section id="testimonial-section" className="bg-cream px-4 py-12">
//         <div className="container">
//           <div className="developer-heading text-4xl mt-5 text-cyan-600">
//            Developer Team
//           </div>
//           <div className="developer-info">
//             { testimonial?.map((items, i) => (
//                 <div key={`dev-${i}`}>
//                   <div className="bg-white m-4 pt-8 px-12 pb-10 text-center rounded-lg">
//                     <div className="relative z-0 flex justify-center items-center
//                       before:absolute before:bg-[url('/images/testimonial/greenpic.svg')]
//                       before:h-6 before:w-6 before:bottom-0 before:z-10 before:left-[54%]">
//                       <Image
//                         src={items.imgSrc}
//                         alt="dev"
//                         width={64}
//                         height={64}
//                         className="inline-block rounded-full ring-2 ring-white relative"
//                       />
//                     </div>

//                     <p className="text-sm pt-4 pb-2  text-amber-900">{items.profession}</p>
//                     <p className="text-2xl font-semibold pb-3 text-amber-800">{items.name}</p>

//                     <Image
//                       src={items.starimg}
//                       alt="stars-img"
//                       className="m-auto pb-6 w-[30%]"
//                       width={32}
//                       height={32}
//                     />

//                     <p className="leading-7">
//                       {items.detail}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default AboutDeveloper;
