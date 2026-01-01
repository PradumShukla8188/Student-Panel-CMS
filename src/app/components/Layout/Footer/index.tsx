

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">
           SST COMPUTER & WELL KNOWLEDGE INSTITUTE
        </p>
        <p className="text-sm text-amber-200">
          Building Future Through Quality Education
        </p>
        <p className="text-xs text-amber-300 mt-4">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

// 'use client';

// import { motion } from 'framer-motion';
// import type { ReactNode } from 'react';

// interface Developer {
//     id: number;
//     name: string;
//     title: string;
//     imageSrc: string;
//     skills: string[];
//     services: string[];
//     contactNumber: string;
//     email: string;
//     youtubeLink: string;
//     facebookLink: string;
//     instagramLink: string;
// }

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
// ];

// // Simple icons
// const IconLink = ({ href, icon, label }: { href: string; icon: ReactNode; label: string }) => (
//     <a
//         href={href}
//         aria-label={label}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-indigo-600 hover:text-indigo-800 transition-colors"
//     >
//         {icon}
//     </a>
// );

// const Footer = () => {
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

//                             <div className="flex justify-center sm:justify-start gap-4 mb-3">
//                                 <IconLink
//                                     href={`https://wa.me/${dev.contactNumber}`}
//                                     icon={<i className="fab fa-whatsapp text-2xl"></i>}
//                                     label="WhatsApp"
//                                 />
//                                 <IconLink
//                                     href={`mailto:${dev.email}`}
//                                     icon={<i className="fas fa-envelope text-2xl"></i>}
//                                     label="Email"
//                                 />
//                                 <IconLink
//                                     href={dev.facebookLink}
//                                     icon={<i className="fab fa-facebook text-2xl"></i>}
//                                     label="Facebook"
//                                 />
//                                 <IconLink
//                                     href={dev.instagramLink}
//                                     icon={<i className="fab fa-instagram text-2xl"></i>}
//                                     label="Instagram"
//                                 />
//                                 <IconLink
//                                     href={dev.youtubeLink}
//                                     icon={<i className="fab fa-youtube text-2xl"></i>}
//                                     label="YouTube"
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
//                         © {new Date().getFullYear()} LGOOG Computer Institute. Developed by{' '}
//                         <span className="font-semibold text-indigo-700">{dev.name}</span>.
//                     </p>
//                 </motion.div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { Icon } from '@iconify/react/dist/iconify.js'
// import { useEffect, useState } from 'react'
// import { FooterLinkType } from '@/app/types/footerlinks'
// import Logo from '../Header/Logo'

// const Footer = () => {
//   const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('/api/data')
//         if (!res.ok) throw new Error('Failed to fetch')
//         const data = await res.json()
//         SetFooterlink(data.FooterLinkData)
//       } catch (error) {
//         console.error('Error fetching services:', error)
//       }
//     }
//     fetchData()
//   }, [])

//   return (
//     <div className='bg-primary' id='first-section'>
//       <div className='container pt-60 pb-10'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 xl:gap-8'>
//           <div className='col-span-4 flex flex-col gap-5'>
//             <div>
//               <Logo />
//             </div>
//             <p className='text-white text-lg font-medium leading-7'>
//               {' '}
//               Level up your skills, and get dream <br /> job with passion.{' '}
//             </p>
//             <div className='flex gap-4'>
//               <Link
//                 href='/'
//                 className='bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300'>
//                 <Icon
//                   icon='tabler:brand-instagram'
//                   className='text-2xl inline-block'
//                 />
//               </Link>
//               <Link
//                 href='/'
//                 className='bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300'>
//                 <Icon
//                   icon='tabler:brand-dribbble'
//                   className='text-2xl inline-block'
//                 />
//               </Link>
//               <Link
//                 href='/'
//                 className='bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300'>
//                 <Icon
//                   icon='tabler:brand-twitter-filled'
//                   className='text-2xl inline-block'
//                 />
//               </Link>
//               <Link
//                 href='/'
//                 className='bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300'>
//                 <Icon
//                   icon='tabler:brand-youtube-filled'
//                   className='text-2xl inline-block'
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* CLOUMN-2/3 */}
//           <div className='col-span-4'>
//             <div className='flex gap-20'>
//               {footerlink.map((product, i) => (
//                 <div key={i} className='group relative col-span-2'>
//                   <p className='text-white text-xl font-semibold mb-9'>
//                     {product.section}
//                   </p>
//                   <ul>
//                     {product.links.map((item, i) => (
//                       <li key={i} className='mb-3'>
//                         <Link
//                           href={item.href}
//                           className='text-white/60 hover:text-white text-sm font-normal mb-6'>
//                           {item.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* CLOUMN-4 */}

//           <div className='col-span-4'>
//             <h3 className='text-white text-xl font-semibold mb-6'>
//               Stay up to date
//             </h3>
//             <div className='relative text-white focus-within:text-white flex flex-row-reverse w-[50%] lg:w-full'>
//               <input
//                 type='Email address'
//                 name='q'
//                 className='py-4 text-sm w-full text-white bg-white/15 rounded-md pl-4 focus:outline-hidden bg-emailbg focus:text-white'
//                 placeholder='Your email address'
//                 autoComplete='off'
//               />
//               <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
//                 <button
//                   type='submit'
//                   className='p-1 focus:outline-hidden focus:shadow-outline'>
//                   <Icon
//                     icon='tabler:send'
//                     className='text-white text-2xl inline-block me-2'
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='py-3'>
//         <h3 className='text-center text-white/60'>
//           @2025 - All Rights Reserved by{' '}
//           <Link
//             href='https://adminmart.com/'
//             target='_blank'
//             className='hover:text-white'>
//             {' '}
//             GetNextJs Templates.com
//           </Link>
//         </h3>
//       </div>
//     </div>
//   )
// }

export default Footer
