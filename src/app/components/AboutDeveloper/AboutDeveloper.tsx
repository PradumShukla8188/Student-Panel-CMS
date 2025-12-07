"use client";

import TestimonialSkeleton from "../Skeleton/Testimonial";
import { useEffect, useState } from "react";
import { TestimonialType } from "@/app/types/testimonial";
import Image from "next/image";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const AboutDeveloper = () => {
  const [testimonial, setTestimonial] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // 🔥 Fix: Force slick to recalc after hydration
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/aboutDeveloper");
        if (!response.ok) throw new Error("Failed to fetch developer data.");

        const data = await response.json();
        setTestimonial(data.developerData);
      } catch (error) {
        console.log("Error in fetching data--->", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
      <section id="testimonial-section" className="bg-cream">
        <div className="container">
          <div className="developer-heading">
            <h3>Developer Team</h3>
          </div>

          <Slider key={testimonial.length} {...settings}>
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div key={`skeleton-${i}`}>
                    <TestimonialSkeleton />
                  </div>
                ))
              : testimonial.map((items, i) => (
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

                      <p className="text-sm pt-4 pb-2">{items.profession}</p>
                      <p className="text-2xl font-semibold pb-3">{items.name}</p>

                      <Image
                        src={items.starimg}
                        alt="stars-img"
                        className="m-auto pb-6 w-[30%]"
                        width={32}
                        height={32}
                      />

                      <p className="text-lg font-medium leading-7">
                        {items.detail}
                      </p>
                    </div>
                  </div>
                ))}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default AboutDeveloper;
