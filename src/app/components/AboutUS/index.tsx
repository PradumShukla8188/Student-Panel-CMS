"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Marquee from "../marquee";

export default function AboutInstitute() {
  const Router = useRouter();
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center mb-8 text-amber-700">
        SST COMPUTER & WELL KNOWLEDGE INSTITUTE{" "}
      </h2>
      <Marquee
        text="Welcome To SST COMPUTER & WELL KNOWLEDGE INSTITUTE. An ISO 9001 : 2015 Certified Institute, Most Demanding Computer Educational Organization, Established Under Ministry of Corporate Affairs, Govt. of India, The Best Institute of Information Technology Education & Development."
        speed={30}
        direction="left"
      />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-5">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mt-4  leading-relaxed">
            Established in{" "}
            <span className="font-semibold text-teal-400">2019</span>, our
            institute has been dedicated to delivering high-quality education in
            <span className="font-semibold text-teal-400">
              {" "}
              basic to advanced computer courses
            </span>
            . We focus on practical learning, strong fundamentals, and
            real-world skills that empower students to build successful careers.
          </p>

          <p className="mt-4  leading-relaxed">
            From beginners exploring computers for the first time to advanced
            learners diving into professional IT training, we ensure every
            student receives personal attention, structured training, and
            industry-oriented knowledge.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-white">
            <div className="bg-amber-700 p-4 rounded-xl text-center border border-amber-700 ">
              <h3 className="text-2xl font-bold ">2019</h3>
              <p className=" text-sm">Founded</p>
            </div>
            <div className="bg-amber-700 p-4 rounded-xl text-center border border-amber-700 ">
              <h3 className="text-2xl font-bold ">1000+</h3>
              <p className=" text-sm">Students Trained</p>
            </div>
            <div className="bg-amber-700 p-4 rounded-xl text-center border border-amber-700 ">
              <h3 className="text-2xl font-bold ">Expert</h3>
              <p className="text-sm">Faculty</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image / Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gray-50 px-6 py-10 rounded-2xl border border-amber-700 shadow-xl">
            <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3>

            <ul className="space-y-3 ">
              <li className="flex gap-2">
                ✅ Structured and Career-Oriented Courses
              </li>
              <li className="flex gap-2">
                ✅ Practical + Concept Based Learning
              </li>
              <li className="flex gap-2">
                ✅ Experienced & Supportive Trainers
              </li>
              <li className="flex gap-2">
                ✅ Doubt Support & Personalized Guidance
              </li>
              <li className="flex gap-2">✅ Affordable & Quality Education</li>
            </ul>

            <div className="mt-10">
              <button
                onClick={() => Router.push("/all-courses")}
                className="px-6 py-3 bg-amber-700 hover:bg-amber-900 transition text-white font-semibold rounded-xl"
              >
                Explore Courses
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
