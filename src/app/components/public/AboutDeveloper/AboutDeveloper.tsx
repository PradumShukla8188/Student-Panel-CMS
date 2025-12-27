"use client";

import TestimonialSkeleton from "../../Skeleton/Testimonial";
import { useEffect, useState } from "react";
import { TestimonialType } from "@/app/types/testimonial";
import Image from "next/image";
import dynamic from "next/dynamic";
import { developerData } from "@/data/developer-data";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const AboutDeveloper = () => {
  console.log("developerData-->", developerData);
  const [testimonial, setTestimonial] = useState<TestimonialType[]>(developerData||[]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  }, []);


  if (!isMounted) return null; // Prevent SSR mismatch

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 800, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <main>
      <section id="testimonial-section" className="bg-cream px-4 py-12">
        <div className="container">
          <div className="developer-heading text-4xl mt-5 text-cyan-600">
           Developer Team
          </div>
          <div className="developer-info">
            { testimonial?.map((items, i) => (
                <div key={`dev-${i}`}>
                  <div className="bg-white m-4 pt-8 px-12 pb-10 text-center rounded-lg">
                    <div className="relative z-0 flex justify-center items-center 
                      before:absolute before:bg-[url('/images/testimonial/greenpic.svg')] 
                      before:h-6 before:w-6 before:bottom-0 before:z-10 before:left-[54%]">
                      <Image
                        src={items.imgSrc}
                        alt="dev"
                        width={64}
                        height={64}
                        className="inline-block rounded-full ring-2 ring-white relative"
                      />
                    </div>

                    <p className="text-sm pt-4 pb-2  text-amber-900">{items.profession}</p>
                    <p className="text-2xl font-semibold pb-3 text-amber-800">{items.name}</p>

                    <Image
                      src={items.starimg}
                      alt="stars-img"
                      className="m-auto pb-6 w-[30%]"
                      width={32}
                      height={32}
                    />

                    <p className="leading-7">
                      {items.detail}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutDeveloper;
