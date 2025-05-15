// import Image from "next/image";

import Image from "next/image";
import { ephesis } from "./ui/font";
import Carousel from "./ui/home/carousel";
import { Accordion } from "./ui/home/accordion";

// import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
  <div className="h-screen sticky top-0 z-0">
        <Carousel />
      </div>
      <section className={`
        relative z-10 bg-white p-10 text-darkText
        md:-mt-32 lg:-mt-48 xl:-mt-64
        rounded-t-3xl shadow-lg
      `}>
        <div>
          <Image src='/images/who-we-are.jpg' alt='Who we are' width={2740} height={2740}/>
          <h2 className={`${ephesis.className} antialiased text-6xl mt-4 mb-2`}>
            Who we are
          </h2>
          <p className="text-justify leading-relaxed text-sm">
            At Muheeb Technical Services, we deliver reliable, budget-friendly solutions
            for home renovations, office fit-outs, and maintenance across the UAE. With 5+
            years of trust and on-time delivery, our skilled team ensures quality work for
            every project. From AC repairs to complete interiors, we&aposre your one-stop
            partner for smart, timely, and professional services — built on trust and
            commitment.
          </p>
        </div>

       <Accordion/>
      </section>
      
      {/* Additional content space */}
      <div className="relative z-10 bg-white pb-20"></div>
    </div>

  );
}
